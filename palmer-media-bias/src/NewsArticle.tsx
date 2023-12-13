// src/components/NewsArticle.tsx
import React from 'react';
import './NewsArticle.css';

const NewsArticle: React.FC = () => {
  return (
    <div className="news-page">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">RHHS Fake News Outlet</a>

        </div>
      </nav>
      <div className="article-container">
        <header>
          <h1>Critical Analysis Unveils Concerns: Assessing the Credibility of Palmer Report as a News Source</h1>
          <br />
          <p className="article-info">Daniel Zhong · RHHS · Published on <time dateTime="2023-12-11">December 11, 2023</time></p>

        </header>

        <article>
          <div className="image-container">
            <div className="image-overlay"></div>
            <img src="./images/palmer-report.png" alt="Article"/>
          </div>

          <div className="content">
            <p className='info'>Accused website Palmer Report has been suspected by RHHS Fake News outlet as an unreliable source of media. 
                The website was confimred for making unsubstantiated or false claims that favors certain political viewpoints. </p>
            
            <p className='info'>A reasearched evaluated by very credibale scholar, Daniel Zhong from RHHS, pointed out the low credibility of Palmer Report. </p>
            
            <p className='info'>"Palmer Report has drawn scrutiny due to its observed deficiencies, 
                encompassing a discernible lack of reliability, 
                an asymmetry in evidence presentation, 
                and a perceivable bias affecting its overall objectivity." said Daniel Zhong regarding the topic.</p>
            
            <p className="sub">Reliablilty</p>
            <div className="image-container">
            <img src="./images/trump-loser.png" alt="Trump" />
            </div>

            <p className='info'>Founded in 2016 by Bill Palmer, 
            Palmer Report is under inspection for its credibility due to its founder's prior association with the hyperpartisan blog, 
            Daily News Bin. 
            It was categorised by the Berkman Klein Center for Internet & Society at Harvard University as part of a set of
             "newer highly partisan sites farther left on the spectrum" than "the mainstays of liberal media" such as the Huffington Post, Vox, and Slate, concerns are mounting.
            </p>

            <p className="info">
            Palmer Report, sharing similar content, regularly publish hyperpartisan liberal news and conspiracy theories. Instances include
             the claim that the&nbsp;
             <a href="https://www.palmerreport.com/news/ahead-of-recount-wisconsin-has-already-wiped-out-5000-phony-votes-for-donald-trump/234/" target="_blank">
             2016 American President Election was rigged
             </a>
             &nbsp;and and falsely claimed&nbsp; 
             <a href="">5000 Trump votes in Wisconsin were disqualified.</a>&nbsp; Worth noting all articles were authored by Bill Palmer.
            </p>
            <p className="info">“Palmer Report is not a reliable source for daily news and information.” said Daniel Zhong.</p>
            <p className="info">Daniel Zhong also noted that Palmer Report focuses on events that “benefits the left wing.” And through an analysis on the website’s comment section, the organisation’s targeted audiences are “more likely” to be readers who have strong support for the Democrats, according to Zhong. </p>
          </div>
        </article>

        <footer>
          <p>&copy; 2023 RHHS Fake News Outlet Outlet. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default NewsArticle;
