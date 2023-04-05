import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PrivateRouter } from "./pages/Private/PrivateRouter";
import { PublicRouter } from "./pages/Public/PublicRouter";
import PrivateRoutes  from "./_helpers/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/*" element={<PublicRouter />} />
      <Route
        path="/user/*"
        element={
          <PrivateRoutes>
            <PrivateRouter />
          </PrivateRoutes>
        }
      />
    </Routes>
  );
}

export default App;