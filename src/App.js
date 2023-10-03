import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Board from "./components/Board";
import Update from "./components/Update";
function App() {
  return (
    <>
      <div class="container mx-auto  p-3 ">
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Board></Board>}></Route>
            <Route path="/update/:id" element={<Update />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
