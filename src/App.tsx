/** @format */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home/Home";
import "./App.css";
import LayOut from "./components/LayOut/LayOut";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import NotFound from "./components/NotFound/NotFound";
import TokenContextProvider from "./context/tokenContext.tsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  AuthProtectedRoutes,
  LayoutProtectedRoutes,
} from "./components/AllProtectedRoutes/AuthProtectedRoute/AuthProtectedRoutes.tsx";
import ProductInfo from "./components/ProductInfo/ProductInfo.tsx";
//react query
const queryClient = new QueryClient();
function App() {
  const MyRouter = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        { index: true, element: <Home /> },
        { path: "home", element: <Home /> },
        {
          path: "register",
          element: (
            <AuthProtectedRoutes>
              <Register />
            </AuthProtectedRoutes>
          ),
        },
        {
          path: "login",
          element: (
            <AuthProtectedRoutes>
              <Login />
            </AuthProtectedRoutes>
          ),
        },
        { path: "products", element: <Products /> },
        { path: "categories", element: <Categories /> },
        { path: "brands", element: <Brands /> },
        { path: "details/:id", element: <ProductInfo /> },
        {
          path: "cart",
          element: (
            <LayoutProtectedRoutes>
              <Cart />
            </LayoutProtectedRoutes>
          ),
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <TokenContextProvider>
          <RouterProvider router={MyRouter}></RouterProvider>
        </TokenContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
