import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import About from "./components/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import "./index.scss";
import "./App.scss";
import store from "./app/store.jsx";
import {Provider} from "react-redux";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/error-page.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "music",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [{path: "music/:id", element: <Home />}],
      },
    ],
  },
  ,
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}>
      <Provider store={store} />
    </RouterProvider>
    {/* <Footer /> */}
  </StrictMode>,
);
