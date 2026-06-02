export type NuggetCategory = 'inspiration' | 'thought' | 'life' | 'work' | 'other';

export interface Nugget {
  id: string;
  title: string;
  content: string;
  imageUrl?: string;
  category: NuggetCategory;
  createdAt: string;
  isGallery?: boolean;
}