import websiteLogo from "./assets/logo.svg"
import gradCap from "./assets/gradCap.jpg"
import IRPic from "./assets/IRPic.jpg"
import heart from "./assets/heartReport.png"
import FaceRecApp from "./assets/FaceRecApp.png"
import SummerDev from "./assets/SummerDev.png"

export const contentIndProjects = [
  {
    id: 0,
    content:
      "My website! This website was fully written/deployed with no templates. The process taught me a great deal about frontend coding and the react framework.",
    img: websiteLogo,
    link: "https://github.com/ben-sikora/portfolio-website",
  },
  {
    id: 1,
    content:
      "A scalable Python CLI Search Engine with its own Pre-Processing, Indexing, and Ranking. Achieved precision scores with 0.5 points of ElasticSearch.",
    img: IRPic,
    link: "https://github.com/ben-sikora/search-engine",
  },
  {
    id: 2,
    content:
      "Analyzed heart data using supervised and unsupervised learning methods in R. Evaluated results on Model Fit, ROC Analysis, and K-Fold cross validation.",
    img: heart,
    link: "https://github.com/ben-sikora/portfolio-website",
  },
  {
    id: 0,
    content:
      "I am honored to be one of four students selected to receive the Academic Excellence in CS award by the Georgetown Department of CS in 2022.",
    img: gradCap,
    link: "https://cs.georgetown.edu/undergraduate-awards/",
  },
];

export const contentBigProjects = [
  {
    id: 0,
    content:
    'FaceRec is a full-stack web app that utilizes the Clarifai API to identify faces in any image. Users have the option to also create an account to keep track of how many images are uploaded.',
    img: FaceRecApp,
    link: "https://face-recognition-app-me9o.onrender.com/",
  },
  {
    id: 1,
    content:
    'Summer is a full-stack web app that can summarize any length of document or text using ChatGPT. Normally ChatGPT has a prompt limit, but Summer bypasses the limit by automatically breaking up the document for you. As the API costs money for each call, there is only a limited number of requests per user.',
    img: SummerDev,
    link: 'https://www.docsummer.com/',
  },
];
