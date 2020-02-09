import LocationSvg from '../src/assets/svg/Location';
import MailSvg from '../src/assets/svg/Mail';
import LinkedInSvg from '../src/assets/svg/LinkedIn';
import StackOverflowSvg from '../src/assets/svg/StackOverflow';
import GitHubSvg from '../src/assets/svg/GitHub';
import NpmSvg from '../src/assets/svg/Npm';
import DockerSvg from '../src/assets/svg/DockerHub';

export default {
  name: 'Sarath Pottayil Sasidharan',
  designation: 'Full stack developer',
  accordionLabel: 'View contact details',
  intro: `I am a full stack developer having more than 5 years of experience and currently working for a major Banking firm in London, United Kingdom.
          I am really passionate about software develoment and the latest trends around it. My primary area of expertise is 
          front end development using React & Redux. I believe in developing high performing, accessible and compatible websites which are for everyone.`,
  para: 'Are you looking for someone with the below skills to help you out?',
  skillsList: ['Front end development with React and Redux', 'Strong understanding about JavaScript', 'Data Structure and Algorithms', 'NodeJs development', 'Docker containers with Kubernetes', 'UI & API Automation', 'Contract Testing', 'A quick learner with leadership qualities', 'Agile exposure', 'Continous Integration & Continuous Delivery'],
  quote: 'A good developer writes code that works. But, a great developer writes code which is understandable by everyone.',
  myDetails: [
    {
      label: 'MY RESUME',
      link: './build/my_resume.pdf',
      class: 'app-mydetails--resume',
    },
    {
      label: 'MY SKILLS',
      link: '/my-skills',
      class: 'app-mydetails--skills',
      navLink: true,
    },
    {
      label: 'MY BLOGS',
      link: 'https://medium.com/@sarathps93',
      class: 'app-mydetails--work',
    },
  ],
  headerItems: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Skills',
      link: '/my-skills',
    },
  ],
  headerLinks: [
    {
      label: 'Resume',
      link: './build/my_resume.pdf',
    },
    {
      label: 'Blogs',
      link: 'https://medium.com/@sarathps93',
    },
  ],
  contact: [
    {
      label: 'location',
      content: 'London, United Kingdom',
      component: LocationSvg,
    },
    {
      label: 'email',
      content: '<a href="mailto:sarathps93@gmail.com">sarathps93@gmail.com</a>',
      component: MailSvg,
    },
    {
      label: 'linkedin',
      content: '<a href="https://www.linkedin.com/in/sarath-pottayil-sasidharan-bb128881">LinkedIn Profile</a>',
      component: LinkedInSvg,
    },
    {
      label: 'StackOverflow',
      content: '<a href="https://stackoverflow.com/users/10354381/sarath-p-s">Stackoverflow Profile</a>',
      component: StackOverflowSvg,
    },
    {
      label: 'GitHub',
      content: '<a href="https://github.com/sarathps93">GitHub Profile</a>',
      component: GitHubSvg,
    },
    {
      label: 'DockerHub',
      content: '<a href="https://hub.docker.com/u/sarathps93">DockerHub Profile</a>',
      component: DockerSvg,
    },
    {
      label: 'Npm',
      content: '<a href="https://www.npmjs.com/~sarathps93">Npm Profile</a>',
      component: NpmSvg,
    },
  ],
  copyRight: 'Built from scratch using React server side rendering',
  skills: [
    {
      label: 'UI / Backend development',
      content: [
        'Experienced in creating single page and server side rendering applications using React and Redux from scratch',
        'Experienced in creating React component libraries and style guides',
        'Understanding about Data Structures and Algorithms',
        'Experience and Knowledge in latest JavaScript',
        'Deep understanding about Redux Middlewares, Webpack, Babel, SCSS and other development technologies',
        'Creation of NodeJs backend applications, clustering and forking',
        'REST API development',
        'Worked in test driven development TDD methodology using Jest, Enzyme and React test library',
        'Learning Socket.Io, OAuth & JWT',
      ],
    },
    {
      label: 'Automation',
      content: [
        'Proficient in automating UI applications through Selenium Webdriver & WebdriverIo along with Cucumber and Mocha frameworks',
        'Automation of APIs through NodeJs',
        'Integration of microservices successfully by implementing Consumer Driven Contract Testing using PACT',
        'Experienced in developing various automation frameworks from scratch',
        'Experience in Automated Visual testing using Applitools, compatibility testing using SauceLabs, Accessibility using Axe etc.',
        'Development of in-house reporting dashboards by using React / pure HTML and integration with Jenkins and MySQL database for job scheduling',
      ],
    },
    {
      label: 'DevOps & other skills',
      content: [
        'Knowledge and experience in setting up Jenkins builds to run automation',
        'Knowlege about Docker containerisation and Kubernetes',
        'Proficient about Git wokflows and source code management',
        'Experience in working with GitHub and GitLab',
        'Knowledge about Creation of CI/CD pipelines',
        'Learning AWS',
      ],
    },
    {
      label: 'Other Skills',
      content: [
        'Learning Python',
        'Agile Scrum and Kanban experience',
        'Experience in leading a mid sized team',
        'Different domain experience. I have worked in Retail, Financial Services, Insurance, Securities & Capital Markets domains',
      ],
    },
  ],
};
