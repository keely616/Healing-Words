import { Routes, Route } from "react-router-dom";
import Header from "./Header/Header.jsx";
import Landing from "./Landing/Landing.jsx";
import Foliage from "./Foliage/Foliage.jsx";
import ListeningPage from "./Listening/ListeningPage.jsx";

// Landing page: header, decorative foliage, and the welcome content.
function Home() {
  return (
    <>
      <Header/>
      <Foliage/>
      <Landing/>
    </>
  );
}

// Maps each URL to a page.
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/listening" element={<ListeningPage/>} />
    </Routes>
  );
}

export default App
