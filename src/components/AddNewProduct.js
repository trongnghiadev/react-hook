import { useState } from "react";
const AddNewProduct = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [size, setSize] = useState("");
    const [color, setColor] = useState("");
    const [hide, setHide] = useState(false);
    const clickShow = (status) => {
        setHide(status)
    }

    const handleClickBtn = () => {
        let obj = {
            name: name,
            price: price,
            size: size,
            color: color,
        }

        let productList = localStorage.getItem("productList");
        if (productList) {
            let arr = JSON.parse(productList);
            arr.push((obj))
            localStorage.setItem("productList", JSON.stringify(arr));
        }
        else {
            localStorage.setItem("productList", JSON.stringify([obj]))
        }

        setName("");
        setPrice(0)
        setColor("");
        setSize(0);



    }

    return (
        <div>
            {
                hide === false &&
                <fieldset>
                    <legend>Add A New Product</legend>
                    <div className="input-product">
                        <label>Name</label>
                        <input value={name} type={"text"} onChange={(event) => setName(event.target.value)}></input>
                    </div>

                    <div className="input-product">
                        <label>Price:</label>
                        <input value={price} type={"text"} onChange={(event) => setPrice(event.target.value)}></input>
                    </div>

                    <div className="input-product">
                        <label>Size:</label>
                        <input value={size} type={"text"} onChange={(event) => setSize(event.target.value)}></input>
                    </div>

                    <div className="input-product">
                        <label>Color:</label>
                        <input value={color} type={"text"} onChange={(event) => setColor(event.target.value)}></input>
                    </div>
                    <div>
                        <button onClick={() => handleClickBtn()}>Add New</button>
                    </div>

                </fieldset >
            }

            {
                hide === true ?
                    <div onClick={() => clickShow(false)} >Show this form</div> :
                    <div onClick={() => clickShow(true)}  >Hide this form</div>
            }
            <div>
                Product List:

                {localStorage.getItem("productList")}
            </div>


        </div>
    )
}

export default AddNewProduct;