export interface Post {
  id: number;
  title: string;
  content: string;
  date: Date;
  author: string;
  category: string;
  imageUrl?: string;
}
