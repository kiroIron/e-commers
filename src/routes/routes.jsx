import { createBrowserRouter } from "react-router-dom";

// import Root ( layout my site )
import Root from "./layout/Root";

// import routes ( pages 📄 )
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Products /> },
      { path: "product/:id", element: <SingleProduct /> },
    ],
  },
]);

export default routes;
