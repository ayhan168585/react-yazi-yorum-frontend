
import moment from "moment";
import YaziListesi from "./components/YaziListesi"
import YaziDetayi from "./components/YaziDetayi"
import { BrowserRouter as Router, Route } from "react-router-dom"
import YaziEkle from "./components/YaziEkle";
import YaziDuzenle from "./components/YaziDuzenle";

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
          <Route path="/posts/:id" exact component={YaziDetayi}/>
          <Route path="/yaziekle" exact component={YaziEkle}/>
          <Route path="/posts/:id/edit" exact component={YaziDuzenle}/>
        </div>
      </div>
    </Router>
  );
}

export default App;
