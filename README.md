# Getting Started with React with Reduxjs Toolkit App

This is a demo React app using Redux RTK query.
We will create a small Dogs API example.

The correct steps to use the latest reduxjs-toolkit with RTP query are:

## Create a project with template

- using the `redux-typescript` template to start a project template.

```
yarn create react-app redux-rtk-query --template redux-typescript
```

- empty the `/src` folder
- add back index.tsx/index.css, App.tsx/App.css, react-app-env.d.ts, logo.svg

you should be able to run:

```
yarn start
```

## Create an API Slice (dogs-api-slice)

[Create an API Slice](https://redux-toolkit.js.org/rtk-query/overview#create-an-api-slice)

- Use `createApi()` to define a service using a base URL and expected endpoints (nested sub-urls under the base url).
- Export hooks for usage in functional components, which are auto-generated based on the defined endpoints

```typescript
export const { useAn_End_Point_NameQuery } = apiSlice;
```

## Configure the Store

We then create a `store` under a folder called `app`.
We will use the `configureStore({reducer: ...})` from the reduxjs-toolkit to create this store.

In the previous step, the exporeted "API slice" contains an auto-generated Redux slice reducer (apiSlice.reducer) and a custom middleware that manages subscription lifetimes. Both of those need to be added to the Redux store:

[Configure the Store](https://redux-toolkit.js.org/rtk-query/overview#configure-the-store)

- Add Slice Reducers to the Store: [add slice reducers to the store](https://redux.js.org/tutorials/quick-start#add-slice-reducers-to-the-store)

The store should export the `store`, the `store.dispatch` and the `RootState`:

```typescript
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
```

[create a redux store](https://redux.js.org/tutorials/quick-start#create-a-redux-store)

## Provide the Redux Store to React

We can now use hooks in React components.

[Use Hooks in Components](https://redux-toolkit.js.org/rtk-query/overview#use-hooks-in-components)

The way to wire the store to the app is to import the `store` and the `Provider` to the wrap the store inside of the provider as in:

```typescript
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

The `<App />` will then render the `<Dogs />` redux component.

At this time, you should be able start the app with `yarn start` and see the state in the `Redux DevTools`.

[Wire the index.tsx to use `Provider` and `store`](https://redux.js.org/tutorials/quick-start#provide-the-redux-store-to-react)

## Create a React component \<Dogs />

[using the Redux hooks](https://redux-toolkit.js.org/rtk-query/overview#use-hooks-in-components)

Using an RTK query hook automatically fetches data and returns query values

```typescript
const [numDogs, setNumDogs] = useState(5);
const { data = [], isFetching } = useFetchBreedsQuery(numDogs);
console.log(data);
```

## Call the Redux component from the \<App />

```typescript
import { Dogs } from "./features/dogs/Dogs";

<Dogs />;
```
