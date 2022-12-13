import "../../style/products/ProductAbout.scss"
import productImg from "../../assets/img/product-10.png"

function ProductAbout() {
    return (
        <section className="product__about">
            <div className="max__w__850">
                <div className="product__about__content">
                    <h3>About the project</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                        <li><p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p></li>
                        <li><p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p></li>
                        <li><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p></li>
                    </ul>
                </div>
                <div className="product__about__img">
                    <img src={productImg} alt="" />
                </div>
                <div className="product__about__content">
                    <h3>How we do it</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <ul>
                        <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
                        <li><p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p></li>
                        <li><p>Duis aute irure dolor in reprehenderit in voluptate velit esse</p></li>
                        <li><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa</p></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductAbout