import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';

//Components
import LandingPage from './containers/LandingPage/container';
import MovieDetail from './containers/MovieDetail/container';
import Seo from './components/Seo';

function App({ seo }) {
  return (
    <>
      <Seo seo={seo} />
      <Suspense fallback={<div>Loading...</div>}>
        <div className='App'>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route exact path='/movie/:movieId' component={MovieDetail} />
            </Switch>
          </BrowserRouter>
        </div>
      </Suspense>
    </>
  );
}

export default App;
