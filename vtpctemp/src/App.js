import './App.css';
import { HomePage } from './components/HomePage';
import React from 'react';
import { Route, BrowserRouter as Router, Switch, } from 'react-router-dom';
import {ExportAnalysisCom} from './pages/ExportAnalysisCom';
import {ExportAnalysisState} from './pages/ExportAnalysisState';
import {HsCode} from './pages/HsCode';
import {ImportAnalysisState} from './pages/ImportAnalysisState';
import {ImportAnalysisStateCom} from './pages/ImportAnalysisStateCom';
import {PrincipleCom} from './pages/PrincipleCom';
import {StateAnalytics} from './pages/StateAnalytics';
import {TradeAnalysis} from './pages/TradeAnalysis';
import Sidebar from "./components/Sidebar";
import LoginPage from './LoginPage/Login';


function App() {
  return (
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
        <Switch>
        <Route path='/home' exact component={HomePage} />
        </Switch>
        <Switch>
          <Route path='/vt-temp' exact component={LoginPage} />
        </Switch>
      </Router>
  )
}

export default App;
