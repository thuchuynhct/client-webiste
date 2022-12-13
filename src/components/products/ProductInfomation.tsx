import "../../style/products/ProductInfomation.scss"

function ProductInfomation({ productInfo }: { productInfo: any[] }) {
    return (
        <section className="products__info">
            <div className="max__w__1050">
                <div className="products__info__card">
                    {
                        productInfo.map(item => {
                            return (
                                <div key={item.id} className="products__info__card__item">
                                    <p>{item.name}</p>
                                    <h6>{item.text}</h6>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default ProductInfomation