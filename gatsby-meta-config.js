module.exports = {
  title: `nara.dev`,
  description: `신 나라`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://nara.dev`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: `narashin/narashin.github.io`, // `zoomkoding/zoomkoding-gatsby-blog`,
    },
  },
  ga: 'G-HY9BVBRNH5', // Google Analytics Tracking ID
  author: {
    name: `신나라`,
    bio: {
      role: `개발자`,
      description: [
        '새로운 것을 두려워하지 않는',
        '동료들을 먼저 생각하는',
        '낮고 서늘한 매일을 보내는',
      ],
      thumbnail: 'shinnara.gif', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/narashin`, // `https://github.com/zoomKoding`,
      linkedIn: `https://www.linkedin.com/in/shinnara/`, // `https://www.linkedin.com/in/jinhyeok-jeong-800871192`,
      email: `me@nara.dev`, // `zoomkoding@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
    ],
  },
};
