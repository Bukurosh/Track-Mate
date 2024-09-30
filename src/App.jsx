// App.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import FaqPage from "./components/ui/FaqPage";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import BuyProduct from "./components/BuyProduct";
import Cart from "./components/Cart";
import { CartProvider } from "./components/CartContext"; // Import CartProvider

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Layout wraps around child routes
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/Faq", element: <FaqPage /> },
      { path: "/Log", element: <LogIn /> },
      { path: "/Register", element: <Register /> },
      { path: "/BuyProduct", element: <BuyProduct /> },
      
    ],
  },
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
      <Cart /> 
    </CartProvider>
  );
}

export default App;
