import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register";
import Err404 from "./pages/Err404"

function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<Err404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App