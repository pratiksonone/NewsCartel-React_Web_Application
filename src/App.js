import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import Weather from "./components/Weather";
import Footer from "./components/Footer";
function App() {

  const [progress, setProgress] = useState(0)

  const pageSize = 10;
  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <>
      <div className="">
        <Router>
          <Navbar />

          <LoadingBar
            height={2}
            color='#f11946'
            progress={progress}
          ></LoadingBar>

          <Routes>
            <Route exact path="/NewsCartel-React_Web_Application" element={<News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general" apiKey={apiKey} />}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" apiKey={apiKey} />}></Route>
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" apiKey={apiKey} />}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" apiKey={apiKey} />}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" apiKey={apiKey} />}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" apiKey={apiKey} />}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" apiKey={apiKey} />}></Route>
            <Route exact path="/weather" element={<Weather />}></Route>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
