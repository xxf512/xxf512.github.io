import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import { Input,Button} from 'antd';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index'
import PCNewsDetails from './components/pc_news_details';
import MobileNewsDetails from './components/mobile_news_details';
import PCUserCenter from './components/pc_usercenter';
import MobileUserCenter from './components/mobile_usercenter';

import {BrowserRouter,Route,Switch,HashRouter} from 'react-router-dom';

import MediaQuery from 'react-responsive';

export default class Root extends React.Component{
  render(){
    return(
    <div>
      <MediaQuery query="(min-device-width: 1224px)">
          <HashRouter>
            <Switch>
              <Route exact path="/" component={PCIndex}></Route>
              <Route path="/details/:uniquekey" component={PCNewsDetails}></Route>
              <Route path="/usercenter" component={PCUserCenter}></Route>
            </Switch>
          </HashRouter>
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <HashRouter>
          <Switch>
            <Route exact path="/" component={MobileIndex}></Route>
            <Route path="/details/:uniquekey" component={MobileNewsDetails}></Route>
            <Route path="/usercenter" component={MobileUserCenter}></Route>
          </Switch>
        </HashRouter>
      </MediaQuery>
    </div>
    );
  };
}
ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
