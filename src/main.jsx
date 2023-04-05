import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import RouterError from './Router/RouterError';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import CharacterInfo from './Router/CharacterInfo'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouterError/>
  },
  {
    path:"/character/:id",
    element: <CharacterInfo/>,
    errorElement: <RouterError/>
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
          <RouterProvider router={router}/>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
