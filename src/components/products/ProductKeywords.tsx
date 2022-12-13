import "../../style/products/ProductKeywords.scss"

const productKeywords = [
    "Design",
    "UI/UX",
    "Wireframing",
    "Branding",
    "Development",
    "webflow",
]
function ProductKeywords() {
    return (
        <div className="product__keywords">
            <div className="max__w__850">
                <ul className="product__keywords__list">
                    <li><h6>Keywords</h6></li>
                    {
                        productKeywords.map((item, index) => {
                            return (
                                <li key={index}>
                                    <p>{item}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default ProductKeywords