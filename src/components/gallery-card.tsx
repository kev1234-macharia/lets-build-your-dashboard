import { Nugget } from '../types';
import { motion } from 'framer-motion';

interface GalleryCardProps {
  nugget: Nugget;
}

export function GalleryCard({ nugget }: GalleryCardProps) {
  if (!nugget.imageUrl) return null;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <img
        src={nugget.imageUrl}
        alt={nugget.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h4 className="text-white font-bold text-lg">{nugget.title}</h4>
        <p className="text-white/80 text-sm line-clamp-1">{nugget.content}</p>
      </div>
    </motion.div>
  );
}