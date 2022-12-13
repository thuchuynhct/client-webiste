import { BrowserRouter, Route, Routes } from "react-router-dom";
import { navbarLink, navPath } from "./data/navbarLink";
import Footer from "./components/general/Footer";
import Header from "./components/general/Header";
import Work from "./pages/Work";
import Products from "./pages/Products";
import ReadBlog from "./pages/ReadBlog";
import ScrollToTop from "./components/general/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter basename="client-webiste">
        <Header />
        <Routes>
          {
            navbarLink.map(nav => {
              return <Route key={nav.id} index path={nav.link} element={nav.element} />
            })
          }
          <Route path={navPath.readBlog + "/:id"} element={<ReadBlog />} />
          <Route path={navPath.work} element={<Work />} />
          <Route path={navPath.products + "/:id"} element={<Products />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </BrowserRouter>
    </>
  );
}

export default App;
