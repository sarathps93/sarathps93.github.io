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
  skillsList: ['Front end development with React and Redux', 'Strong understanding about JavaScript', 'NodeJs development', 'Docker containers with Kubernetes', 'UI & API Automation', 'Contract Testing', 'A quick learner with leadership qualities', 'Agile exposure', 'Continous Integration & Continuous Delivery'],
  quote: 'A good developer writes code that works. But, a great developer writes code which is understandable by everyone.',
  headerItems: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Work',
      link: '/my-works',
    },
    {
      label: 'Skills',
      link: '/my-skills',
    },
  ],
  blogs: {
    label: 'Blogs',
    link: 'https://medium.com/@sarathps93',
  },
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
      content: `Front end development primarily using <strong>React</strong> and <strong>Redux</strong>. 
                Experienced in developing Single Page and Server side rendering  applications. 
                <p>Also experienced in developing <strong>NodeJs</strong> applications and scaling up to improve performance.</p>`,
    },
    {
      label: 'Automation',
      content: `Strong experience in automating UI and API applications, 
                Contract Testing of microservices, Non-functional testing etc., using NodeJs tools & other technologies.
                <p>Pioneer in providing end to end automation solutions.</p>`,
    },
    {
      label: 'DevOps',
      content: `I am always passionate towards implementing continuous integration and continuous delivery model.
                <p>Knowledge and experience in Jenkins, Docker, Kubernetes and other DevOps technologies.`,
    },
    {
      label: 'Other Skills',
      content: `During my free time I make sure to learn something new or to code something new. 
              <p><strong>Machine Learning</strong> & <strong>Cloud</strong> are few of the areas which fascinates me. 
              Please click on the below link to find out more</p>`,
    },
  ],
};
