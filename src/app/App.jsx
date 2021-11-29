import React from 'react';
import Header from '../components/header/Header';
import SuperHeroContainer from '../containers/SuperHeroContainer';
// import './styles/globals.scss';
import './App.scss';

const App = () => {

  return (
    <div className="App">
      <Header />
      <SuperHeroContainer />
    </div>
  )
}

export default App;
