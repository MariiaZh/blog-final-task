import React, { Fragment } from 'react';
//import Authentication from './screens/Authentication';
import ArticlesScreen from './screens/ArticlesScreen';
import Header from './components/Header';
import './App.css';

function App() {

    // I'll add routing here later

    return (
        <Fragment>
            <Header />
            {/*<HomeScreen />*/}
            <ArticlesScreen />
        </Fragment>
    );
}

export default App;
