

import { ApolloClient, InMemoryCache, HttpLink, split, from } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import Constants from 'expo-constants'
import useAuthStore from '../store/authStore'

const getAuthToken = () => {
    try {
        const token = useAuthStore.getState().token;
        return token;
    } catch (error) {
        console.error("Erreur lors de la récupération du token:", error);
        return null;
    }
}

// Map localhost to Android emulator host (10.0.2.2) to avoid hanging requests
const normalizeHostForAndroid = (url) => {
    if (!url) return url
    const isAndroid = (Constants?.platform)?.android
    if (isAndroid && url.includes('localhost')) {
        return url.replace('localhost', '10.0.2.2')
    }
    return url
}

const HTTP_URL = normalizeHostForAndroid(
    process.env.EXPO_PUBLIC_GRAPHQL_API_URL
)

if (!HTTP_URL) {
    console.warn(
        '[graphql] Missing GRAPHQL API URL. Set EXPO_PUBLIC_GRAPHQL_API_URL or extra.GRAPHQL_API_URL in app.json.'
    )
}

// Basic HTTP link
const httpLink = new HttpLink({
    uri: HTTP_URL ?? 'http://localhost:4000/graphql',
})

// Auth middleware adds Authorization header if token exists, but skips for auth ops (e.g., Login)
const authLink = setContext(async (operation, { headers }) => {
    const ctx = typeof (operation)?.getContext === 'function' ? (operation).getContext() : {}
    const opName = (operation)?.operationName
    const skipAuth = ctx?.skipAuth || opName === 'Login'
    if (skipAuth) {
        console.log("token skipped")
        return { headers: { ...headers } }
    }
    const token = await getAuthToken()
    console.log("token:", token)
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    }
})

const errorLink = onError((err) => {
    const { graphQLErrors, networkError, operation } = err || {}
    if (graphQLErrors?.length) {
        graphQLErrors.forEach((gqErr) => {
            const { message, locations, path } = gqErr || {}
            console.log(`[GraphQL error][${operation?.operationName}]: ${message}`, { locations, path })
        })
    }
    if (networkError) {
        console.log(`[Network error][${operation?.operationName}]`, networkError)
        const status = (networkError)?.statusCode || (networkError)?.response?.status
        const result = (networkError)?.result
        if (result?.errors?.length) {
            result.errors.forEach((err) => {
                console.log(`[GraphQL error via networkError]:`, err.message)
            })
        }
        if (status === 500 || status === 503) {
            console.warn('[Network error] Server error, keeping tokens')
        }
    }
})


// Apollo Client reference for use in refresh callbacks
let apolloClientRef = null

const link = from([errorLink, authLink, httpLink])

export const apolloClient = new ApolloClient({
    cache: new InMemoryCache({
        // typePolicies: {
        //     Query: {
        //         fields: {
        //             currentDelivery: {
        //                 // Allow null values - don't throw on missing fields
        //                 read(existing) {
        //                     return existing ?? null;
        //                 },
        //             },
        //         },
        //     },
        // },
    }),
    link,
    defaultOptions: {
        watchQuery: {
            fetchPolicy: 'cache-and-network',
            errorPolicy: 'none', // Changed from 'all' to prevent cache write errors
        },
        query: {
            fetchPolicy: 'network-only',
            errorPolicy: 'none', // Changed from 'all' to prevent cache write errors
        },
        mutate: {
            errorPolicy: 'all', // Keep 'all' for mutations to get both data and errors
        },
    },
})

// Store client reference for use in refresh callbacks
apolloClientRef = apolloClient

export default apolloClient
