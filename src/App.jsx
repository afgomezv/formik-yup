import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Form } from "./components/pages/Form";
import { Login } from "./components/pages/Login";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/home" element={<Home />} />
          <Route path="form" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
