import LocationSvg from '../src/assets/svg/Location';
import PhoneSvg from '../src/assets/svg/Phone';
import MailSvg from '../src/assets/svg/Mail';
import LinkedInSvg from '../src/assets/svg/LinkedIn';
import StackOverflowSvg from '../src/assets/svg/StackOverflow';

export default {
  name: 'Sarath Pottayil Sasidharan',
  designation: 'Full stack developer',
  accordionLabel: 'View contact details',
  intro: `I am a full stack developer having more than 5 years of experience and currently working for a major Banking firm in London, United Kingdom.
          I am really passionate about software develoment and the latest trends around it. My primary area of expertise is 
          front end development using React & Redux. I believe in developing high performing, accessible and compatible websites which are for everyone.`,
  headerItems: [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Work',
      link: '/',
    },
    {
      label: 'Skills',
      link: '/',
    },
  ],
  blogs: {
    label: 'Blogs',
    link: 'https://medium.com/@sarathps93',
  },
  workTogether: 'Want to work together?',
  follow: 'Please visit my profiles below to follow my work.',
  profiles: [
    {
      path: './github.jpg',
      alt: 'GitHub logo',
      link: 'https://github.com/sarathps93',
    },
    {
      path: './npm.png',
      alt: 'Npm logo',
      link: 'https://www.npmjs.com/~sarathps93',
    },
    {
      path: './docker.png',
      alt: 'docker logo',
      link: 'https://hub.docker.com/u/sarathps93',
    },
  ],
  contact: [
    {
      label: 'location',
      content: 'London, United Kingdom',
      component: LocationSvg,
    },
    {
      label: 'phone',
      content: '<a href="tel:+44 7384166284">+44 7384166284</a>',
      component: PhoneSvg,
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
  ],
  copyRight: 'Built from scratch using React server side rendering',
};
