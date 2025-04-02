import Navbar from "./components/Navbar"
import Add from "./components/Add"
import View from "./components/View"
import Edit from "../src/components/Edit"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {

  return (
    <>
       <Router>
      <Navbar />
      <div  className="body-content" >
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/view" element={<View />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
      </div>
    </Router>
    </>
  )
}

export default App
