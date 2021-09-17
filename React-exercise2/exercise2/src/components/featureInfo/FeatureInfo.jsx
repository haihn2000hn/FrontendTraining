import "./featureInfo.css"
import {Videocam} from "@material-ui/icons"

export default function FeatureInfo() {
    return (
        <div class="featureInfo">
            <div className="featureItem feature1">
                <div className="featureItemWrapper">
                    <Videocam className="featureIcons"/>
                    <span className="featureItemTitle">Tổng số camera</span>
                </div>
                <div className="featureItemNumber">894</div>
            </div>
            <div className="featureItem feature2">
                <div className="featureItemWrapper">
                    <Videocam className="featureIcons"/>
                    <span className="featureItemTitle">Camera AI</span>
                </div>
                <div className="featureItemNumber">121</div>
            </div>
            <div className="featureItem feature3">
                <div className="featureItemWrapper">
                    <Videocam className="featureIcons"/>
                    <span className="featureItemTitle">Camera đang h.động</span>
                </div>
                <div className="featureItemNumber">856</div>
            </div>
            <div className="featureItem feature4">
                <div className="featureItemWrapper">
                    <Videocam className="featureIcons"/>
                    <span className="featureItemTitle">Camera dừng h.động</span>
                </div>
                <div className="featureItemNumber">14</div>
            </div>
        </div>
    )
}
