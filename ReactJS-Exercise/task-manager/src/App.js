import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/footer";
import Offcanvas from "./components/Offcanvas/offcanvas";
import Header from "./components/Header/header";
import Content from "./components/Content/main";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Offcanvas />
      <Footer />
    </>
  );
}

export default App;
