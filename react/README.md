# React Frame

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## NPM Packages

- [react-redux](https://react-redux.js.org/)
- [react-bootstrap](https://react-bootstrap-v4.netlify.app/)
- [formik](https://formik.org/)
- [yup](https://github.com/jquense/yup)

## Recomended Chrome Extensions for Development

- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)

## Directory Tree

```
├── README.md
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── App.js - Sets up the auth and routing.
│   ├── assets - Global static assets such as images, svgs, company logo, etc.
│   │   └── style - For CCS Style files
│   │       └── index.css
│   ├── axios
│   │   └── index.js - Configrure [axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
│   ├── components - Global shared/reusable components, such as layout (wrappers, navigation), form components, buttons
│   │   ├── Error.js
│   │   ├── Header.js
│   │   ├── Loading.js
│   │   ├── NavBar.js
│   │   ├── PaginationBar.js
│   ├── index.js - The entry point -inject React App into HTML DOM
│   ├── pages - The majority of the app would be contained here. Pages are organized by route.
│   │   ├── Login - For route - "/login"
│   │   │   └── LoginPage.js
│   │   └── Post - For route - "/post"
│   │       ├── PostList.js - Component used in PostPage
│   │       └── PostPage.js
│   ├── reportWebVitals.js
│   ├── router - For routing purpose
│   │   ├── AppRouter.js - Main router for whole App.
│   │   ├── PrivateRoute.js - Route only for authorized useage only
│   │   └── PublicRoute.js - Route for public access
│   ├── setupTests.js
│   ├── store - Global Redux store
│   │   ├── actions
│   │   │   └── types.js - Declare action types
│   │   ├── index.js - Configure Redux Store
│   │   └── reducers - For reducers
│   │       ├── auth.js - Auth related action
│   │       └── index.js - Combine reducers and export as one module
│   └── utils - Utilities, helpers, constants, and the like
│       ├── constants
│       │   └── constant.js
│       └── helpers
│           └── index.js
└── yarn.lock - THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
```

## `components`

Common components that could easily be used across multiple sections of the app.

## `pages`

Here's where the main part of your app will live: in the `pages` directory. Pages are organized by route.
eg., `post` folder for "/post" route.

## `router`

Include route setup and auth(private, public) route modules.

## `store`

The global data store will be contained in the store directory.

## `utils`

`utils` folder is usually some global utility functions, like validation and conversion, that could easily be used across multiple sections of the app.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
