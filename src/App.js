import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicRouter from "./pages/Public/PublicRouter";
import PrivateRouter from "./pages/Private/PrivateRouter";
import PrivateRoutes from "./_helpers/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;