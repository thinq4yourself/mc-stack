# MC2 Serverless Client Stack - React Web + Native

## Intro

The MC2 serverless client stack includes both the [React web app](https://reactjs.org/) and [React Native app](https://facebook.github.io/react-native/) apps, sharing a single code base so it can share common business logic across each platform, while staying flexibile in the respective view components.

- A shared React and React Native structure
- __Flux architecture__ (coming soon)
    - [Mobx](https://github.com/mobxjs/mobx)
- __Flux architecture NextGen__ (coming soon)
    - [Mobx state tree](https://github.com/mobxjs/mobx-state-tree)
- __Routing and navigation__
    - [React Native Router Flux](https://github.com/aksonov/react-native-router-flux) for native mobile
    - [React Router](https://github.com/ReactTraining/react-router) for web
- __Data Caching / Offline__ (coming soon)
- __UI Toolkit/s__ (optional)
    - [Native Base](https://nativebase.io/) for native mobile (production quality)
    - [Bootstrap](https://getbootstrap.com/) for simplicity sake (not recommended for production use)
- __Full life cycle rapid mobile development__ 
    - [Expo](https://expo.io/)
- __User authentication, data store, and more__ 
    - [Firebase](https://firebase.google.com/)
- __Serverless Functions__
    - [Firebase Functions](https://firebase.google.com/products/functions/) (current)
- __Code Linting__ with
    - [Airbnb's JS Linting](https://github.com/airbnb/javascript) guidelines

---

## Get thgings started

#### 1. Clone and install

_*It's recommended that you install [React Native Debugger](https://github.com/jhen0409/react-native-debugger/releases) and open before `npm start`._

```bash
# Clone the repo
git clone https://github.com/thinq4yourself/mc-stack.git

# Install dependencies
yarn
```
> Alternatively  run `npm i`

#### 2 Run _React Native_ App
> Muahahahaha - this does not work yet - but it will :)

```bash
# Start the React Native packager
yarn start
```
> Alternatively  run `npm start`

Instructions are shown in the terminal. You can select to open the native app in either:

- A mobile device running the [Expo app](https://expo.io/) - hot loaded - build errors and logs in the terminal
- An emulator (either iOS or Android)

#### 2 Run the _Web_ App
> Muahahahaha - this does not work yet - but it will :)

```bash
# Starts local live-reload server at:
# http://localhost:3001
npm run web
```

Starts localhost server on port 3001 [http://localhost:3001](http://localhost:3001).

- Install [Mobx DevTools](https://github.com/mobxjs/mobx-react-devtools) into Chrome to see the state of Mobx