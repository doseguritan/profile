// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'doseguritan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/profile',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      // manual: {
      //   // Properties for manually specifying projects
      //   projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      // },
    },
    external: {
      header: 'Works',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'ShakeSalad Admin',
          // description:
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          // imageUrl:
          //   'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://shakesalad.com',
        },
        {
          title: 'Shakesalad Vending Machine',
          // description:
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          // imageUrl: 'https://www.instagram.com/reel/CjrztjhPIi-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          link: 'https://www.instagram.com/reel/CjrztjhPIi-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
        },
        {
          title: 'Conversar Website',
          // description:
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          // imageUrl: 'https://www.instagram.com/reel/CjrztjhPIi-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          link: 'https://conversar.net',
        },
        {
          title: 'Verdsign Website',
          // description:
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          // imageUrl: 'https://www.instagram.com/reel/CjrztjhPIi-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          link: 'https://verdsign.com',
        },
        {
          title: 'Visualizar Website',
          // description:
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          // imageUrl: 'https://www.instagram.com/reel/CjrztjhPIi-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          link: 'https://vizualizar.com',
        },
        {
          title: 'Synops',
          // description:
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          // imageUrl: 'https://www.instagram.com/reel/CjrztjhPIi-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          link: 'https://www.dvsi.com/work/data-visualisation',
        },
        {
          title: 'Recruitment Application',
          link: 'https://www.dvsi.com/work/workplace-management-recruitment-application',
        },
        {
          title: 'Accenture Operations Malaysia',
          link: 'https://conversar.net/convo/projects/accenture-operations-malaysia-2021-13'
        },
        {
          title: 'Safe Induction for SI Group',
          link: 'https://conversar.net/convo/projects/si-group-2018-17'
        },
        {
          title: 'Singapore Tourism Board',
          link: 'https://conversar.net/convo/projects/singapore-tourism-board'
        },
        {
          title: 'Katoen Natie',
          link: 'https://conversar.net/convo/projects/katoen-natie-singapore'
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Daryl Seguritan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'daryl-seguritan-4797a358',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: 'daryl.seguritan',
    telegram: '',
    website: 'https://doseguritan.github.io/profile',
    phone: '+639622029539',
    email: 'daryldhagz.21@gmail.com',
  },
  resume: {
    fileUrl:
      'https://docs.google.com/document/d/1Qg1lSLWzC0nRz5ODyh_i4hO_GcLhVQ0zHCQ_ga6Pn4w/edit?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Ruby on Rails',
    'Python',
    'PHP',
    'Laravel',
    'JavaScript',
    'TypeScript',
    'React.js',
    'Solid.js',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'PHPUnit',
    'CSS',
    'Antd',
    'Tailwind',
    'RabbitMQ'
  ],
  experiences: [
    {
      company: 'Wholly Greens Pte Ltd',
      position: 'Software Engineer',
      from: 'February 2020',
      to: 'January 2025',
      companyLink: 'https://shakesalad.com',
    },
    {
      company: 'Touchmedia Pte Ltd',
      position: 'Web Developer',
      from: 'January 2019',
      to: 'January 2020',
      companyLink: 'https://touchmedia.net',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Cagayan State University',
      degree: 'Bachelor of Science in Information Technology',
      from: '2009',
      to: '2012',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dark',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
