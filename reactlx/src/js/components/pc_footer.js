import React from 'react';
import { Row, Col,Button} from 'antd';
import {Link,BrowserRouter} from 'react-router-dom';

export default class PCFooter extends React.Component{
  render(){
    return(
      <footer>
      {/*<BrowserRouter>
      <ul>
        <li><Link to={'/'}><Button type="dashed" htmlType="button">个人中心</Button></Link></li>
      </ul>
      </BrowserRouter>*/}

        <Row>
          <Col span={2}></Col>
          <Col span={20} class="footer">
            &copy;&nbsp;2018 ReactNews. All Rights Reserved.
          </Col>
          <Col span={2}></Col>
        </Row>
      </footer>
    );
  };
}
