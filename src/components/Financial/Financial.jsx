import { iconsImgs } from "../../utils/images"
import './Financial.css'

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Save more money</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c8-content">
            <p className="text text-silver-v1">Ipsum dolor sit amet consectetur, adipisicing elit.
                Iste, vitae.....</p>
            <button className="btn">View tips</button>
        </div>
    </div>
  )
}

export default Financial
