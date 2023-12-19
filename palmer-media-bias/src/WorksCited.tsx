import React from 'react';
import './WorksCited.css'; // Import your CSS file

const WorksCited: React.FC = () => {
  return (
    
    <div className="works-cited">
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
      <h1>Works Cited</h1>
    <br />
      <div className="citation">
        <p>
          Reuters. “Judge Rejects Trump Immunity Claim in 2020 Election Case | Reuters.”  <em>Judge Rejects Trump Immunity Claim in 2020 Election Case</em>, Reuters,
          1 Dec. 2023, www.reuters.com/world/us/judge-rejects-trump-immunity-claim-federal-2020-election-case-2023-12-02/.
        </p>
      </div>
      <div className="citation">
        <p>
          Palmer, Bill. “Trump Foundation formally admits to fraud, Donald Trump now faces wrath of IRS.”  <em>Trump Foundation formally admits to fraud, Donald Trump now faces wrath of IRS</em>, Palmer Report,
          22 Nov. 2016, www.palmerreport.com/news/trump-foundation-formally-admits-to-fraud-donald-trump-now-faces-wrath-of-irs/191/2023-12-02/.
        </p>
      </div>
      <div className="citation">
        <p>
          Palmer, Bill. “Ahead of recount, Wisconsin has already wiped out 5,000 imaginary Donald Trump votes.”  <em>Ahead of recount, Wisconsin has already wiped out 5,000 imaginary Donald Trump votes</em>, Palmer Report,
          25 Nov. 2016, www.palmerreport.com/news/ahead-of-recount-wisconsin-has-already-wiped-out-5000-phony-votes-for-donald-trump/234/2023-12-02/.
        </p>
      </div>
      <div className="citation">
        <p>
          Palmer, Bill. “Donald Trump has incoherently bizarre Truth Social meltdown after Jack Smith gets the best of him.”  <em>Donald Trump has incoherently bizarre Truth Social meltdown after Jack Smith gets the best of him</em>, Palmer Report,
          13 Dec. 2023,www.palmerreport.com/analysis/donald-trump-has-incoherently-bizarre-truth-social-meltdown-after-jack-smith-gets-the-best-of-him/53568/2023-12-02/.
        </p>
      </div>
      <div className="citation">
        <p>
        Faris, Robert M., et al. “Partisanship, Propaganda, and Disinformation: Online Media and the 2016 U.S. Presidential Election.” <em>Berkman Klein Center for Internet & Society Research Paper, 2017.</em>
        </p>
      </div>
      {/* Add more citations as needed */}


    </div>
  );
};

export default WorksCited;
