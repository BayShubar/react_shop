import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom'

import SideBar from './components/sidebar/SideBar'
import Main from './components/main/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
             <div className="col-md-3">
                <SideBar />
            </div>
            <div className="col-md-9">
               <Main />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
