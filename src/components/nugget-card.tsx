import { Nugget } from '../types';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { formatDistanceToNow } from 'date-fns';
import { motion } from 'framer-motion';

interface NuggetCardProps {
  nugget: Nugget;
}

const categoryColors = {
  inspiration: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400',
  thought: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
  life: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400',
  work: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  other: 'bg-slate-100 text-slate-800 dark:bg-slate-900/30 dark:text-slate-400',
};

export function NuggetCard({ nugget }: NuggetCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <Card className="overflow-hidden border-border/40 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow">
        {nugget.imageUrl && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={nugget.imageUrl} 
              alt={nugget.title} 
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}
        <CardHeader className="p-6 pb-2">
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary" className={`${categoryColors[nugget.category]} border-none font-medium`}>
              {nugget.category}
            </Badge>
            <span className="text-xs text-muted-foreground">
              {formatDistanceToNow(new Date(nugget.createdAt), { addSuffix: true })}
            </span>
          </div>
          <h3 className="text-xl font-semibold tracking-tight">{nugget.title}</h3>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <p className="text-muted-foreground leading-relaxed whitespace-pre-wrap">
            {nugget.content}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}