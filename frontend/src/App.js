import "./App.css";
import Homepage from "./pages/Homepage";
import Chatpage from "./pages/Chatpage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Homepage />} />
        <Route path="/chats" index element={<Chatpage />} />
      </Routes>
    </div>
  );
}

export default App;
