// components/Layout.tsx
import Nav from './Nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900 bg-white">
      <header className="sticky top-0 z-50 border-b bg-white">
        <Nav />
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t text-center text-sm text-gray-500 py-4">
        © {new Date().getFullYear()} OpenToFeedback. Built with love and Tailwind.
      </footer>
    </div>
  );
}
