import "../../style/products/ProductsImg.scss"
import { ProductType } from "../../data/products"

function ProductsImg({ product }: { product: ProductType }) {
    return (
        <section className="products__details">
            <div className="max__w__1050">
                <div className="products__details__introduce">
                    <div className="products__details__introduce__heading">
                        <h6>Web design and development</h6>
                        <h2>{product.title}</h2>
                        <p>{product.desciption}</p>
                    </div>

                    <div className="products__details__introduce__img">
                        <img src={product.img} alt="" />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductsImg