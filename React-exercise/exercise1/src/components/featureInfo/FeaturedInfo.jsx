import './featuredInfo.css'
import {ArrowDownward, ArrowUpward} from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$12,345</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$12,345</span>
                    <span className="featuredMoneyRate">
                        -11.4
                        <ArrowDownward className="featuredIcon negative"/>
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$4,345</span>
                    <span className="featuredMoneyRate">
                        +3.4
                        <ArrowUpward className="featuredIcon"/>
                    </span>
                </div>
                <span className="featureSub">Compared to last month</span>
            </div>
        </div>
    )
}