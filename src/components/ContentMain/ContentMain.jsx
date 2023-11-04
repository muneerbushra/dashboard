import "./ContentMain.css";
import Cards from "../Cards/Cards";
import Report from "../Report/Report";
import Budget from "../Budget/Budget";
import Subscriptions from "../Subscriptions/Subscriptions";
import Financial from "../Financial/Financial";

const ContentMain = () => {
  return (
    <div className="main-content-holder">
        <div className="content-grid-one">
        <Report />
            <Cards />
           
           
        </div>
        <div className="content-grid-two">
            <Budget />
           

            <div className="grid-two-item">
              <div className="subgrid-two">
              <Subscriptions />
                <Financial />
              </div>
            </div>
        </div>
    </div>
  )
}

export default ContentMain
