import { useNuggets } from '../hooks/use-nuggets';
import { NuggetCard } from '../components/nugget-card';
import { Layout } from '../components/layout';
import { Sparkles } from 'lucide-react';

export default function Home() {
  const { nuggets } = useNuggets();

  return (
    <Layout>
      <div className="space-y-12">
        <section className="text-center space-y-4 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            Daily Inspiration
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Nuggets of Wisdom for your Daily Life
          </h1>
          <p className="text-lg text-muted-foreground">
            A curated collection of thoughts, reflections, and inspirations to brighten your day and spark your creativity.
          </p>
        </section>

        <section className="grid gap-8">
          {nuggets.length === 0 ? (
            <div className="text-center py-20 border-2 border-dashed border-border rounded-2xl">
              <p className="text-muted-foreground">No nuggets yet. Head to the dashboard to post one!</p>
            </div>
          ) : (
            nuggets.map((nugget) => (
              <NuggetCard key={nugget.id} nugget={nugget} />
            ))
          )}
        </section>
      </div>
    </Layout>
  );
}