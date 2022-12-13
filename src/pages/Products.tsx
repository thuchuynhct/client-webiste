import { useNavigate, useParams } from "react-router-dom"
import ProductAbout from "../components/products/ProductAbout"
import ProductInfomation from "../components/products/ProductInfomation"
import ProductKeywords from "../components/products/ProductKeywords"
import ProductsImg from "../components/products/ProductsImg"
import WorkContact from "../components/work/WorkContact"
import { productsItem } from "../data/products"

function Products() {
    const navgigate = useNavigate();
    const { id } = useParams();
    const product = productsItem.find(s => s.id === Number(id));
    if (!product) {
        navgigate("/");
        return <></>
    }
    const productInfo = [
        {
            id: 0,
            name: "Client",
            text: "facebook.com"
        },
        {
            id: 1,
            name: "Service",
            text: "Product Design"
        },
        {
            id: 2,
            name: "Deliverable",
            text: "UI Screens, UX Flow & Prototype"
        }
    ]
    return (
        <main>
            <ProductsImg product={product} />
            <ProductInfomation productInfo={productInfo} />
            <ProductAbout />
            <ProductKeywords />
            <WorkContact />
        </main>
    )
}

export default Products