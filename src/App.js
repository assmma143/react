import React, { Component } from 'react';

import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main'

class App extends Component {
  render() {
    return (
     <div className="demo-big-content">
    <Layout>
        <Header title="Title" scroll>
            <Navigation>
                <a href="/aboutme">من أنا؟</a>
                <a href="/myWork">أعمالي</a>
               
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="/aboutme">من أنا؟</a>
                <a href="/myWork">أعمالي</a>
               
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
			<Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
