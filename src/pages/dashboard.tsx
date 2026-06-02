import { useState } from 'react';
import { useNuggets } from '../hooks/use-nuggets';
import { Layout } from '../components/layout';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { NuggetCategory } from '../types';
import { toast } from 'sonner';
import { Trash2, Plus, LogIn, X } from 'lucide-react';

export default function Dashboard() {
  const { nuggets, addNugget, deleteNugget } = useNuggets();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState<NuggetCategory>('inspiration');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'nugget2025') {
      setIsAuthenticated(true);
      toast.success('Welcome back, Admin!');
    } else {
      toast.error('Incorrect access key.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) {
      toast.error('Please fill in title and content.');
      return;
    }
    addNugget({
      title,
      content,
      imageUrl: imageUrl || undefined,
      category,
      isGallery: !!imageUrl
    });
    toast.success('Nugget posted successfully!');
    setTitle('');
    setContent('');
    setImageUrl('');
    setCategory('inspiration');
  };

  if (!isAuthenticated) {
    return (
      <Layout>
        <div className="max-w-md mx-auto py-20">
          <Card className="border-border/40 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <LogIn className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>Admin Access</CardTitle>
              <CardDescription>Enter your secret key to manage nuggets.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <Input
                  type="password"
                  placeholder="Enter key (hint: nugget2025)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-background/50"
                />
                <Button type="submit" className="w-full">
                  Access Dashboard
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="space-y-12">
        <header className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your daily nuggets and feed.</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => setIsAuthenticated(false)}>
            <X className="w-4 h-4 mr-2" /> Logout
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Create Form */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 border-border/40">
              <CardHeader>
                <CardTitle className="text-lg">New Nugget</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Title</label>
                    <Input 
                      placeholder="Catchy title..." 
                      value={title} 
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Content</label>
                    <Textarea 
                      placeholder="Share your thought..." 
                      className="min-h-[120px]"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Image URL (Optional)</label>
                    <Input 
                      placeholder="https://..." 
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Category</label>
                    <Select value={category} onValueChange={(val: NuggetCategory) => setCategory(val)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inspiration">Inspiration</SelectItem>
                        <SelectItem value="thought">Thought</SelectItem>
                        <SelectItem value="life">Life</SelectItem>
                        <SelectItem value="work">Work</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button type="submit" className="w-full">
                    <Plus className="w-4 h-4 mr-2" /> Post Nugget
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* List/Manage */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-semibold text-lg flex items-center gap-2">
              Your Nuggets <span className="bg-muted px-2 py-0.5 rounded text-xs font-mono">{nuggets.length}</span>
            </h3>
            <div className="space-y-3">
              {nuggets.map((nugget) => (
                <div key={nugget.id} className="flex items-center justify-between p-4 bg-white dark:bg-card/50 border border-border/40 rounded-xl group">
                  <div className="flex items-center gap-4">
                    {nugget.imageUrl && (
                      <img src={nugget.imageUrl} alt="" className="w-12 h-12 rounded-lg object-cover" />
                    )}
                    <div>
                      <h4 className="font-medium text-sm">{nugget.title}</h4>
                      <p className="text-xs text-muted-foreground line-clamp-1">{nugget.content}</p>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-destructive opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => {
                      deleteNugget(nugget.id);
                      toast.info('Nugget removed.');
                    }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}