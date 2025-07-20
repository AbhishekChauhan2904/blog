import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Set EJS as view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Add this under static files middleware
app.use(express.urlencoded({ extended: true }))

// Home route
app.get('/', (req, res) => {
 const profile = {
  name: 'Abhishek Kumar',
  title: 'Software Developer & Full Stack Developer',
  summary: 'Experienced SDE with 2+ years in MERN stack and DevOps (AWS & Azure), aiming to specialize in React.js, Next.js, Node.js, Flutter, and React Native for full-stack and Android development.',
 skills: {
  "Programming Languages": ['C', 'C++', 'Java', 'JavaScript', 'HTML', 'CSS'],
  "Frameworks/Libraries": ['React.js', 'Node.js', 'Express.js', 'Flutter', 'Redux', 'jQuery', 'React Native', 'Next.js'],
  "Databases": ['MongoDB', 'MySQL', 'Firebase'],
  "Developer Tools": ['Git', 'VS Code', 'Android Studio', 'Jenkins', 'Docker', 'Sublime Text', 'Atom', 'Hyper'],
  "Core Skills": ['DSA', 'OOP', 'System Design', 'OS', 'DBMS'],
  "Additional Skills": ['REST API', 'API integration', 'DevOps', 'Linux', 'AWS'],
},
   workExperience: [
    {
      company: 'Trego',
      role: 'Software Developer',
      location: 'Noida, Uttar Pradesh',
      duration: 'Nov 2023 – Present',
      achievements: [
        'Optimized scalable automations through CI/CD pipeline, reducing deployment time by 40%',
        'Designed and developed a full-stack healthcare site using React, Node.js, Express.js & MySQL',
        'Collaborated on SaaS solutions for healthcare with Android development (Flutter)',
      ],
    },
    {
      company: 'Mountblue',
      role: 'Full Stack Developer',
      location: 'Pune, Maharashtra',
      duration: 'Jul 2023 – Nov 2023',
      achievements: [
        'Reduced manual deployment by 50% using AWS & Agile Pipeline',
        'Built features using React.js and MongoDB in an Agile team',
      ],
    },
    {
      company: 'Anu Computer Consultancy',
      role: 'Front-End Developer',
      location: 'Pune, Maharashtra',
      duration: 'Jan 2020 – Apr 2020',
      achievements: [
        'Developed landing page using React.js and fixed UI component issues',
        'Integrated front-end with backend systems',
      ],
    },
  ],
  projects: [
    {
      name: 'Quora Clone',
      stack: 'React.js, Node.js, MongoDB, Firebase',
      link: 'https://github.com/AbhishekChauhan2904/quora-clone',
      description: 'Built a Quora clone with posting, answering, voting, and authentication using Firebase. Backend built with Express.js and MongoDB.',
    },
    {
      name: 'Flutter Portfolio App',
      stack: 'Flutter, Dart, Node.js, Firebase',
      link: 'https://github.com/AbhishekChauhan2904/Abhishek-Chauhan',
      description: 'Developed a responsive portfolio app with create/update/delete/search features. Integrated Firebase and used REST API for backend logic.',
    },
    {
      name: 'React-native E-Commerce',
      stack: 'React Native, Redux, Firebase, Node.js',
      link: 'https://github.com/AbhishekChauhan2904/react-native-ecommerce',
      description: 'Cross-platform mobile e-commerce app with secure login, product browsing, and payment integration. Built using React Native and Redux.',
    }
  ],
  education: 'Nalanda College of Engineering, CGPA 8.1 (2019–2023)'
};


  res.render('home', { profile });
});
app.get('/projects', (req, res) => {
  const profile = {
    name: 'Abhishek Kumar',
    projects: [
      {
        name: 'Quora Clone',
        stack: 'React.js, Node.js, MongoDB, Firebase',
        link: 'https://github.com/AbhishekChauhan2904/quora-clone',
        description: 'Built a Quora clone with posting, answering, voting, and authentication using Firebase. Backend built with Express.js and MongoDB.',
      },
      {
        name: 'Flutter Portfolio App',
        stack: 'Flutter, Dart, Node.js, Firebase',
        link: 'https://github.com/AbhishekChauhan2904/Abhishek-Chauhan',
        description: 'Developed a responsive portfolio app with create/update/delete/search features. Integrated Firebase and used REST API for backend logic.',
      },
      {
        name: 'React-native E-Commerce',
        stack: 'React Native, Redux, Firebase, Node.js',
        link: 'https://github.com/AbhishekChauhan2904/react-native-ecommerce',
        description: 'Cross-platform mobile e-commerce app with secure login, product browsing, and payment integration. Built using React Native and Redux.',
      }
    ]
  };

  res.render('projects', { profile });
});

app.get('/contact', (req, res) => {
  const profile = { name: 'Abhishek Kumar' };
  res.render('contact', { profile });
});

// Contact form handler (POST)
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Contact form submitted:', { name, email, message });

  res.send(`<h1>Thank you, ${name}!</h1><p>Your message has been received.</p><a href="/">Back to Home</a>`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
