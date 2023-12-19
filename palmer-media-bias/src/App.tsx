// src/App.tsx
import React from 'react';
import NewsArticle from './NewsArticle';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import WorksCited from './WorksCited';
const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index path="palmer-media-bias" element={<NewsArticle/>}></Route>
          <Route path="palmer-media-bias/news-page" element={<NewsArticle />}></Route>
          <Route path="palmer-media-bias/works-cited" element ={<WorksCited/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
