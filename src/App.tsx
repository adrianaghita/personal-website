import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes";

function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
