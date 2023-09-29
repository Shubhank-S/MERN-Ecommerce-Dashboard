import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element />
          <Route path="/" element />
          <Route path="/" element />
          <Route path="/" element />
          <Route path="/" element />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
