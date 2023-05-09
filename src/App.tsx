import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home, Login } from "./pages";

function App() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path='/' element={<Layout><Outlet /></Layout>}>
                              <Route index element={<Login />} />
                              <Route path="redeemCoupon" element={<Home />} />
                        </Route>
                  </Routes>
            </BrowserRouter>
      );
}

export default App;
