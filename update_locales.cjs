const fs = require('fs');
const enPath = 'src/i18n/locales/en.json';
const frPath = 'src/i18n/locales/fr.json';

const en = JSON.parse(fs.readFileSync(enPath, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frPath, 'utf8'));

en.work.caseStudies = {
  mycoach: {
    title: 'MYCOACH',
    subtitle: 'Coaching Marketplace Platform',
    metrics: {
      users: { label: 'Users', value: '1000+' },
      bookingRate: { label: 'Booking Rate', value: '89%' },
      rating: { label: 'Rating', value: '4.8/5' }
    },
    overview: [
      'My Coach is a coaching marketplace designed to help individuals discover, connect with, and book qualified personal trainers based on their personal goals and preferences. The platform aims to remove the friction often associated with finding trusted coaches while providing trainers with tools to manage and grow their businesses.',
      'As Co-Founder, Product Manager, and Full-Stack Engineer, I was responsible for transforming the idea into a functional MVP, leading product strategy, designing the user experience, and developing the platform\'s architecture.'
    ],
    challenge: [
      'Many people struggle to find trustworthy fitness coaches who match their specific needs. Existing solutions often lack transparency, personalization, and streamlined booking experiences. Coaches also face challenges managing client relationships and showcasing their expertise online.',
      'The goal was to create a platform that would simplify coach discovery, improve trust, and provide a seamless booking experience for both coaches and clients.'
    ],
    roles: ['CEO', 'Product Strategy', 'UX Research', 'MVP Development', 'Growth Marketing', 'Sales & Partnerships'],
    solution: 'To address the challenges faced by both coaches and clients, I designed and developed a platform that streamlined the entire coaching journey, from discovery to long-term engagement. The experience was built around personalized coach matching, allowing users to find professionals aligned with their goals, preferences, and coaching needs. I created detailed coach profiles that established trust through transparent information and social proof, while a seamless booking flow simplified scheduling and session management. Beyond the client experience, I designed tools that empowered coaches to manage their services, monitor client progress, and grow their businesses more effectively. The result was a scalable, mobile-responsive platform that balanced user experience, business objectives, and operational efficiency.',
    processText: [
      'I started by identifying the key pain points experienced by both coaches and clients. Based on these findings, I designed user journeys focused on reducing friction during onboarding, coach discovery, and booking.',
      'The platform was structured around three core experiences:'
    ],
    processBullets: [
      'Coach discovery and matching',
      'Session booking and management',
      'Progress tracking and client engagement'
    ],
    outcomeBullets: [
      'Successfully onboarded <strong>14</strong> certified coaches before launch',
      'Built a waiting list of <strong>25+</strong> early users',
      'Participated in <strong>ALX Ventures</strong> and <strong>Accelab x MDJS</strong> accelerator programs',
      'Established the foundation for scaling into additional coaching categories',
      'Created a complete MVP ready for beta testing'
    ]
  },
  vouchify: {
    title: 'VOUCHIFY',
    subtitle: 'Digital Membership & Voucher Platform',
    metrics: {
      businesses: { label: 'Businesses', value: '1000+' },
      subscriptions: { label: 'Subscriptions Sold', value: '100K+' },
      countries: { label: 'Countries', value: '20+' }
    },
    overview: [
      'Vouchify is a digital membership and voucher platform that enables businesses to create, distribute, and manage digital passes that integrate seamlessly with mobile wallets.',
      'As a Full-Stack Engineer and Product Manager, I worked on both the user experience and technical implementation of key platform features.'
    ],
    challenge: [
      'Traditional membership and voucher systems often rely on outdated processes, creating friction for both businesses and customers. The challenge was to create a scalable and intuitive platform that simplified pass creation, management, and distribution.'
    ],
    roles: ['Product Design', 'Full-Stack Development', 'User Experience Design', 'Feature Planning', 'Technical Architecture'],
    solution: 'I helped create a modern digital membership and voucher platform that made it easy for businesses to issue, manage, and distribute digital passes while delivering a seamless experience for end users. The product was designed to eliminate the complexity traditionally associated with membership programs by providing intuitive workflows, streamlined onboarding, and centralized management tools. I worked across both design and development to ensure that businesses could efficiently manage their digital offerings while customers could easily access and use passes through mobile wallet integrations. The result was a scalable platform that combined simplicity, flexibility, and strong user experience, making digital memberships more accessible for organizations of all sizes.',
    processText: [
      'I worked closely with the founding team to understand business requirements and user expectations.',
      'The focus was on:'
    ],
    processBullets: [
      'Streamlining onboarding flows',
      'Simplifying pass management',
      'Creating intuitive dashboards',
      'Ensuring mobile wallet compatibility',
      'Building scalable frontend experiences'
    ],
    processFooter: 'Every feature was designed to reduce complexity while maintaining flexibility for different business use cases.',
    outcomeBullets: [
      'Delivered end-to-end product experiences from design to implementation',
      'Improved usability through simplified workflows',
      'Built scalable frontend architecture for future growth',
      'Helped create a seamless digital membership experience for businesses and customers'
    ]
  },
  lifeline: {
    title: 'LifeLine',
    subtitle: 'Health-Tech Platform',
    metrics: {
      providers: { label: 'Healthcare Providers', value: '200+' },
      transactions: { label: 'Transactions Processed', value: '14k+' },
      countries: { label: 'Countries', value: '5+' }
    },
    overview: [
      'LifeLine is a healthcare platform designed to improve access to medical services through digital solutions that connect patients, healthcare providers, pharmacies, and insurers. The platform includes appointment booking, insurance workflows, pharmacy management tools, and patient engagement experiences.',
      'As a Product Manager and Frontend Developer, I contributed to both the design and implementation of multiple products within the LifeLine ecosystem.'
    ],
    challenge: [
      'Healthcare workflows are often complex, fragmented, and difficult for patients to navigate. Providers also face operational challenges caused by disconnected systems and inefficient processes.',
      'The objective was to simplify healthcare interactions while maintaining compliance, trust, and accessibility for all stakeholders.'
    ],
    roles: ['Product Design', 'UX/UI Design', 'Frontend Development', 'Workflow Optimization', 'User Journey Mapping'],
    solution: 'The solution focused on creating a unified digital healthcare experience that simplified interactions between patients, healthcare providers, pharmacies, and insurance partners. I designed and developed intuitive interfaces that transformed complex healthcare workflows into clear, user-friendly experiences. This included patient appointment booking journeys, insurance onboarding processes, pharmacy management tools, and provider dashboards. By establishing a consistent design system and reusable frontend components, I ensured a seamless experience across the entire ecosystem while improving efficiency for both end users and healthcare professionals. The final product reduced friction throughout the healthcare journey and provided a scalable foundation for future services and integrations.',
    processText: [
      'I collaborated closely with stakeholders to understand the needs of patients, clinics, pharmacies, and insurance partners.',
      'The design process focused on:'
    ],
    processBullets: [
      'Simplifying healthcare journeys',
      'Reducing cognitive load',
      'Improving information accessibility',
      'Creating scalable design systems',
      'Building responsive interfaces'
    ],
    processFooter: 'I translated complex healthcare processes into intuitive digital experiences while ensuring consistency across the platform.',
    outcomeBullets: [
      'Delivered responsive and scalable interfaces across multiple healthcare products',
      'Improved workflow efficiency through intuitive dashboard experiences',
      'Helped create a consistent design language across the platform',
      'Accelerated development through reusable components and structured frontend architecture'
    ]
  }
};

en.startups.cards = [
  {
    title: 'Product Strategy',
    description: 'From market research to product vision — I define the roadmap that balances user needs with business goals.',
    tags: ['Market Sizing', 'OKR Settings', 'Roadmap Planning', 'Conmpetetive Analysis']
  },
  {
    title: 'MVP Development',
    description: 'I ship working products fast. Design + engineering in one person means fewer handoffs, faster iterations.',
    tags: ['4 - 8 Week MVP Cycles', 'Full-Stack Execution', 'Design → Code', 'Lean Validation']
  },
  {
    title: 'AI-Powered Development',
    description: 'I use AI tools natively — from code generation to design automation — to build at startup speed.',
    tags: ['Cursor IDE', 'Claude API', 'AI Prototyping', 'Prompt Engineering']
  },
  {
    title: 'User Experience Design',
    description: 'Every interaction is intentional. I design for clarity, delight, and conversion — not just aesthetics.',
    tags: ['UX Research', 'Wireframing', 'Hi-Fi Prototypes', 'Design Systems']
  },
  {
    title: 'Marketplace Design',
    description: 'I understand two-sided marketplace dynamics — designing for both supply and demand simultaneously.',
    tags: ['Supply & Demand UX', 'Trust Systems', 'Search & Discovery ', 'Onboarding Flows']
  },
  {
    title: 'Startup Operations',
    description: 'As a founder, I\'ve navigated fundraising, team building, legal structure, and early customer acquisition.',
    tags: ['Fundraising', 'Team Building', 'Legal Structure', 'Metrics & KPIs']
  }
];

en.education.academicList = [
  {
    title: 'European Master in Intelligent Applications & Big Data',
    institution: 'MIAGE Casablanca | FEDE',
    date: '2024 - 2026',
    description: 'Advanced study in AI systems, machine learning, big data architectures, and intelligent application design'
  },
  {
    title: 'Bachelor in Automation Engineering',
    institution: 'FST Settat',
    date: '2016 - 2017',
    description: 'Foundation in systems engineering, control systems, and automation — building analytical and technical problem-solving skills'
  }
];

en.education.certificationsList = [
  {
    title: 'Software Engineering',
    institution: 'ALX Africa',
    date: 'November 2024',
    description: 'Intensive 12-month program covering full-stack development, algorithms, system design, and engineering best practices'
  },
  {
    title: 'McKinsey Forward Program',
    institution: 'McKinsey & Company',
    date: 'July 2024',
    description: 'Selected for McKinsey\'s leadership and problem-solving program for high-potential individuals from emerging markets'
  },
  {
    title: 'Founder Academy',
    institution: 'ALX Ventures',
    date: 'July 2024',
    description: 'Startup fundamentals — product-market fit, fundraising, go-to-market strategy, and founding team dynamics'
  }
];

en.testimonials.list = [
  {
    name: 'King Chukwumere',
    role: 'CEO, LifeLine Africa',
    content: 'Working with Mohsine was the best decision we made. He delivered a complex healthcare platform on time and exceeding our expectations. His attention to UX details and scalable architecture is outstanding.'
  },
  {
    name: 'Anas Oudadsse',
    role: 'CTO, MYCOACH',
    content: 'Mohsine is exceptional. He didn\'t just build our product; he helped shape our entire business strategy. His technical skills are matched only by his understanding of product-market fit. A true asset to any founding team.'
  }
];

en.footer = {
  copyright: '© {{year}} Mohsine Hourmat Allah. All rights reserved.'
};

// Now FR translations
fr.work.caseStudies = {
  mycoach: {
    title: 'MYCOACH',
    subtitle: 'Plateforme de Marketplace de Coaching',
    metrics: {
      users: { label: 'Utilisateurs', value: '1000+' },
      bookingRate: { label: 'Taux de réservation', value: '89%' },
      rating: { label: 'Note', value: '4.8/5' }
    },
    overview: [
      'My Coach est une marketplace de coaching conçue pour aider les individus à découvrir, à se connecter avec et à réserver des entraîneurs personnels qualifiés en fonction de leurs objectifs et préférences. La plateforme vise à éliminer les frictions souvent associées à la recherche de coachs de confiance tout en fournissant aux entraîneurs des outils pour gérer et développer leur activité.',
      'En tant que co-fondateur, Product Manager et Ingénieur Full-Stack, j\'étais responsable de la transformation de l\'idée en un MVP fonctionnel, de la direction de la stratégie produit, de la conception de l\'expérience utilisateur et du développement de l\'architecture de la plateforme.'
    ],
    challenge: [
      'De nombreuses personnes ont du mal à trouver des coachs sportifs de confiance qui correspondent à leurs besoins spécifiques. Les solutions existantes manquent souvent de transparence, de personnalisation et d\'expériences de réservation fluides. Les coachs rencontrent également des difficultés pour gérer les relations clients et mettre en valeur leur expertise en ligne.',
      'L\'objectif était de créer une plateforme qui simplifierait la découverte de coachs, améliorerait la confiance et offrirait une expérience de réservation fluide pour les coachs et les clients.'
    ],
    roles: ['PDG', 'Stratégie Produit', 'Recherche UX', 'Développement MVP', 'Marketing de Croissance', 'Ventes & Partenariats'],
    solution: 'Pour relever les défis auxquels sont confrontés à la fois les coachs et les clients, j\'ai conçu et développé une plateforme qui rationalise l\'ensemble du parcours de coaching, de la découverte à l\'engagement à long terme. L\'expérience a été construite autour de la mise en relation personnalisée des coachs, permettant aux utilisateurs de trouver des professionnels alignés avec leurs objectifs, leurs préférences et leurs besoins en coaching. J\'ai créé des profils de coach détaillés qui ont instauré la confiance grâce à des informations transparentes et des preuves sociales, tandis qu\'un flux de réservation transparent simplifiait la planification et la gestion des sessions. Au-delà de l\'expérience client, j\'ai conçu des outils permettant aux coachs de gérer leurs services, de suivre les progrès des clients et de développer leur entreprise plus efficacement. Le résultat a été une plateforme évolutive et adaptée aux mobiles qui équilibrait l\'expérience utilisateur, les objectifs commerciaux et l\'efficacité opérationnelle.',
    processText: [
      'J\'ai commencé par identifier les principaux problèmes rencontrés par les coachs et les clients. Sur la base de ces résultats, j\'ai conçu des parcours utilisateurs axés sur la réduction des frictions lors de l\'intégration, de la découverte de coachs et de la réservation.',
      'La plateforme s\'articule autour de trois expériences clés :'
    ],
    processBullets: [
      'Découverte et mise en relation de coachs',
      'Réservation et gestion des sessions',
      'Suivi des progrès et engagement des clients'
    ],
    outcomeBullets: [
      'Intégration réussie de <strong>14</strong> coachs certifiés avant le lancement',
      'Création d\'une liste d\'attente de plus de <strong>25</strong> premiers utilisateurs',
      'Participation aux programmes d\'accélération <strong>ALX Ventures</strong> et <strong>Accelab x MDJS</strong>',
      'Établissement des bases pour évoluer vers de nouvelles catégories de coaching',
      'Création d\'un MVP complet prêt pour les tests bêta'
    ]
  },
  vouchify: {
    title: 'VOUCHIFY',
    subtitle: 'Plateforme Numérique d\'Adhésions & Bons',
    metrics: {
      businesses: { label: 'Entreprises', value: '1000+' },
      subscriptions: { label: 'Abonnements Vendus', value: '100K+' },
      countries: { label: 'Pays', value: '20+' }
    },
    overview: [
      'Vouchify est une plateforme numérique d\'adhésions et de bons qui permet aux entreprises de créer, distribuer et gérer des pass numériques qui s\'intègrent parfaitement aux portefeuilles mobiles.',
      'En tant que Ingénieur Full-Stack et Product Manager, j\'ai travaillé à la fois sur l\'expérience utilisateur et sur l\'implémentation technique des fonctionnalités clés de la plateforme.'
    ],
    challenge: [
      'Les systèmes traditionnels d\'adhésion et de bons reposent souvent sur des processus obsolètes, créant des frictions pour les entreprises et les clients. Le défi consistait à créer une plateforme évolutive et intuitive qui simplifierait la création, la gestion et la distribution de pass.'
    ],
    roles: ['Conception de Produits', 'Développement Full-Stack', 'Conception de l\'Expérience Utilisateur', 'Planification des Fonctionnalités', 'Architecture Technique'],
    solution: 'J\'ai contribué à la création d\'une plateforme numérique moderne d\'adhésion et de bons de réduction qui a permis aux entreprises d\'émettre, de gérer et de distribuer facilement des laissez-passer numériques tout en offrant une expérience transparente aux utilisateurs finaux. Le produit a été conçu pour éliminer la complexité traditionnellement associée aux programmes d\'adhésion en proposant des flux de travail intuitifs, une intégration simplifiée et des outils de gestion centralisés. J\'ai travaillé sur la conception et le développement pour m\'assurer que les entreprises pouvaient gérer efficacement leurs offres numériques tandis que les clients pouvaient facilement accéder et utiliser les laissez-passer via les intégrations de portefeuille mobile. Le résultat a été une plateforme évolutive combinant simplicité, flexibilité et expérience utilisateur solide, rendant les adhésions numériques plus accessibles aux organisations de toutes tailles.',
    processText: [
      'J\'ai travaillé en étroite collaboration avec l\'équipe fondatrice pour comprendre les exigences commerciales et les attentes des utilisateurs.',
      'L\'accent a été mis sur :'
    ],
    processBullets: [
      'La rationalisation des flux d\'intégration',
      'La simplification de la gestion des pass',
      'La création de tableaux de bord intuitifs',
      'La garantie de la compatibilité avec les portefeuilles mobiles',
      'La construction d\'expériences frontend évolutives'
    ],
    processFooter: 'Chaque fonctionnalité a été conçue pour réduire la complexité tout en conservant une flexibilité pour différents cas d\'utilisation professionnels.',
    outcomeBullets: [
      'Livraison d\'expériences produit de bout en bout, de la conception à l\'implémentation',
      'Amélioration de la convivialité grâce à des flux de travail simplifiés',
      'Construction d\'une architecture frontend évolutive pour la croissance future',
      'Aide à la création d\'une expérience d\'adhésion numérique transparente pour les entreprises et les clients'
    ]
  },
  lifeline: {
    title: 'LifeLine',
    subtitle: 'Plateforme Health-Tech',
    metrics: {
      providers: { label: 'Fournisseurs de Soins', value: '200+' },
      transactions: { label: 'Transactions Traitées', value: '14k+' },
      countries: { label: 'Pays', value: '5+' }
    },
    overview: [
      'LifeLine est une plateforme de santé conçue pour améliorer l\'accès aux services médicaux via des solutions numériques qui connectent les patients, les prestataires de soins de santé, les pharmacies et les assureurs. La plateforme comprend la prise de rendez-vous, les flux de travail d\'assurance, les outils de gestion de pharmacie et les expériences d\'engagement des patients.',
      'En tant que Product Manager et Développeur Frontend, j\'ai contribué à la conception et à la mise en œuvre de plusieurs produits au sein de l\'écosystème LifeLine.'
    ],
    challenge: [
      'Les flux de travail dans le domaine de la santé sont souvent complexes, fragmentés et difficiles à naviguer pour les patients. Les prestataires sont également confrontés à des défis opérationnels causés par des systèmes déconnectés et des processus inefficaces.',
      'L\'objectif était de simplifier les interactions de santé tout en maintenant la conformité, la confiance et l\'accessibilité pour toutes les parties prenantes.'
    ],
    roles: ['Conception de Produits', 'Conception UX/UI', 'Développement Frontend', 'Optimisation des Flux de Travail', 'Cartographie du Parcours Utilisateur'],
    solution: 'La solution visait à créer une expérience de santé numérique unifiée qui a simplifié les interactions entre les patients, les prestataires de soins, les pharmacies et les partenaires d\'assurance. J\'ai conçu et développé des interfaces intuitives qui ont transformé des flux de travail complexes en matière de soins de santé en expériences claires et conviviales. Cela comprenait les parcours de réservation de rendez-vous pour les patients, les processus d\'intégration de l\'assurance, les outils de gestion de la pharmacie et les tableaux de bord des prestataires. En établissant un système de conception cohérent et des composants frontend réutilisables, j\'ai assuré une expérience transparente à travers l\'ensemble de l\'écosystème tout en améliorant l\'efficacité pour les utilisateurs finaux et les professionnels de la santé. Le produit final a réduit les frictions tout au long du parcours de soins et a fourni une base évolutive pour les services et intégrations futurs.',
    processText: [
      'J\'ai collaboré étroitement avec les parties prenantes pour comprendre les besoins des patients, des cliniques, des pharmacies et des partenaires d\'assurance.',
      'Le processus de conception s\'est concentré sur :'
    ],
    processBullets: [
      'La simplification des parcours de soins de santé',
      'La réduction de la charge cognitive',
      'L\'amélioration de l\'accessibilité à l\'information',
      'La création de systèmes de conception évolutifs',
      'La construction d\'interfaces réactives'
    ],
    processFooter: 'J\'ai traduit des processus de santé complexes en expériences numériques intuitives tout en assurant la cohérence sur l\'ensemble de la plateforme.',
    outcomeBullets: [
      'Livraison d\'interfaces réactives et évolutives pour plusieurs produits de santé',
      'Amélioration de l\'efficacité des flux de travail grâce à des expériences de tableau de bord intuitives',
      'Aide à la création d\'un langage de conception cohérent sur toute la plateforme',
      'Accélération du développement grâce à des composants réutilisables et à une architecture frontend structurée'
    ]
  }
};

fr.startups.cards = [
  {
    title: 'Stratégie Produit',
    description: 'De l\'étude de marché à la vision produit — je définis la feuille de route qui équilibre les besoins des utilisateurs avec les objectifs commerciaux.',
    tags: ['Dimensionnement du Marché', 'Définition OKR', 'Planification de la Feuille de Route', 'Analyse Concurrentielle']
  },
  {
    title: 'Développement MVP',
    description: 'Je livre des produits fonctionnels rapidement. Le design + l\'ingénierie en une seule personne signifie moins de transferts, des itérations plus rapides.',
    tags: ['Cycles MVP de 4 à 8 Semaines', 'Exécution Full-Stack', 'Design → Code', 'Validation Lean']
  },
  {
    title: 'Développement Assisté par l\'IA',
    description: 'J\'utilise les outils d\'IA nativement — de la génération de code à l\'automatisation du design — pour construire à la vitesse des startups.',
    tags: ['Cursor IDE', 'API Claude', 'Prototypage IA', 'Ingénierie de Prompts']
  },
  {
    title: 'Design d\'Expérience Utilisateur',
    description: 'Chaque interaction est intentionnelle. Je conçois pour la clarté, le plaisir et la conversion — pas seulement pour l\'esthétique.',
    tags: ['Recherche UX', 'Wireframing', 'Prototypes Hi-Fi', 'Design Systems']
  },
  {
    title: 'Conception de Marketplace',
    description: 'Je comprends la dynamique des marketplaces bilatérales — je conçois simultanément pour l\'offre et la demande.',
    tags: ['UX Offre & Demande', 'Systèmes de Confiance', 'Recherche & Découverte', 'Parcours d\'Intégration']
  },
  {
    title: 'Opérations de Startup',
    description: 'En tant que fondateur, j\'ai navigué à travers la levée de fonds, la création d\'équipe, la structure juridique et l\'acquisition des premiers clients.',
    tags: ['Levée de Fonds', 'Création d\'Équipe', 'Structure Juridique', 'Métriques & KPIs']
  }
];

fr.education.academicList = [
  {
    title: 'Master Européen en Applications Intelligentes & Big Data',
    institution: 'MIAGE Casablanca | FEDE',
    date: '2024 - 2026',
    description: 'Étude avancée des systèmes d\'IA, du machine learning, des architectures big data et de la conception d\'applications intelligentes'
  },
  {
    title: 'Licence en Ingénierie de l\'Automatisation',
    institution: 'FST Settat',
    date: '2016 - 2017',
    description: 'Fondations en ingénierie des systèmes, systèmes de contrôle et automatisation — développement des compétences analytiques et de résolution de problèmes techniques'
  }
];

fr.education.certificationsList = [
  {
    title: 'Ingénierie Logicielle',
    institution: 'ALX Africa',
    date: 'Novembre 2024',
    description: 'Programme intensif de 12 mois couvrant le développement full-stack, les algorithmes, la conception de systèmes et les meilleures pratiques d\'ingénierie'
  },
  {
    title: 'Programme McKinsey Forward',
    institution: 'McKinsey & Company',
    date: 'Juillet 2024',
    description: 'Sélectionné pour le programme de leadership et de résolution de problèmes de McKinsey pour les individus à haut potentiel des marchés émergents'
  },
  {
    title: 'Académie des Fondateurs',
    institution: 'ALX Ventures',
    date: 'Juillet 2024',
    description: 'Fondamentaux des startups — adéquation produit-marché, levée de fonds, stratégie de mise sur le marché et dynamique de l\'équipe fondatrice'
  }
];

fr.testimonials.list = [
  {
    name: 'King Chukwumere',
    role: 'PDG, LifeLine Africa',
    content: 'Travailler avec Mohsine a été la meilleure décision que nous ayons prise. Il a livré une plateforme de santé complexe dans les délais et en dépassant nos attentes. Son attention aux détails UX et à l\'architecture évolutive est exceptionnelle.'
  },
  {
    name: 'Anas Oudadsse',
    role: 'CTO, MYCOACH',
    content: 'Mohsine est exceptionnel. Il n\'a pas seulement construit notre produit ; il a contribué à façonner toute notre stratégie commerciale. Ses compétences techniques n\'ont d\'égal que sa compréhension de l\'adéquation produit-marché. Un véritable atout pour toute équipe fondatrice.'
  }
];

fr.footer = {
  copyright: '© {{year}} Mohsine Hourmat Allah. Tous droits réservés.'
};

fs.writeFileSync(enPath, JSON.stringify(en, null, 4));
fs.writeFileSync(frPath, JSON.stringify(fr, null, 4));
