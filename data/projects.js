module.exports = [
  {
    name: "Hunter: Job Tracker",
    intro: `Hunter is a cross platform I made to help with my job search. It allows users to
record job applications they've made, upload screenshots of the job description and notify
users about their applications after a certain period.`,
    about: `The purpose of Hunter is to provide those who are job hunting with a tool engineered
to help keep track of applications they've sent to employers and will be sent notifications about
their applications to enable them to chase a response after their applications. Those who
like to keep screenshots of a job description for future reference, will have the ability to
upload them along with the details of the job. Hunter also provides three ways of signing in
either traditional email and password, using their Google or Facebook accounts.`,
    stack: ["TypeScript", "React Native", "Expo", "Tailwind", "AWS"],
    links: {
      github: "https://github.com/ahmedsatti101/hunter",
      app: undefined
    },
    status: "Active development",
    duration: "Jun 2025 - Present",
    why: `I have been using a spreadsheet to keep track of jobs I've applied to. The issue with a
spreadsheet is with lots of job applications the list can get very long making it hard to read and
the process of recording each application could be better with a layout that is easy to follow and
navigate and being able to focus only on one application. With Hunter, recording an application is
less tedious because of form labels and input fields that give the user a direction to follow and
which field takes specific information about the job application. Users can view a condensed version
of a job application on the home screen such as title, company and status without the screen being
cluttered with all the information all at once.`
  },
  {
    name: "Gomail: Terminal based email client",
    intro: `Gomail is an idea turned into a side project to see if I could use my terminal
to view, read and maybe send emails without using the Gmail app in my browser.`,
    about: `Gomail is a terminal based tool that allows those with a Gmail account to view
and read emails in the terminal. Its written in Go and uses the Gmail Go package to talk to
the Gmail API and the Bubble Tea framework for the UI. Even though this project is completed,
I'm planning on revisting it so that it becomes something I can use and by those who are
interested.`,
    stack: ["Go", "Google Cloud Platform"],
    links: {
      github: "https://github.com/ahmedsatti101/gomail",
      app: undefined
    },
    status: "Completed",
    duration: "Jun 2025 - Jul 2025",
    why: `Three words, Context switching fatigue. When I'm working on something, I switch frequently
between my terminal and browser sometimes my brower has a lot of tabs open and I'm also switching between
those which becomes stressful and drains my mental energy which makes me vulnerable to losing focus. I get
emails everyday so having the ability to run a single command to check my inbox without switching focus
is very effienct and does not take time or a cognitive restart.`
  },
  {
    name: "Cycling events: Platform for event advertising",
    intro: `Cycling events is a platform I built for a small business to advertise their
cycling events to the community. People can sign up for these events and add them to Google
calendar.`,
    about: `Cycling events is a project I built as part of a Lauchpad project provided by Tech
Returners to apply what I have learned during my bootcamp with Northcoders. Cycling events was to
be used by a small business who wanted a platform where they can create and share events with members
of the public. As a minimum viable product, the platform needed to allow business staff to create
events, signing up to events by non-staff and adding events to Google Calendar for those who signed up.`,
    stack: ["TypeScript", "React", "Tailwind", "AWS", "AWS SDK", "AWS Cognito", "AWS DynamoDB"],
    links: {
      github: "https://github.com/ahmedsatti101/events-platform-project",
      app: "https://cyclingevents.netlify.app"
    },
    status: "Completed",
    duration: "Jul 2024 - Aug 2024",
    why: undefined
  },
  {
    name: "Northcoders news",
    intro: `Northcoders news is a social news and discussion website that provides articles
divided into topics. The website also allows users to comment on an article as well as upvote or
downvote it.`,
    about: `Northcoders news is a project I built while I was in Northcoders bootcamp to consolidate
my learning by performing CRUD operations through the frontend. It consumes an API that allows users
to view articles that belong to a certain topic and sort them in ascending or descending order. Users
can also post comments on each of those articles and delete them later and upvote or downvote articles.`,
    stack: ["TypeScript", "React", "Vite"],
    links: {
      github: "https://github.com/ahmedsatti101/northcoders-news",
      app: "https://react-northcoders-news.netlify.app"
    },
    status: "Completed",
    duration: "Feb 2024 - May 2024",
    why: undefined
  },
  {
    name: "Northcoders news API",
    intro: `This API is the backend service for Northcoders News.`,
    about: `I built this API during the Northcoders bootcamp to learn to access application data
programmatically and using a database for data persistence. The API provides several endpoints for
a social discussion application that provide articles and their comments, topics and performing CRUD
opertions like deleting a comment, adding a new article or updating the votes on an article.`,
    stack: ["JavaScript", "Node.js", "Express.js", "PostgreSQL"],
    links: {
      github: "https://github.com/ahmedsatti101/northcoders-news-api",
      app: "https://portfolio-web-service-n7kk.onrender.com/api"
    },
    status: "Completed",
    duration: "Jan 2024 - Apr 2024",
    why: undefined
  }
]
