# Understanding the File Structure

- `/build` - Web server
- `/docs` - App Documentation
- `/firebase` - Firebase functions & data
- `/native-theme` - React Native's theme (via NativeBase)
- `/src` - Contains the source code for both web & native
    - `/constants` - Shared variables (across platforms)
    - `/containers` - 'Smart-components' that connect business logic to presentation [Read More &rarr;](https://mobx.js.org/best/react-performance.html)
    - `/images` - Images shared across platforms
    - `/lib` - Utils and custom libraries that are shared across platforms
    - `/native` - React Native specific code
        - `/components` - 'Dumb-components' / presentational. [Read More &rarr;](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
        - `/constants` - Native-specific variables and config
        - `/routes`- wire up the router with any & all screens [Read More &rarr;](https://github.com/aksonov/react-native-router-flux)
    - `/models`- Mobx Models - [Read More &rarr;](https://mobx.js.org/refguide/api.html)
    - `/observables`- Mobx Observables - [Read More &rarr;](https://mobx.js.org/refguide/observable.html)
    - `/reactions` - Mobx Reactions  to observables - payloads of information that send data _from_ the application _to_ the store. [Read More &rarr;](https://mobx.js.org/refguide/reaction.html)
    - `/store`- Mobx Store - hooks up the stores and provides initial/template states [Read More &rarr;](https://mobx.js.org/best/store.html)
    - `/web` - React-Web specific code
        - `/components` - 'Dumb-components' / presentational. [Read More &rarr;](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
        - `/routes`- wire up the router with any & all screens [Read More &rarr;](https://github.com/aksonov/react-native-router-flux)
        - `/styles`- all the SCSS
