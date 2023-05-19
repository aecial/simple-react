import "./App.css";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
function App() {
  let navLinks = ["Random Cat", "Random Cat Gif", "Cat Breeds", "Cat Fact"];
  return (
    <>
      <Navbar links={navLinks} />
      <MainSection />
    </>
  );
}
export default App;
