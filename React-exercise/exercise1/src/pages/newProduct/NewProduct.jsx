import './newProduct.css'
import { Publish } from '@material-ui/icons'

export default function NewProduct() {
    return (
        <div className="newProduct">
            <div className="newProductUpload">
                <label htmlFor="file" class="" className="newProductlabel"><Publish className="productUpdateIcon"/>Choose File</label>
                <input type="file" id="file" style={{display:"none"}}/>
                <form className="c">
                    <div className="newProductItem">
                        <label>Name</label>
                        <input type="text" placeholder="Apple Airpods"/>
                    </div>
                    <div className="newProductItem">
                        <label>Stock</label>
                        <input type="text" placeholder="123"/>
                    </div>
                </form>
                <button className="newProductButton">Create</button>
            </div>
        </div>
    )
}