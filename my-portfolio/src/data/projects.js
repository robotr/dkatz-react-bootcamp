import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const PROJECTS = [
  {
    id: 1,
    title: 'Example React Application',
    description: 'A React App that I built, onvolving JS and core web dev concepts!',
    link: 'https://example.com/react-project',
    image: project1
  },
  {
    id: 2,
    title: 'My API',
    description: 'A REST API that I built from scratch with GET and POST requests!',
    link: 'https://example.com/rest-project',
    image: project3
  },
  {
    id: 3,
    title: 'Adventure Game in Go',
    description: 'A short text-based adventure role-playing-game I wrote using the golang programming language!',
    link: 'https://example.com/adventure-of-the-fox',
    image: project2
  },
];

export default PROJECTS;
