import React from "react";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import bootstrap from 'bootstrap';
import Footer from "./Footer";
import {ExportAnalysisCom} from '../pages/ExportAnalysisCom';
import {ExportAnalysisState} from '../pages/ExportAnalysisState';
import {HsCode} from '../pages/HsCode';
import {ImportAnalysisState} from '../pages/ImportAnalysisState';
import {ImportAnalysisStateCom} from '../pages/ImportAnalysisStateCom';
import {PrincipleCom} from '../pages/PrincipleCom';
import {StateAnalytics} from '../pages/StateAnalytics';
import {TradeAnalysis} from '../pages/TradeAnalysis';

var mainDashboard =
  "";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      users: [],
    };
  }
  componentDidMount() {
    this.setState({
      user: JSON.parse(localStorage.getItem("user")),
      users: { loading: true },
    });
  }

  render() {
  
    return (
      <div>
        <Router>
        <Sidebar />
        <Switch>
            <Route path="/hs-code-analysis" exact component={HsCode} />
            <Route path="/export-analysis-commodity" exact component={ExportAnalysisCom} />
            <Route path="import-analysis-state-commodity" exact component={ImportAnalysisStateCom} />
            <Route path="/principle-commodities" exact component={PrincipleCom} />
            <Route path="/export-analysis-state" exact component={ExportAnalysisState} />
            <Route path="/import-analysis-state" exact component={ImportAnalysisState} />
            <Route path="/trade-analysis" exact component={TradeAnalysis} />
            <Route path="/state-analytics" exact component={StateAnalytics} />
        </Switch>
        </Router>
        <div>
        <div dangerouslySetInnerHTML={{ __html: mainDashboard }} />
        </div>
        <Footer />
      </div>
    );
  }
}

export { HomePage };