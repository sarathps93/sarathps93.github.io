import LocationSvg from '../src/assets/svg/Location';
import MailSvg from '../src/assets/svg/Mail';
import LinkedInSvg from '../src/assets/svg/LinkedIn';
import StackOverflowSvg from '../src/assets/svg/StackOverflow';
import GitHubSvg from '../src/assets/svg/GitHub';
import NpmSvg from '../src/assets/svg/Npm';

export default {
  name: 'Sarath Pottayil Sasidharan',
  designation: 'Senior Software Engineer',
  accordionLabel: 'View contact details',
  intro: 'A self motivated, passionate Software Developer having 5+ years of industrial experience with primarily area of expertise in web development. Eager to learn and develop new tools and technologies to enhance the online experience of users worldwide. I believe in developing websites which are accessible for everyone.',
  para: 'Reach out to me if you have got an interesting project and looking for a right candidate.',
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
      content: 'Bangalore, India',
      component: LocationSvg,
    },
    {
      label: 'email',
      content: '<a href="mailto:sarathps93@gmail.com">sarathps93@gmail.com</a>',
      component: MailSvg,
    },
    {
      label: 'linkedin',
      content: '<a href="https://www.linkedin.com/in/sarathps93">LinkedIn Profile</a>',
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
