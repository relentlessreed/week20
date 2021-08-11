import React from 'react';
import passGenScreenshot from '../photos/passgenscreenshot.jpg'
import noteTakerScreenshot from '../photos/notetaker.png'
import budgetTrackerScreenshot from '../photos/budget-tracker-demo.png'
import fitnessTrackerScreenshot from '../photos/fitnesstrackerscreenshot.png'
import trolleyTurmoilScreenshot from '../photos/trolleyturmoilscreenshot.png'
import whatCanICookScreenshot from '../photos/whatcanicookscreenshot.png'
import PortfolioItem from '../components/PortfolioItem';


export default function Portfolio() {
  const projectArr = [
    {
      img: passGenScreenshot,
      alt: "passGenScreenshot",
      projName: 'Password Generator',
      projDesc: 'Create your own unique password! You decide the character types included as well as length.',
      deployedUrl: 'https://relentlessreed.github.io/week3/',
      githubUrl: 'https://github.com/relentlessreed/week3'
    },
    {
      img: noteTakerScreenshot,
      alt: "noteTakerScreenshot",
      projName: 'Note Taker',
      projDesc: 'Keep track of your notes, utilizing your browsers local storage!',
      deployedUrl: 'https://ejr-note-taker.herokuapp.com/notes',
      githubUrl: 'https://github.com/relentlessreed/week11'
    },
    {
      img: budgetTrackerScreenshot,
      alt: "budgetTrackerScreenshot",
      projName: 'Budget Tracker',
      projDesc: "Behold, the power of PWA's! Keep track of your budget with or without an internet connection! ",
      deployedUrl: 'https://budget-tracker-pwa-ejr.herokuapp.com/',
      githubUrl: 'https://github.com/relentlessreed/week19'
    },
    {
      img: fitnessTrackerScreenshot,
      alt: "fitnessTrackerScreenshot",
      projName: 'Fitness Tracker',
      projDesc: 'Maintain your fitness records by using mongoDB!',
      deployedUrl: 'https://workout-tracker-week18.herokuapp.com/',
      githubUrl: 'https://github.com/relentlessreed/week18'
    },
    {
      img: trolleyTurmoilScreenshot,
      alt: "trolleyTurmoilScreenshot",
      projName: 'Trolley Turmoil',
      projDesc: 'Gauge your own morality, make difficult Trolley dillemas for others!',
      deployedUrl: 'https://ku-cbc-project-2-beardbros.herokuapp.com/',
      githubUrl: 'https://github.com/jtstockard/KU-CBC-Project-2-Trolley-Turmoil'
    },
    {
      img: whatCanICookScreenshot,
      alt: "whatCanICookScreenshot",
      projName: 'What Can I Cook?',
      projDesc: "Find a diet-specific recipe that won't kill you, with the power of API's!",
      deployedUrl: 'https://relentlessreed.github.io/project1',
      githubUrl: 'https://github.com/relentlessreed/project1'
    }
  ]
  return (
    <div>
      <p id="projectsPageText">
        Here are six different applications I have built, alone and in a group setting with other developers in the Kansas University Full-Stack Web Development Program.
        Please feel free to veiw the depolyed applications as well as the repository links.
      </p>
      <div id="projectPageBox">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {projectArr.map(data => {
            return (
              <PortfolioItem project={data} />

            )
          }
          )}
        </div>
      </div>
    </div>
  );
}
