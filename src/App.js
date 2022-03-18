import "./App.css";
import { Routes, Route } from "react-router-dom";
import AddItem from "./pages/AddItem/AddItem";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import ViewItems from "./pages/ViewItems/ViewItems";
function App() {
  let newArr = [];
  const addItemHanlder = (data) => {
    console.log(data);
    newArr.push(data);
  };
  console.log(newArr);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<AddItem onClick={addItemHanlder} />} />
        <Route path="/viewitems" element={<ViewItems userData={newArr} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
