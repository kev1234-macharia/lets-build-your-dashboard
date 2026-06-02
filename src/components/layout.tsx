import { ReactNode } from 'react';
import { NavLink } from 'react-router';
import { Home, Image, LayoutDashboard, Twitter, Github, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-[#0a0a0a] text-foreground transition-colors duration-300">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-border/40">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <NavLink to="/" className="text-xl font-bold tracking-tight bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            Nuggets.
          </NavLink>
          
          <div className="flex items-center gap-6">
            <NavLink to="/" className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline">Feed</span>
            </NavLink>
            <NavLink to="/gallery" className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              <Image className="w-4 h-4" />
              <span className="hidden sm:inline">Gallery</span>
            </NavLink>
            <NavLink to="/dashboard" className={({ isActive }) => `flex items-center gap-2 text-sm font-medium transition-colors ${isActive ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
              <LayoutDashboard className="w-4 h-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 min-h-[calc(100-128px)]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-white dark:bg-black py-12">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-8">
          <div className="flex gap-6">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-blue-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-pink-500 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Daily Nuggets. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}