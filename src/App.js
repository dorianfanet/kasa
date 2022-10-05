import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Accommodation from "./pages/Accommodation"
import Error from "./components/Error"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/accommodation/:id" element={<Accommodation />}></Route>
      <Route path="*" element={<Error />}></Route>
    </Routes>
  );
}