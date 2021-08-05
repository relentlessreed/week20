import React from 'react';
// import budgetTrackerPhoto from '../photos/budget-tracker-demo.png'
import techBlogPhoto from '../photos/techblogprogresssofar.png'
import PortfolioItem from '../components/PortfolioItem';


export default function Portfolio() {
  const projectArr = [
    {
      img: techBlogPhoto,
      alt: "techBlogPhoto",
      projName: 'passwordGenerator',
      deployedUrl: 'https://relentlessreed.github.io/week3/',
      githubUrl: 'https://github.com/relentlessreed/week3'
    },
    {
      img: techBlogPhoto,
      alt: "techBlogPhoto",
      projName: 'noteTaker',
      deployedUrl: 'https://ejr-note-taker.herokuapp.com/notes',
      githubUrl: 'https://github.com/relentlessreed/week11'
    },
    {
      // img: budgetTrackerPhoto,
      alt: "budgetTrackerPhoto",
      projName: 'budgetTracker',
      deployedUrl: 'https://budget-tracker-pwa-ejr.herokuapp.com/',
      githubUrl: 'https://github.com/relentlessreed/week19'
    }
  ]
  return (
    <div>
      <p>
        Nunc pharetra finibus est at efficitur. Praesent sed congue diam.
        Integer gravida dui mauris, ut interdum nunc egestas sed. Aenean sed
        mollis diam. Nunc aliquet risus ac finibus porta. Nam quis arcu non
        lectus tincidunt fermentum. Suspendisse aliquet orci porta quam semper
        imperdiet. Praesent euismod mi justo, faucibus scelerisque risus cursus
        in. Sed rhoncus mollis diam, sit amet facilisis lectus blandit at.
      </p>
      {projectArr.map(data => {
        return (
          <PortfolioItem project={data} />
          // <div>
          //   <h1>{data.projName}</h1>
          //   <img className="thumbnail" src={data.img} alt={data.alt} />
          //   <a href={data.deployedUrl} target="_blank" rel="noreferrer">Deployed Link</a>
          //   <a href={data.githubUrl} target="_blank" rel="noreferrer">Github Repo</a>
          // </div>
        )
      }
      )}
    </div>
  );
}
