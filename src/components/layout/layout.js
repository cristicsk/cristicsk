import React, { Component } from 'react';
import Navigation from './navigation/navigation';
import Split from './split/split';
// import Home from './pages/home/home';
// import About from './pages/about/about';
// import Work from './pages/work/work';
// import Education from './pages/education/education'
import * as pages from './pages'
import RotatePhone from '../rotatePhone/rotatePhone';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition, } from 'react-transition-group';
import './layout.css'

class Layout extends Component {
  state = {
    firstRender: true
}

componentDidMount () {
    this.changeFirstRender()
}

changeFirstRender = () => {
  setTimeout(
  () => {  if (this.state.firstRender) this.setState({ firstRender: false }) }
  ,3500)
}

  render() {
    return (
      <React.Fragment>
        <RotatePhone />

        <div className="layout">
          <Navigation />
          <Split />
          
          <Route render={({ location }) => (
            <TransitionGroup>
              <CSSTransition mountOnEnter unmountOnExit key={location.key}
                timeout={{ enter: 2300, exit: 2300 }} classNames="fade">
                <Switch className='test' location={location}>
                  <Route exact path="/" render={() => (<pages.home firstRender={this.state.firstRender}/>)}  />
                  <Route exact path="/about" component={pages.about} />
                  <Route exact path="/work" component={pages.work} />
                  {/* <Route exact path="/education" component={pages.education} /> */}
                  <Route exact path="/skills" component={pages.skills} />
                  <Route exact path="/contact" component={pages.contact} />
                  <Redirect to="/" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
        </div>
      </React.Fragment>
    )

  }
};


export default Layout;