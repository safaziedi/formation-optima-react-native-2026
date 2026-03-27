import { create } from 'zustand';

const useAuthStore = create((set) => ({
  user: null,
  token: null,

  // Action appelée après le succès de la mutation GraphQL
  setAuth: (data) => set({ 
    token: data.accessToken, 
    user: { email: data.email },
  }),

  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;