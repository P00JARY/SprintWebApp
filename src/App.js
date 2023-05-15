import { BrowserRouter as Router } from "react-router-dom";
import RouteCombiner from "./Routes/userRoutes/RouteCombiner";
import Routes from "./Routes/Routes";


function App() {
  return (
    <>
      <div>
        <Router>
          <RouteCombiner
            routes={Routes}
          />
        </Router>
      </div>
    </>
  );
}
export default App;
