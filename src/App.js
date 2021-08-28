
import moment from "moment";
import YaziListesi from "./components/YaziListesi"
import YaziDetayi from "./components/YaziDetayi"
import { BrowserRouter as Router, Route } from "react-router-dom"

function App() {



  return (
    //Header
    //PostList
    <Router>
      <div className="main-wrapper">
        <header>

        </header>
        <div className="ui raised very padded text container segment">
          <Route path="/" exact component={YaziListesi} />
          <Route path="/posts/:id" component={YaziDetayi}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
