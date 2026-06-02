# Implementation Plan: Modern Daily Nuggets Blog

Build a modern, vibe-coded daily nuggets blog using Vite, React, and Tailwind CSS. The app will feature a public feed, a gallery for images, a simple dashboard for posting, and social links.

## Scope & Non-Goals
- **Scope**: Frontend-only blog with local storage persistence (no server-side database).
- **Features**:
  - Home feed of "daily nuggets" (short text/markdown posts).
  - Gallery view for image-based nuggets.
  - Social media links integration.
  - Admin dashboard (protected by a simple client-side secret/password) to create and delete nuggets.
  - Modern UI with "vibe coding" aesthetics (gradients, glassmorphism, smooth transitions).
- **Non-Goals**:
  - Backend integration (Supabase, Postgres, etc.).
  - Multi-user authentication.
  - Image hosting (will use external URLs or placeholders).

## Assumptions & Open Questions
- **Data Persistence**: Will use `localStorage` to keep posts and images persistent on the user's browser.
- **Vibe Coding**: Interpreted as high-quality UI/UX with modern Tailwind 4 features, smooth animations (Framer Motion if available, or Tailwind transitions), and a cohesive color palette.

## Affected Areas
- `src/App.tsx`: Main routing and layout.
- `src/components/`: New components for Nuggets, Gallery, Dashboard, and Navigation.
- `src/hooks/`: Custom hook for nugget management using `localStorage`.
- `src/index.css`: Global styles and vibe-coding themes.

## Ordered Phases

### Phase 1: Setup & Data Layer (frontend_engineer)
- Define the Nugget and Gallery item data structures.
- Create a `useNuggets` custom hook to manage data in `localStorage`.
- Initialize dummy data for the first visit.
- **Deliverable**: Functional data management hook.

### Phase 2: Core Components & Layout (frontend_engineer)
- Implement a responsive Layout component with a sticky header and footer (social links).
- Create a `NuggetCard` component for the feed.
- Create a `GalleryCard` component for the gallery.
- **Deliverable**: Reusable UI components.

### Phase 3: Public Views (Home & Gallery) (frontend_engineer)
- Build the Home page with a feed of nuggets.
- Build the Gallery page with a grid layout.
- Apply modern "vibe" styles (glassmorphism, subtle gradients).
- **Deliverable**: Publicly accessible blog feed and gallery.

### Phase 4: Admin Dashboard (frontend_engineer)
- Create a simple dashboard route.
- Implement a form to add new nuggets (title, content, image URL, category).
- Add functionality to delete existing nuggets.
- Add a basic "Login" gate (just a prompt for a secret key stored in state).
- **Deliverable**: Management interface for posting.

### Phase 5: Polishing & Socials (quick_fix_engineer)
- Add social media icons and links to the footer/sidebar.
- Final CSS tweaks for the "vibe coding" look.
- Ensure responsive design works on mobile.
- **Deliverable**: Polished, complete application.

## Sequencing Constraints
- Phase 1 must precede Phases 3 and 4 as they depend on the data hook.
- Phase 5 is for final touches once functionality is stable.
