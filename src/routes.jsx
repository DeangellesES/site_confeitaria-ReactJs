import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/index.jsx";
// import Servicos from "./pages/Servicos";
// import Sobre from "./pages/Sobre";
// import Agendamento from "./pages/Agendamento";
// import Contato from "./pages/Contato";

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
            </Routes> 
        </BrowserRouter>
    )
}

export default AppRoutes