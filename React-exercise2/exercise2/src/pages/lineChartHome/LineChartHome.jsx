import "./lineChartHome.css"
import FeatureInfo from "../../components/featureInfo/FeatureInfo"
import Topbar from "../../components/topbar/Topbar"
import Chart from "../../components/chart/Chart"
import { data } from "../../dummyData"

export default function LineChart() {
    return (
        <div className="lineChartHome">
            <Topbar/>
            <FeatureInfo/>
            <Chart data={data} grid/>
        </div>
    )
}