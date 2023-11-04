import { subscriptions } from "../../data/data"
import { iconsImgs } from "../../utils/images"
import "./Subscriptions.css";

const Subscriptions = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
        <div className="grid-c-title">
            <h3 className="grid-c-title-text">Monday, 1 Nov 2023</h3>
            <button className="grid-c-title-icon">
                <img src={ iconsImgs.plus } />
            </button>
        </div>
        <div className="grid-c5-content">
            <div className="grid-items">
                {
                    subscriptions.map((subscription) => (
                        <div className="grid-item" key = {subscription.id}>
                            <div className="grid-item-l">
                                <div className="icon">
                                    <img src={ iconsImgs.bell } />
                                </div>
                                <p className="text text-silver-v1">{ subscription.title } <span> { subscription.type }</span></p>
                            </div>
                            <div className="grid-item-r">
                                <span className="text-silver-v1">$ { subscription.amount }</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Subscriptions
