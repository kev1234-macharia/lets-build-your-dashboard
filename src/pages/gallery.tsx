import { useNuggets } from '../hooks/use-nuggets';
import { GalleryCard } from '../components/gallery-card';
import { Layout } from '../components/layout';
import { ImageIcon } from 'lucide-react';

export default function Gallery() {
  const { nuggets } = useNuggets();
  const galleryNuggets = nuggets.filter(n => n.imageUrl);

  return (
    <Layout>
      <div className="space-y-12">
        <header className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400">
            <ImageIcon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight">Visual Nuggets</h1>
          <p className="text-muted-foreground max-w-md">
            A visual journey through moments of inspiration and thought.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryNuggets.length === 0 ? (
            <div className="col-span-full text-center py-20 border-2 border-dashed border-border rounded-2xl">
              <p className="text-muted-foreground">No images found in your nuggets.</p>
            </div>
          ) : (
            galleryNuggets.map((nugget) => (
              <GalleryCard key={nugget.id} nugget={nugget} />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
}