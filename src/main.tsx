import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import store from './redux/store/index.tsx';
import PokemonDetails from './screens/pokemonDetails.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:id",
    element: <PokemonDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
