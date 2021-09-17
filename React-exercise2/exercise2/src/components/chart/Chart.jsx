import "./chart.css";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from "recharts";

export default function Chart({ title, data, grid }) {

  return (
    <div className="chart">
      <div className="legend">
          <div className="greenWrapper">
            <div className="greenLine"></div>
            <p>Vượt đèn đỏ</p>
          </div>
          <div className="redWrapper">
            <div className="redLine"></div>
            <p>Đi trên vỉa hè</p>
          </div>
      </div>
      <ResponsiveContainer width="95%" aspect={3 / 1} className="ResponsiveContainer">
        <LineChart data={data}>
          <XAxis dataKey="name" stroke="#D0E5FF" fontSize="10px"/>
          <YAxis stroke="#D0E5FF" fontSize="10px"/>
          <Line type="monotone" dataKey="green" stroke="#28C76F" activeDot={{ r: 4 }} />
          <Line type="monotone" dataKey="red" stroke="#EA5455" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}