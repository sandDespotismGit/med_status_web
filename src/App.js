import { createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainPage from "./pages/main_page";
const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
