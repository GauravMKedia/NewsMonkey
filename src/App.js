import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const pageSize= 6;
  const apikey=process.env.REACT_APP_NEWS_API;
  return (
    <>
      <Router>
          <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={< News key="/" pageSize={pageSize} country="in" category="general" apikey={apikey}/>}/>  
            <Route exact path="/business" element={< News key="business" pageSize={pageSize} country="in" category="business" apikey={apikey}/>}/>  
            <Route exact path="/entertainment" element={< News key="entertainment" pageSize={pageSize} country="in" category="entertainment" apikey={apikey}/>}/>  
            <Route exact path="/health" element={< News key="health" pageSize={pageSize} country="in" category="health" apikey={apikey}/>}/>  
            <Route exact path="/science" element={< News key="science" pageSize={pageSize} country="in" category="science" apikey={apikey}/>}/>  
            <Route exact path="/sports" element={< News key="sports" pageSize={pageSize} country="in" category="sports" apikey={apikey}/>}/>  
            <Route exact path="/technology" element={< News key="technology" pageSize={pageSize} country="in" category="technology" apikey={apikey}/>}/>  
          </Routes>
        </div>
      </Router>
    </>
    )
}

export default App;
