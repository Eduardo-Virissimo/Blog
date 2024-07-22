import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//paginas & componenetes
import Homepage from "./components/Homepage";
import Header from "./components/Header";

import Login from "./login/page";
import Register from "./register/page";
import Contact from "./contact/page";

//Loading, telas de transição
import Loading from "./components/Loading";
import StarTransition from "./components/StairTransition";
import PageTransition from "./components/PageTransition";

// eslint-disable-next-line react/prop-types
const App = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <Router>
        <Header />
        <StarTransition />
        <PageTransition>{children}</PageTransition>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  }
};

export default App;
