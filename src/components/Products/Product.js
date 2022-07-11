import "./Product.scss"
import snicker from "../../assets/img/1.jpg"
import snicker1 from "../../assets/img/2.jpg"
import snicker2 from "../../assets/img/3.jpg"
import snicker3 from "../../assets/img/4.jpg"
import snicker4 from "../../assets/img/5.jpg"
import Lightbox from 'react-image-lightbox';
import { useState } from "react"

const images = [
    snicker,
    snicker1,
    snicker2,
    snicker3,
    snicker4,
];


const Product = () => {
    const [click, setclick] = useState(snicker)
    const [isOpen, setisOpen] = useState(false)
    const [photoIndex, setphotoIndex] = useState(0);
    const handleClick = () => {
        let index = images.findIndex(item => item === click);
        setphotoIndex(index)
        setisOpen(true)
    }
    return (
        <div>
            <div className="product-container">
                <div className="content-left">
                    <div className="img-top">
                        <img src={click} onClick={() => handleClick()} />
                    </div>
                    <div className="img-bot">
                        <div className="img-small">
                            <img src={snicker1} onClick={() => setclick(snicker1)} className={click === snicker1 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker2} onClick={() => setclick(snicker2)} className={click === snicker2 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker3} onClick={() => setclick(snicker3)} className={click === snicker3 ? "active" : ""} />
                        </div>
                        <div className="img-small">
                            <img src={snicker4} onClick={() => setclick(snicker4)} className={click === snicker4 ? "active" : ""} />
                        </div>

                    </div>
                </div>
                <div className="content-right">
                    <div className="title">Giày chạy bộ nam New Balance - M860E1</div>
                    <div className="price">99999.99999 đ</div>
                    <div className="size">Size: 41</div>
                    <div className="action">
                        <label className="quantity" >Số lượng</label>
                        <input type="number" min={1} value={1} />
                        <button className="buy">Chọn Mua</button>
                    </div>

                </div>
            </div>
            {isOpen && (
                <Lightbox
                    mainSrc={images[photoIndex]}
                    nextSrc={images[(photoIndex + 1) % images.length]}
                    prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                    onCloseRequest={() => setisOpen(false)}
                    onMovePrevRequest={() => setphotoIndex((photoIndex + images.length - 1) % images.length)}
                    onMoveNextRequest={() => setphotoIndex((photoIndex + 1) % images.length)}
                    animationDuration={600}

                />
            )}
        </div>
    )
}

export default Product;