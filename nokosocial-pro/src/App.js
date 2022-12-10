import Navbar from "./components/nav/Navbar";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import Middle from "./components/middle/Middle";
import Rightbar from "./components/rightbar/Rightbar";
import Theme from "./components/theme/Theme";

function App() {
  return (
    <>
      <Navbar />;
      <main>
        <div className="container">
          <Sidebar />
          <Middle />
          <Rightbar />
        </div>
      </main>
      <Theme />
    </>
  );
}

export default App;
