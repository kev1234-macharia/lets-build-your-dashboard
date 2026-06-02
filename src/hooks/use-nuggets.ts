import { useState, useEffect } from 'react';
import { Nugget } from '../types';

const STORAGE_KEY = 'daily_nuggets_data';

const INITIAL_DATA: Nugget[] = [
  {
    id: '1',
    title: 'Morning Inspiration',
    content: 'The early bird catches the worm, but the second mouse gets the cheese. Start your day with a clear mind and a warm heart.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2a9adf13-fc0a-4a90-bd52-ac467c23dbcb/morning-inspiration-b167384d-1780432566509.webp',
    category: 'inspiration',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(),
    isGallery: true,
  },
  {
    id: '2',
    title: 'Coffee Thoughts',
    content: 'Life is like a cup of coffee. It is all about how you make it, but most importantly, how you take it.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2a9adf13-fc0a-4a90-bd52-ac467c23dbcb/coffee-thoughts-9e95474f-1780432566109.webp',
    category: 'thought',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
    isGallery: true,
  },
  {
    id: '3',
    title: 'Deep Work',
    content: 'Focus is a muscle. The more you use it, the stronger it gets. Minimize distractions and dive deep into your craft today.',
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2a9adf13-fc0a-4a90-bd52-ac467c23dbcb/productivity-space-bb8e65ac-1780432566257.webp',
    category: 'work',
    createdAt: new Date().toISOString(),
    isGallery: true,
  },
  {
    id: '4',
    title: 'Abstract Perspective',
    content: "Don't be afraid to see things differently. Sometimes the most beautiful patterns emerge from chaos.",
    imageUrl: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/2a9adf13-fc0a-4a90-bd52-ac467c23dbcb/abstract-vibe-ec1eb2fd-1780432565745.webp',
    category: 'other',
    createdAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    isGallery: true,
  }
];

export function useNuggets() {
  const [nuggets, setNuggets] = useState<Nugget[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setNuggets(JSON.parse(stored));
      } catch (e) {
        setNuggets(INITIAL_DATA);
      }
    } else {
      setNuggets(INITIAL_DATA);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
    }
  }, []);

  const addNugget = (nugget: Omit<Nugget, 'id' | 'createdAt'>) => {
    const newNugget: Nugget = {
      ...nugget,
      id: Math.random().toString(36).substring(2, 11),
      createdAt: new Date().toISOString(),
    };
    const updated = [newNugget, ...nuggets];
    setNuggets(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const deleteNugget = (id: string) => {
    const updated = nuggets.filter((n) => n.id !== id);
    setNuggets(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { nuggets, addNugget, deleteNugget };
}