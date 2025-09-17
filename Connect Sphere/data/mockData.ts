import { User, Post, Comment, Job, Company, Conversation, Message, Notification, Experience, Education, ConnectionInvitation, Mentor, Group } from '../types';

export const users: User[] = [
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Doe',
    headline: 'Senior Software Engineer at TechCorp',
    avatarUrl: 'https://picsum.photos/seed/user1/200/200',
    coverPhotoUrl: 'https://picsum.photos/seed/cover1/800/200',
    connections: 500,
    location: 'San Francisco, CA',
    summary: 'Experienced software engineer with a passion for building scalable web applications. Skilled in React, TypeScript, and Node.js.'
  },
  {
    id: '2',
    firstName: 'John',
    lastName: 'Smith',
    headline: 'Product Manager at Innovate Inc.',
    avatarUrl: 'https://picsum.photos/seed/user2/200/200',
    coverPhotoUrl: 'https://picsum.photos/seed/cover2/800/200',
    connections: 1250,
    location: 'New York, NY',
    summary: 'Product leader focused on user-centric design and data-driven decisions. Bringing innovative products to market.'
  },
  {
    id: '3',
    firstName: 'Emily',
    lastName: 'Jones',
    headline: 'UX Designer at Creative Solutions',
    avatarUrl: 'https://picsum.photos/seed/user3/200/200',
    coverPhotoUrl: 'https://picsum.photos/seed/cover3/800/200',
    connections: 320,
    location: 'Austin, TX',
    summary: 'Creating beautiful and intuitive user experiences. Passionate about design systems and accessibility.'
  },
  {
    id: '4',
    firstName: 'Michael',
    lastName: 'Brown',
    headline: 'Marketing Director at Growth Co.',
    avatarUrl: 'https://picsum.photos/seed/user4/200/200',
    coverPhotoUrl: 'https://picsum.photos/seed/cover4/800/200',
    connections: 2500,
    location: 'Chicago, IL',
    summary: 'Data-driven marketing leader with experience in scaling SaaS companies.'
  },
   {
    id: '5',
    firstName: 'Sarah',
    lastName: 'Chen',
    headline: 'VP of Engineering at DataDriven',
    avatarUrl: 'https://picsum.photos/seed/user5/200/200',
    coverPhotoUrl: 'https://picsum.photos/seed/cover5/800/200',
    connections: 3000,
    location: 'Seattle, WA',
    summary: 'Engineering leader passionate about building high-performing teams and scalable systems.'
  },
  {
    id: '6',
    firstName: 'David',
    lastName: 'Rodriguez',
    headline: 'Data Scientist at Analytics Firm',
    avatarUrl: 'https://picsum.photos/seed/user6/200/200',
    coverPhotoUrl: 'https://picsum.photos/seed/cover6/800/200',
    connections: 800,
    location: 'Boston, MA',
    summary: 'Specializing in machine learning and statistical analysis to drive business insights.'
  }
];

export const currentUser = users[0];

export const connections: User[] = [users[1], users[2]];

export const comments: Comment[] = [
    { id: 'c1', author: users[1], content: 'Great insights, Jane!', timestamp: '2h ago' },
    { id: 'c2', author: users[2], content: 'Thanks for sharing this.', timestamp: '1h ago' },
];

export const posts: Post[] = [
  {
    id: 'p1',
    author: users[1],
    content: "Excited to share that our team at Innovate Inc. just launched a new feature that will revolutionize how users interact with our platform. Big thanks to everyone involved in this massive effort! #productlaunch #innovation #tech",
    imageUrl: 'https://picsum.photos/seed/post1/600/400',
    likes: 128,
    comments: comments,
    timestamp: '1d ago',
  },
  {
    id: 'p2',
    author: users[2],
    content: "Just published a new article on the principles of user-centric design. Check it out on my blog! I'd love to hear your thoughts. #uxdesign #uxtips #designthinking",
    likes: 72,
    comments: [{ id: 'c3', author: users[0], content: 'Amazing article, Emily!', timestamp: '5h ago' }],
    timestamp: '3d ago',
  },
  {
    id: 'p3',
    author: users[0],
    content: "Reflecting on the challenges and successes of building a large-scale microservices architecture. It's a journey of continuous learning and improvement. What are your biggest takeaways from working with microservices? #softwareengineering #react #typescript",
    imageUrl: 'https://picsum.photos/seed/post3/600/400',
    likes: 250,
    comments: [],
    timestamp: '5d ago',
  }
];

export const companies: Company[] = [
    { id: 'c1', name: 'TechCorp', tagline: 'Building the Future of Technology', logoUrl: 'https://picsum.photos/seed/comp1/50/50' },
    { id: 'c2', name: 'Innovate Inc.', tagline: 'Driving Innovation Forward', logoUrl: 'https://picsum.photos/seed/comp2/50/50' },
    { id: 'c3', name: 'Creative Solutions', tagline: 'Design That Inspires', logoUrl: 'https://picsum.photos/seed/comp3/50/50' },
];

export const jobs: Job[] = [
  {
    id: 'j1',
    title: 'Frontend Developer',
    company: companies[0],
    location: 'Remote',
    type: 'Full-time',
    postedDate: '2w ago',
    description: 'TechCorp is looking for a skilled Frontend Developer to join our dynamic team. You will be responsible for building and maintaining our web applications using React and TypeScript.',
    isSaved: false,
  },
  {
    id: 'j2',
    title: 'Senior Product Manager',
    company: companies[1],
    location: 'New York, NY',
    type: 'Full-time',
    postedDate: '1d ago',
    description: 'Innovate Inc. seeks an experienced Senior Product Manager to lead the development of our next-generation products. Strong leadership and communication skills are a must.',
    isSaved: false,
  },
  {
    id: 'j3',
    title: 'UX/UI Designer',
    company: companies[2],
    location: 'Austin, TX',
    type: 'Contract',
    postedDate: '5d ago',
    description: 'Creative Solutions has an opening for a talented UX/UI Designer on a contract basis. You will work on a variety of projects, from mobile apps to large-scale websites.',
    isSaved: false,
  }
];

export const conversations: Conversation[] = [
  {
    id: 'conv1',
    participants: [users[0], users[1]],
    messages: [
      { id: 'm1', sender: users[1], content: 'Hey Jane, saw your post on microservices. Great stuff!', timestamp: '1d ago' },
      { id: 'm2', sender: users[0], content: 'Thanks, John! Appreciate you checking it out.', timestamp: '23h ago' },
    ]
  },
  {
    id: 'conv2',
    participants: [users[0], users[2]],
    messages: [
      { id: 'm3', sender: users[2], content: 'Hi Jane, I had a question about the design system.', timestamp: '2d ago' },
    ]
  },
];

export const notifications: Notification[] = [
  {
    id: 'n1',
    type: 'like',
    user: users[1],
    post: posts[2],
    message: 'John Smith liked your post.',
    timestamp: '3h ago',
    read: false,
  },
  {
    id: 'n2',
    type: 'comment',
    user: users[2],
    post: posts[0],
    message: 'Emily Jones commented on a post you\'re following.',
    timestamp: '1d ago',
    read: false,
  },
  {
    id: 'n3',
    type: 'invitation',
    user: users[2],
    message: 'Emily Jones sent you a connection request.',
    timestamp: '2d ago',
    read: true,
  },
   {
    id: 'n4',
    type: 'job',
    job: jobs[0],
    user: users[0],
    message: 'A new job matching your profile: Frontend Developer at TechCorp.',
    timestamp: '3d ago',
    read: true,
  }
];

export const experiences: Experience[] = [
    { id: 'e1', title: 'Senior Software Engineer', companyName: 'TechCorp', companyLogoUrl: companies[0].logoUrl, startDate: 'Jan 2022', endDate: null, description: 'Developing and maintaining core features of the main product using React, TypeScript, and a microservices architecture.' },
    { id: 'e2', title: 'Software Engineer', companyName: 'Web Solutions LLC', companyLogoUrl: 'https://picsum.photos/seed/comp4/50/50', startDate: 'Jun 2019', endDate: 'Dec 2021', description: 'Built client websites and internal tools. Gained expertise in full-stack development.' },
];

export const education: Education[] = [
    { id: 'ed1', schoolName: 'State University', degree: 'Master of Science', fieldOfStudy: 'Computer Science', startDate: '2017', endDate: '2019' },
    { id: 'ed2', schoolName: 'Tech Institute', degree: 'Bachelor of Science', fieldOfStudy: 'Software Engineering', startDate: '2013', endDate: '2017' },
];

export const invitations: ConnectionInvitation[] = [
    { id: 'inv1', fromUser: users[2], mutualConnections: 12 },
    { id: 'inv2', fromUser: { ...users[3] }, mutualConnections: 5 },
];

export const mentors: Mentor[] = [
  {
    ...users[1],
    expertise: ['Product Management', 'Agile Methodologies', 'Go-to-Market Strategy'],
    isRequested: false,
  },
  {
    ...users[2],
    expertise: ['UX/UI Design', 'Design Systems', 'User Research'],
    isRequested: false,
  },
  {
    ...users[3],
    expertise: ['Digital Marketing', 'SEO', 'Content Strategy', 'Team Leadership'],
    isRequested: false,
  },
   {
    ...users[4],
    expertise: ['Software Architecture', 'Team Leadership', 'Career Growth', 'Cloud Computing'],
    isRequested: false,
  }
];

export const groups: Group[] = [
  {
    id: 'g1',
    name: 'React Developers',
    description: 'A community for developers passionate about React.js and its ecosystem. Share knowledge, ask questions, and connect with fellow developers.',
    bannerUrl: 'https://picsum.photos/seed/group1/800/200',
    avatarUrl: 'https://picsum.photos/seed/gavatar1/100/100',
    memberCount: 15000,
    isMember: true,
  },
  {
    id: 'g2',
    name: 'UI/UX Designers Hub',
    description: 'For all things UI/UX. Discuss trends, share portfolios, get feedback, and find inspiration.',
    bannerUrl: 'https://picsum.photos/seed/group2/800/200',
    avatarUrl: 'https://picsum.photos/seed/gavatar2/100/100',
    memberCount: 22000,
    isMember: false,
  },
  {
    id: 'g3',
    name: 'Product Management Masters',
    description: 'A group for product managers to discuss strategy, roadmap planning, and leadership.',
    bannerUrl: 'https://picsum.photos/seed/group3/800/200',
    avatarUrl: 'https://picsum.photos/seed/gavatar3/100/100',
    memberCount: 8000,
    isMember: true,
  },
];

export const groupPosts: { [key: string]: Post[] } = {
  'g1': [
    {
      id: 'gp1',
      author: users[0],
      content: "What's everyone's favorite state management library for React in 2024? Still Redux, or has something else taken the lead for you?",
      likes: 45,
      comments: [],
      timestamp: '2h ago',
    },
  ],
  'g3': [
     {
      id: 'gp2',
      author: users[1],
      content: "Just finished a great book on product strategy. 'Good Strategy/Bad Strategy' by Richard Rumelt. Highly recommend it to any PMs out there.",
      likes: 88,
      comments: [],
      timestamp: '1d ago',
    },
  ],
};