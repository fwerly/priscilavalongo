export interface NavItem {
  label: string;
  href: string;
}

export interface ClassItem {
  title: string;
  description: string;
  image: string;
  intensity: 'Baixa' | 'Média' | 'Alta';
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Instructor {
  name: string;
  role: string;
  bio: string;
  image: string;
}
