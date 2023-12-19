// src/App.tsx
import React from 'react';
import NewsArticle from './NewsArticle';
import {HashRouter as Router,Routes, Route} from 'react-router-dom';
import WorksCited from './WorksCited';
const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index path="/" element={<NewsArticle/>}></Route>
          <Route path="palmer-media-bias/news-page" element={<NewsArticle />}></Route>
          <Route path="palmer-media-bias/works-cited" element ={<WorksCited/>}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
