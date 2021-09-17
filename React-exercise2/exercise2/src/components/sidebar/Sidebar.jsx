import "./sidebar.css"
import {AcUnit, Adjust, Album} from "@material-ui/icons"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <span className="chartType">Loại biểu đồ</span>
            <div className="sidebarButtonGroup">
                <div className="columnChart">
                    <span className="ChartTitle">Cột</span>
                    <Link to ="/columnChart" className="link">
                        <AcUnit class="button"/>
                    </Link>
                </div>
                <div className="lineChart">
                    <span className="ChartTitle">Đường</span>
                    <Link to ="/lineChart" className="link">
                        <Adjust class="button"/>
                    </Link>
                </div>
                <div className="circleChart">
                    <span className="ChartTitle">Hình tròn</span>
                    <Link to ="/circleChart" className="link">
                        <Album class="button"/>
                    </Link>
                </div>
            </div>
            <div className="sidebarItem">
                <label className="optionTitle">So sánh theo</label>
                <select name="optionBy" id="optionBy" className="option">
                    <option value="ThoiGian">Thời gian</option>
                    <option value="no">Không gian</option>
                </select>
            </div>
            <div className="sidebarItem">
                <label className="optionTitle">Cấp</label>
                <select name="optionBy" id="optionBy" className="option">
                    <option value="ThoiGian">Tỉnh/ Thành Phố</option>
                    <option value="no">Hà Nội</option>
                    <option value="no">HCM</option>
                </select>
            </div>
            <div className="sidebarItem">
                <label className="optionTitle">Bước thời gian</label>
                <select name="optionBy" id="optionBy" className="option">
                    <option value="ThoiGian">Tháng</option>
                    <option value="no">Năm</option>
                </select>
            </div>
            <div className="sidebarItem">
                <label className="optionTitle">Khu vực</label>
                <select name="optionBy" id="optionBy" className="option locationOption">
                    <option value="ThoiGian">Tỉnh/Thành Phố</option>
                    <option value="no">Năm</option>
                </select>
                <select name="optionBy" id="optionBy" className="option locationOption">
                    <option value="ThoiGian">Quận/Huyện</option>
                    <option value="no">Năm</option>
                </select>
                <select name="optionBy" id="optionBy" className="option locationOption">
                    <option value="ThoiGian">Tháng</option>
                    <option value="no">Năm</option>
                </select>
            </div>
        </div>
    )
}
