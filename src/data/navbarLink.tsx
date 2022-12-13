import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import FAQ from "../pages/FAQ";
import Features from "../pages/Features";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing";

type NavType = {
    id: number,
    element: JSX.Element,
    title: string,
    link: string
}

export const navPath = {
    home: "",
    about: "about",
    features: "features",
    pricing: "pricing",
    faq: "faq",
    blog: "blog",
    readBlog: "read",
    contact: "contact",
    work: "work",
    products: "products"
}

export const navbarLink: NavType[] = [
    { id: 0, element: <Home />, title: "Home", link: navPath.home },
    { id: 1, element: <About />, title: "About us", link: navPath.about },
    { id: 2, element: <Features />, title: "Features", link: navPath.features },
    { id: 3, element: <Pricing />, title: "Pricing", link: navPath.pricing },
    { id: 4, element: <FAQ />, title: "FAQ", link: navPath.faq },
    { id: 5, element: <Blog />, title: "Blog", link: navPath.blog },
    { id: 6, element: <Contact />, title: "Contact us", link: navPath.contact }
]
