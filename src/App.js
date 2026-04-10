import React from 'react';
import EventDetails from './components/EventDetails';
import Speakers from './components/Speakers';
import Registration from './components/Registration';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <h1>Welcome to the Tech Conference</h1>
            <EventDetails />
            <Speakers />
            <Registration />
        </div>
    );
};

export default App;