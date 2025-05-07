import { createHashRouter, RouterProvider } from "react-router-dom";
import Home from "./UI/Home";
import Error from "./UI/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";

import AppLayout from "./UI/AppLayout";
import AboutUs from "./UI/AboutUs";
import ContactUs from "./UI/ContactUs";
const router = createHashRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      { path: "/cart", element: <Cart /> },
      {
        path: "/about",
        element: <AboutUs />,
        errorElement: <Error />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
        errorElement: <Error />,
      },
    ],
  },
]);
function App() {
  // Connects the router to the application
  return <RouterProvider router={router} />;
}

export default App;
