import { createRoot } from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";


createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
