import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Login } from "./pages";

function App() {
      return (
            <BrowserRouter>
                  <Routes>
                        <Route path='/' element={<Layout><Outlet /></Layout>}>
                              <Route index element={<Login/>} />
                              <Route path="redeemCoupon" element={"redimir"}/>
                        </Route>
                  </Routes>
            </BrowserRouter>
      );
}

export default App;
