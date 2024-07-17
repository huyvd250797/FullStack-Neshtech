import logo from "./logo.svg";
import "./App.css";
import HomPage from "./pages/HomePage";
import Demo from "./components/Demo";

function App() {
  return (
    <>
      <div className="App">
        <HomPage />
      </div>

      {/* gọi component demo */}
      <div>
        <Demo />
      </div>
    </>
  );
}

export default App;
