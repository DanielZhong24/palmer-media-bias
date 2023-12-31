// src/components/NewsArticle.tsx
import React, {useRef,useEffect} from 'react';
import './NewsArticle.css';
import {NavLink} from 'react-router-dom';
const NewsArticle: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioPath = require("./images/jojosiwa.mp3");


  useEffect(() => {
    // Set default volume
    if (audioRef.current) {
      audioRef.current.volume = 0.05; // Adjust the volume value as needed
    }

    // Autoplay when the component mounts
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        // Autoplay might be blocked by the browser, handle the error
        console.error('Autoplay failed:', error);
      });
    }
  }, []);

  return (
    
    <div className="news-page">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="col-sm-1"></div>
        <a className="navbar-brand" href="#/palmer-media-bias/news-page">RHHS Fake News Outlet</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#/palmer-media-bias/works-cited">
                Works Cited
              </a>
            </li>
            {/* Add more pages as needed */}
          </ul>
        </div>      
      </nav>

      <div className="music-player">
        Listen to some nice music while reading!
          <audio ref={audioRef} controls>
            <source src={audioPath} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
   
      <div className="content-container">
        <div className="article-container">
          <header>
            <h1>Critical Analysis Unveils Concerns: Assessing the Credibility of Palmer Report as a News Source</h1>
            <br />
            <p className="article-info">Daniel Zhong · RHHS · Published on <time dateTime="2023-12-17">December 17, 2023</time></p>

          </header>

          <article>
            <div className="image-container">
              <div className="image-overlay"></div>
              <img src={require("./images/palmer-report.png")} alt="Article"/>
            </div>

            <div className="content">
              <p className='info'>The accused website, Palmer Report, had been suspected by the RHHS Fake News outlet as an unreliable source of media. The website was confirmed for making unsubstantiated or false claims that favour liberal and progressive viewpoints.</p>
              
              <p className='info'>The research evaluated by a very credible scholar, Daniel Zhong from RHHS, pointed out the low credibility of the Palmer Report.</p>
              
              <p className='info'>"Palmer Report has drawn scrutiny due to its observed deficiencies, 
                  encompassing a discernible lack of reliability, 
                  an asymmetry in evidence presentation, 
                  and a perceivable bias affecting its overall objectivity." Said Daniel Zhong regarding the topic.</p>
              
              <p className="sub">Reliablilty</p>
              <div className="image-container">
              <img src={require("./images/trump-loser.png")} alt="Trump" />
              </div>
              <div className="image-container">
                <p>Article on Palmer Report's website</p>
              </div>

              <p className='info'>Founded in 2016 by Bill Palmer, Palmer Report was under scrutiny for its credibility due to its founder's prior association with the hyperpartisan blog Daily News Bin, categorized by the Berkman Klein Center for Internet & Society at Harvard University as part of a set of "newer highly partisan sites farther left on the spectrum" than "the mainstays of liberal media" such as the Huffington Post, Vox, and Slate.
              </p>

              <p className="info">
              Palmer Report, sharing similar content, regularly publish hyperpartisan liberal news and conspiracy theories. Instances include
              the claim that the&nbsp;
              <a href="https://www.palmerreport.com/news/ahead-of-recount-wisconsin-has-already-wiped-out-5000-phony-votes-for-donald-trump/234/" target="_blank">
              2016 American President Election was rigged
              </a>
              &nbsp;and falsely claimed&nbsp; 
              <a href="">5000 Trump votes in Wisconsin as disqualified.</a>&nbsp; Worth noting that all articles on this site are authored by Bill Palmer.
              </p>
              <p className="info">“Palmer Report is not a reliable source for daily news and information," said Daniel Zhong.</p>
              <p className="info">Daniel Zhong also noted that Palmer Report focused on events that “benefit the left wing.” And through an analysis of the website’s comment section, the organization’s targeted audiences were “more likely” to be readers who have strong support for the Democrats, according to Zhong.</p>
              <p className="info">To conclude, Palmer Report and Bill Palmer were heavily criticized for their perceived bias toward the Democrats, and readers should be aware that Palmer Report might not provide accurate and subjective news articles.</p>

              <p className="sub">Balance</p>
              <div className="image-container">
                <img src={require("./images/palmer-bias.png")} alt="palmer-bias" />
              </div>
              <div className="image-container">
                <p>Article on Palmer Report's website</p>
              </div>

              <p className="info">To further examine the Palmer Report, 
              Zhong picked out a recent article from the website for analysis, titled&nbsp;
              <a href="https://www.palmerreport.com/analysis/donald-trump-has-incoherently-bizarre-truth-social-meltdown-after-jack-smith-gets-the-best-of-him/53568/" target="_blank">
                "Donald Trump has incoherently bizarre Truth Social meltdown after Jack Smith gets the best of him"</a>.
              </p>

              <p className="info">As of December 14, 2023, Trump found himself in the crosshairs of a $250 million civil lawsuit in New York, with accusations from New York Attorney General Letitia James suggesting that Trump manipulated his personal fortune to secure victory in the 2016 election. Jack Smith, an American attorney currently serving as the Special Counsel for the United States Department of Justice, was appointed by U.S. Attorney General Merrick Garland to lead independent investigations into Trump's actions&nbsp;
              <a href="https://www.reuters.com/world/us/judge-rejects-trump-immunity-claim-federal-2020-election-case-2023-12-02/" target='_blank'><span>(Reuters).</span></a>
              </p>

              <p className="info">Trump's claim of presidential immunity suffered a blow as the Federal appeals court denied it, preventing him from defending his cases.</p>

              <p className="info">Palmer Report's response, crafted by Bill Palmer, reflected a celebratory tone, characterizing Trump's reaction as a "meltdown" and labelling it "incoherently bizarre." The article taunted Trump's grammatical errors in his social media posts without providing specific citations or graphics as supporting evidence.</p>
            
              <p className="info">Furthermore, Bill Palmer's article suggested, "Trump doesn’t seem to be taking the news well, as he was barely able to speak." The source for this information is attributed to another article on the same website, which, upon inspection, lacked concrete evidence to support such a claim.</p>

              <p className="info">Zhong argued that the article’s evidence leans aggressively towards the liberal viewpoint, as quoted “Jack Smith has won the day,” implying a broader success for the liberal party with the denial of their political opponent's claim.</p>

              <p className="info">Another piece of text from Bill's article evidence drawing criticism was, "Trump can’t drag out his appeals endlessly." The choice of wording evoked strong emotions, insinuating that Trump was intentionally prolonging his appeal due to guilt. However, it is essential to note that no court conclusions had been reached as of the article's publication date.</p>

              <p className="info">Zhong argued that the evidence presented in the article is poorly balanced and heavily biased, that there was a “lack of variety in the evidence,” and that the proofs were “not sufficient for supporting the arguments.” He determined that the type of evidence used was ineffective and untrustworthy.</p>
            
              <p className="sub">Objectivity</p>
              <div className="image-container">            
                <img src={require("./images/palmer-social.png")} alt="" />
              </div>
              <div className="image-container">
                <p>Social Media for Palmer Report</p>
              </div>
              

              <p className="info">Zhong also pointed out, "The article has a lack of supporting evidence on the opposing perspective, which damages the overall quality of the writing.”</p>
              <p className="info">The article,&nbsp;<a href="https://www.palmerreport.com/analysis/donald-trump-has-incoherently-bizarre-truth-social-meltdown-after-jack-smith-gets-the-best-of-him/53568/" target="_blank">"Donald Trump has incoherently bizarre Truth Social meltdown after Jack Smith gets the best of him"</a>, proved Bill Palmer’s bias because he did not subjectively provide the perspectives of both sides of the issue.</p>
              <p className="info">No evidence was included in Bill’s article that represented Trump’s perspective; instead, Bill utilized the lack of information and bashed Donald Trump.</p>
              <p className="info">Bill wrote, “Donald Trump is falling apart in real time." Through the subtext, Zhong identified Bill’s attitude towards the issue. Zhong mentioned that Bill used a biased tone to celebrate Trump’s struggle in court, and after “considering potential motives,” Zhong concluded that Bill’s overall objective is to target and put shame on the Democratic Party's political opponent.</p>

              <p className="sub">Conclusion</p>
              <p className="info">Overall, Zhong concluded that Palmer Report is not a trustworth source base on its lack of reliablilty, imbalance in supporting evidence, as well as pushing a blatantly biassed agenda. He warned citizens to watch out for these fake news source and do more research before making a decision to believe in a news article online.</p>







            </div>
          </article>
          

        </div>
        <div className="news-boxes-container">
          {/* News Box 1 */}
          <div className="news-box">
            <h2>Will Oliver Cai finish his book on time or will he stress over the holiday?</h2>
            <p>RHHS, December 17, 2023.</p>
          </div>

          {/* News Box 2 */}
          <div className="news-box">
            <h2>Chris Han recieved drawing of Dr. Octopus, here's how he feels...</h2>
            <p>RHHS, December 17, 2023.</p>
          </div>

          {/* Add more news boxes as needed */}
          <div className="news-box">
            <h2>Tyler scores game winning point for RHHS basketball team, retirement league coaches are now interested.</h2>
            <p>RHHS, December 17, 2023.</p>
          </div>

          <div className="news-box">
            <h2>Credible scholar Daniel Zhong was found to be stressing over an English assigment over the weekend...</h2>
            <p>RHHS, December 17, 2023.</p>
          </div>
          <div className="news-box">
            <h2>Justin Min got food poisoning after consuming mass amount of food.</h2>
            <p>RHHS, December 17, 2023.</p>
          </div>
          <div className="news-box">
            <h2>New Fortnite champion - Arie Xia from RHHS.</h2>
            <p>RHHS, December 17, 2023.</p>
          </div>
        </div>
      </div>
      <div className="fake-ads">
      {/* Fake Ad 1 */}
      <div className="fake-ad">
        <img src={require("./images/conservative.png")} alt="Fake Ad 1" />
        <h3>Conservative Chronicles Magazine</h3>
        <p>Stay informed with conservative perspectives! Subscribe to our magazine for insightful articles and analysis on current political affairs.</p>
        <a href="#" className="ad-link">Subscribe Now</a>
      </div>

      {/* Fake Ad 2 */}
      <div className="fake-ad">
        <img src={require("./images/liberal.png")} alt="Fake Ad 2" />
        <h3>Progressive Insights Podcast</h3>
        <p>Explore progressive viewpoints on our podcast. Engage in thoughtful discussions on social justice, environmental issues, and more.</p>
        <a href="#" className="ad-link">Listen Here</a>
      </div>
    </div>
    <footer>
          <p>&copy; 2023 RHHS Fake News Outlet Outlet. All rights reserved.</p>
        </footer>
  </div>
  );
};

export default NewsArticle;
