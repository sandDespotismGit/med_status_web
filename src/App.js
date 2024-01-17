import { createHashRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MainPage from "./pages/main_page";
import Terapia from "./pages/terapia";
import Uzi from "./pages/uzi";
import Urologia from "./pages/urologia";
import Pediatria from "./pages/pediatria";
import Cardiologia from "./pages/cardiologia";
import Ginekolog from "./pages/ginekolog";
import Analys from "./pages/analys"
import IV from "./pages/iv";
import Neuro from "./pages/neuro";
import Checkup from "./pages/ckeckup";
import Chirurg from "./pages/chirurg";
import Endo from "./pages/endo";
import Docs from "./pages/docs";
import Price from "./pages/prices";
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
  /*{
    path: "/pediatr",
    element: <Pediatria />,
  }, */
  {
    path: "/cardio",
    element: <Cardiologia />,
  },
  {
    path: "/ginekolog",
    element: <Ginekolog />,
  },
  {
    path: "/analys",
    element: <Analys />,
  },
  {
    path: "/iv",
    element: <IV />,
  },
  {
    path: "/neuro",
    element: <Neuro />,
  },
  {
    path: "/checkup",
    element: <Checkup />,
  },
  /* {
    path: "/hirurgia",
    element: <Chirurg />,
  }, */
  {
    path: "/endo",
    element: <Endo />,
  },
  {
    path: "/contacts",
    element: <Docs />,
  },
  {
    path: "/price",
    element: <Price />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
