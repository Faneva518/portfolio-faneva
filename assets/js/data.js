const portfolioData = {
  skills: [
    {
      category: "Frontend",
      icon: "fa-solid fa-laptop-code",
      items: [
        { name: "HTML5", icon: "fa-brands fa-html5" },
        { name: "CSS3", icon: "fa-brands fa-css3-alt" },
        { name: "JavaScript", icon: "fa-brands fa-js" },
        { name: "React", icon: "fa-brands fa-react" }
      ]
    },
    {
      category: "Backend",
      icon: "fa-solid fa-server",
      items: [
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "PHP", icon: "fa-brands fa-php" },
        { name: "Laravel", icon: "fa-brands fa-laravel" },
        { name: "Express", icon: "fa-solid fa-server" }
      ]
    },
    {
      category: "Programmation",
      icon: "fa-brands fa-code",
      items: [
        { name: "Python", icon: "fa-brands fa-python" },
        { name: "Django", icon: "fa-solid fa-leaf" },
        { name: "JavaScript", icon: "fa-brands fa-js" }
      ]
    },
    {
      category: "Bases de données",
      icon: "fa-solid fa-database",
      items: [
        { name: "MySQL", icon: "fa-solid fa-database" },
        { name: "PostgreSQL", icon: "fa-solid fa-database" }
      ]
    },
    {
      category: "Mobile",
      icon: "fa-solid fa-mobile-screen",
      items: [
        { name: "React Native", icon: "fa-solid fa-mobile-screen" }
      ]
    }
  ],

  projects: [
    {
      number: "01",
      imageClass: "travel-image",
      imageIcon: "fa-solid fa-plane-departure",
      imageLabel: "TRAVEL PLATFORM",
      category: "APPLICATION WEB",
      title: "i-voyage2035",
      description: "Application web de présentation d'informations et de services de voyage avec une architecture Front-End et Back-End.",
      tags: [
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "Express", icon: "fa-solid fa-server" },
        { name: "MySQL", icon: "fa-solid fa-database" },
        { name: "API REST", icon: "fa-solid fa-code" }
      ],
      footer: "Développement Web"
    },
    {
      number: "02",
      imageClass: "farm-image",
      imageIcon: "fa-solid fa-seedling",
      imageLabel: "AGRICULTURAL PLATFORM",
      category: "PLATEFORME WEB",
      title: "Tantsaha Connect",
      description: "Plateforme agricole destinée à faciliter la mise en relation et l'accès aux informations pour les acteurs du monde agricole.",
      tags: [
        { name: "React", icon: "fa-brands fa-react" },
        { name: "Node.js", icon: "fa-brands fa-node-js" },
        { name: "SQLite", icon: "fa-solid fa-database" },
        { name: "API REST", icon: "fa-solid fa-code" }
      ],
      footer: "Janvier 2026"
    },
    {
      number: "03",
      imageClass: "vote-image",
      imageIcon: "fa-solid fa-check-to-slot",
      imageLabel: "VOTING SYSTEM",
      category: "APPLICATION WEB",
      title: "Gestion de vote délégué",
      description: "Application de gestion des élections de délégués avec gestion des électeurs, des candidats et traitement des résultats.",
      tags: [
        { name: "PHP", icon: "fa-brands fa-php" },
        { name: "MySQL", icon: "fa-solid fa-database" }
      ],
      footer: "Gestion de vote"
    }
  ],

  education: [
    {
      date: "2024 – EN COURS",
      icon: "fa-solid fa-graduation-cap",
      title: "Licence en Services Organisation / Informatique",
      institution: "ESMIA",
      detail: "Développement logiciel et informatique"
    },
    {
      date: "2024",
      icon: "fa-solid fa-award",
      title: "Baccalauréat",
      institution: "Lycée Notre Dame de la Providence Bealanana",
      detail: ""
    }
  ]
};
