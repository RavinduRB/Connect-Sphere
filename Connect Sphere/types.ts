export interface User {
  id: string;
  firstName: string;
  lastName: string;
  headline: string;
  avatarUrl: string;
  coverPhotoUrl: string;
  connections: number;
  location: string;
  summary: string;
}

export interface Mentor extends User {
  expertise: string[];
  isRequested?: boolean;
}

export interface Experience {
  id: string;
  title: string;
  companyName: string;
  companyLogoUrl: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export interface Education {
  id: string;
  schoolName: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
}

export interface Post {
  id: string;
  author: User;
  content: string;
  imageUrl?: string;
  likes: number;
  comments: Comment[];
  timestamp: string;
  isLikedByUser?: boolean;
}

export interface Comment {
  id:string;
  author: User;
  content: string;
  timestamp: string;
}

export interface Company {
  id: string;
  name: string;
  tagline: string;
  logoUrl: string;
}

export interface Job {
  id: string;
  title: string;
  company: Company;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
  postedDate: string;
  description: string;
  isSaved?: boolean;
}

export interface Message {
  id: string;
  sender: User;
  content: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  participants: User[];
  messages: Message[];
}

export interface Notification {
  id: string;
  type: 'like' | 'comment' | 'invitation' | 'job';
  user: User;
  post?: Post;
  job?: Job;
  message: string;
  timestamp: string;
  read: boolean;
}

export interface ConnectionInvitation {
  id: string;
  fromUser: User;
  mutualConnections: number;
}

export interface Group {
  id: string;
  name: string;
  description: string;
  bannerUrl: string;
  avatarUrl: string;
  memberCount: number;
  isMember?: boolean;
}