// App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./pages/Form";
import UserInfoPage from "./pages/UserInfoPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/form" element={<Form></Form>}></Route>

        <Route path="/userinfo" element={<UserInfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
