import React from "react";
import bootstrap from 'bootstrap';
import Footer from "./Footer";
import './HomePage.css';
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {ExportAnalysisCom} from '../pages/ExportAnalysisCom';
// import {ExportAnalysisState} from '../pages/ExportAnalysisState';
// import {HsCode} from '../pages/HsCode';
// import {ImportAnalysisState} from '../pages/ImportAnalysisState';
// import {ImportAnalysisStateCom} from '../pages/ImportAnalysisStateCom';
// import {PrincipleCom} from '../pages/PrincipleCom';
// import {StateAnalytics} from '../pages/StateAnalytics';
// import {TradeAnalysis} from '../pages/TradeAnalysis';
// import Sidebar from "./Sidebar";


var mainDashboard =
  // "<iframe src=\"http://localhost:5601/app/kibana#/visualize/edit/475c8450-021f-11ec-9535-7de79a071bab?embed=true&_g=()\" height=\"600\" width=\"800\"></iframe>";
  "<iframe src=\"http://localhost:5601/app/dashboards#/view/c90758a0-1a15-11ec-9abc-5f50c28dd159?embed=true&_g=(filters:!(),refreshInterval:(pause:!t,value:0),time:(from:now-15m,to:now))&_a=(description:'',filters:!(),fullScreenMode:!f,options:(hidePanelTitles:!f,useMargins:!t),panels:!((embeddableConfig:(enhancements:(),vis:(legendOpen:!t)),gridData:(h:15,i:'1',w:24,x:0,y:0),id:b97c9b30-1997-11ec-952b-6557b18db723,panelIndex:'1',type:visualization,version:'7.14.0'),(embeddableConfig:(enhancements:(),vis:(legendOpen:!t)),gridData:(h:15,i:'2',w:24,x:24,y:0),id:d799cde0-1997-11ec-952b-6557b18db723,panelIndex:'2',type:visualization,version:'7.14.0'),(embeddableConfig:(enhancements:(),vis:(legendOpen:!t)),gridData:(h:15,i:'3',w:24,x:0,y:15),id:ed2035f0-1997-11ec-952b-6557b18db723,panelIndex:'3',type:visualization,version:'7.14.0'),(embeddableConfig:(enhancements:(),vis:(legendOpen:!t)),gridData:(h:15,i:'4',w:24,x:24,y:15),id:'021b7500-1998-11ec-952b-6557b18db723',panelIndex:'4',type:visualization,version:'7.14.0')),query:(language:kuery,query:''),tags:!(),timeRestore:!f,title:'Karnataka%20Performance%20commodity%20wise',viewMode:view)\" height=\"600\" width=\"800\"></iframe>";
  // "<iframe src=\"http://localhost:5601/goto/2264004f39b1da23f4bfdb8c2b86a3b0\" height=\"600\" width=\"800\"></iframe>"
var secondDashboard = 
  "<iframe src=\"http://localhost:5601/goto/8ab5e0ca2dd870e5f8346dd6c9e259ba\" height=\"300\" width=\"550\" margin=\"5px\"></iframe>"
/* <iframe src="http://localhost:5601/app/dashboards#/view/0f052ea0-02a5-11ec-abea-b52de399fc8c?embed=true&_g=(filters%3A!()%2CrefreshInterval%3A(pause%3A!f%2Cvalue%3A900000)%2Ctime%3A(from%3Anow-7d%2Cto%3Anow))&hide-filter-bar=true" height="600" width="800"></iframe> */
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
      <div className = 'homepage'>
        {/* <Router>
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
        </Switch> */}
        <div className = 'homepage-content'>
        <div>
        <div dangerouslySetInnerHTML={{ __html: mainDashboard }} />
        </div> 
        <div>
        <div dangerouslySetInnerHTML={{ __html: secondDashboard }} />
        </div>          
        <div className = 'homepage-buttons'>
              <button className = 'homepage-button'>Top Exports From Karnataka (Commodity-Wise)</button>
              <button className = 'homepage-button'>Top 10 Countries Of Countries from Karnataka</button>
              <button className = 'homepage-button'>Top 10 Imports to Karnataka (Commodity-Wise)</button>
              <button className = 'homepage-button'>Top 10 Countries Of Imports to Karnataka</button>
              <button className = 'homepage-button'>State Analytics viz-a-viz Karnataka</button>
              <button className = 'homepage-button'>Top Performing State in India (Export by Volume and Value)</button>
              <button className = 'homepage-button'>HS Codes</button>
              <button className = 'homepage-button'>Trade News</button>   
          </div>
        </div>
        {/* </Router> */}
        <Footer />
      </div>
    );
  }
}

export { HomePage };