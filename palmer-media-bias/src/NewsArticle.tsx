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
            <img src={require("./images/palmer-report.png")} alt="Article"/>
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
            <img src={require("./images/trump-loser.png")} alt="Trump" />
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

            <p className="sub">Balance</p>
            <div className="image-container">
              <img src={require("./images/palmer-bias.png")} alt="palmer-bias" />
            </div>

            <p className="info">To further examine the Palmer Report, 
            Zhong picked out a recent article from the website for analysis, titled&nbsp;
            <a href="https://www.palmerreport.com/analysis/donald-trump-has-incoherently-bizarre-truth-social-meltdown-after-jack-smith-gets-the-best-of-him/53568/" target="_blank">
              <em>Donald Trump has incoherently bizarre Truth Social meltdown after Jack Smith gets the best of him</em></a>.
            </p>

            <p className="info">As of December 14, 2023, Trump finds himself in the crosshairs of a $250 million civil lawsuit in New York, with accusations from New York Attorney General Letitia James suggesting that Trump manipulated his personal fortune to secure victory in the 2016 election, sourced by Reuters. Jack Smith, an American attorney currently serving as the Special Counsel for the United States Department of Justice, was appointed by U.S. Attorney General Merrick Garland to lead independent investigations into Trump's actions.</p>

            <p className="info">Trump's claim of presidential immunity suffered a blow as the Federal appeals court denied it, preventing him from defending his cases.</p>

            <p className="info">Palmer Report's response, crafted by Bill Palmer, reflects a celebratory tone, characterising Trump's reaction as a "meltdown" and labelling it "incoherently bizarre." The article taunts Trump's grammatical error on his social media posts without providing specific citations or graphics as supporting evidence.</p>
          
            <p className="info">Furthermore, the article suggests, "Trump doesn’t seem to be taking the news well, as he was barely able to speak..." The source for this information is attributed to another article on the same website, which, upon inspection, lacks concrete evidence to support such a claim.</p>

            <p className="info">Zhong argued that the article’s evidence lean aggressively towards the Liberal viewpoint, as quoted “Jack Smith has won the day,” implying a broader success for the liberal party with the denial of their political opponent's claim.</p>

            <p className="info">Another piece of text evidence drawing criticism is, "Trump can’t drag out his appeals endlessly." This choice of wording evokes strong emotions, insinuating that Trump is intentionally prolonging his appeal due to guilt. However, it is essential to note that no court conclusions had been reached as of the article's publication date.</p>

            <p className="info">Zhong points out, "The article also has a lack of supporting evidence on the opposing perspective, which damages the credibility and the balance in the writing." In conclusion, critics argue that the evidence presented in the article is poorly balanced and heavily biassed.</p>
          
          
          
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
