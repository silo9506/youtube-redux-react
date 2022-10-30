import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/organisms/Layout";
import Detail from "./components/organisms/Detail";
import Index from "./components/organisms/Index";
import Search from "./components/organisms/Search";

function App() {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="search/:q" element={<Search />} />
            <Route path="watch/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
