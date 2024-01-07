import { createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainPage from "./pages/main_page";
import Terapia from "./pages/terapia";
import Uzi from "./pages/uzi";
import Urologia from "./pages/urologia";
import Pediatria from "./pages/pediatria";
import Cardiologia from "./pages/cardiologia";
const router = createHashRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/terapy",
    element: <Terapia />,
  },
  {
    path: "/uzi",
    element: <Uzi />,
  },
  {
    path: "/uro",
    element: <Urologia />,
  },
  {
    path: "/pediatr",
    element: <Pediatria />,
  },
  {
    path: "/cardio",
    element: <Cardiologia />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
