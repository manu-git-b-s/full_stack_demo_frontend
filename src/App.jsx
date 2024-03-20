import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomeLayout from "../src/pages/HomeLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
