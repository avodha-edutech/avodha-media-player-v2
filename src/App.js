import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Default from './Default';
import Video from './Video';

const App = () => {
    return(
        <>
        <Router>
            <Routes>
                <Route path='/video' element={<Video/>}/>
                <Route path='*' element={<Default/>}/>
            </Routes>
        </Router>
        </>
    );
}

export default App;