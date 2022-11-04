import "./App.css";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    // <Router>
    //   <div className="App">
    //     <Routes>
    //       <Route exact path="/">
    //         <Home />
    //       </Route>
    //       <Route path="/contact">
    //         <Contact />
    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>

    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="home" element={<Home />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="/contact">
          <Route path="contact" element={<Contact />} />
          <Route index element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
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
