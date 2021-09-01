import Chart from '../../chart/Chart'
import FeaturedInfo from '../../featuredInfo/FeaturedInfo'
import './home.css'
import { userData } from '../../../dummyData'
import WidgetSm from '../../widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'

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
