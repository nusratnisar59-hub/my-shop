import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/" element={<Products />} />
         <Route path="/products" element={<Products />} />
         <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;



// import { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Products from "./pages/products";
// import ProductDetail from "./pages/ProductDetail";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <Router>
//           <Navbar />
//           <Routes>
//             <Route path="/" element={<Products />} />
//             <Route path="/products" element={<Products />} />
//             <Route path="/products/:id" element={<ProductDetail />} />
//           </Routes>
//           <Footer />
//         </Router>
//       </div>
//     </>
//   )
// }

// export default App
