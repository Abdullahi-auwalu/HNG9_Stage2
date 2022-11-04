import "./App.css";
import Contact from "./pages/contact/Contact";
// import Home from "./pages/home/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Contact />
    </div>
  );
}

export default App;

// <BrowserRouter>
//   <Routes>
//     <Route path="/">
//       <Route path="home" element={<Home />} />
//       <Route index element={<Home />} />
//     </Route>
//   </Routes>
// </BrowserRouter>
