import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";

import Destinations from "./pages/destinations/Destinations";
import Destination from "./pages/destination/Destination";

import "./styles/global.scss";

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div>
          <div>
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/destinations",
          element: <Destinations />,
        },
        {
          path: "/destination/:id",
          element: <Destination />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
