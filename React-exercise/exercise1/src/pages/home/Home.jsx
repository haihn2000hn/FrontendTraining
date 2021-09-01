import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featureInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../dummyData'
import WidgetLg from '../../components/widgetLg/WidgetLg'
import WidgetSm from '../../components/widgetSm/WidgetSm'

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <Chart title="User Analytics" data={userData} dataKey="Active User" grid/>
            <div className="homeWidgets">
                <WidgetSm/>
                <WidgetLg/>
            </div>
        </div>
    )
}