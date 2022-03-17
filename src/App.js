import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddItem from "./pages/AddItem/AddItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ViewItems from "./pages/ViewItems/ViewItems";
import { useState } from "react";
function App() {
  const [userData, setUserData] = useState();
  const addItemHanlder = (data) => {
    setUserData(data);
  };
  console.log(userData);

  return (
    <div className="App">
      {/* <BrowserRouter> */}
      <Header />
      {/* {location.pathname == "/" ? <LeftNav /> : null}
      <LeftNav /> */}
      <Routes>
        <Route path="/" element={<AddItem onClick={addItemHanlder} />} />
        <Route path="/viewitems" element={<ViewItems userData={userData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;
