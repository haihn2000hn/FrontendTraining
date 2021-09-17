import "./app.css"
import Sidebar from "./components/sidebar/Sidebar";
import LineChartHome from "./pages/lineChartHome/LineChartHome";
import ColumnChartHome from "./pages/columnChartHome/ColumnChartHome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Switch>
            <Route path="/lineChart">
              <LineChartHome/>
            </Route>
            <Route path="/columnChart">
              <ColumnChartHome/>
            </Route>
            <Route path="/CircleChart">
              <ColumnChartHome/>
            </Route>
          </Switch>
          <Sidebar/>
        </div>
      </div>
    </Router>
  );
}

export default App;
