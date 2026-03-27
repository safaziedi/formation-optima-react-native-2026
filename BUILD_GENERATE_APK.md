Pas de fioritures, voici le mode d'emploi direct pour sortir ton APK via le Cloud d'Expo (EAS) , y a une autre méthode avec android studio (local) sans attendre le queue

### 📋 Checklist Rapide

1. **Compte Expo** : Tu dois avoir un compte sur [expo.dev](https://expo.dev).
and login to it 
2. **EAS CLI** : Installé sur ton PC (`npm install -g eas-cli`).



```bash
eas login

eas build:configure

npx expo install --check

npx expo prebuild

eas build -p android --profile preview

```

if build is ok => scan the qr code / open the link to install the app in the android 

hint : add "NPM_CONFIG_LEGACY_PEER_DEPS": "true", to eas file to resolve peer dependecies problems
add env files to eas file
add scheme in app.json
Rq : commit last changes (because it read from last commit from github)