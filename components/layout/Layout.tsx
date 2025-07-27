import { Header } from '../ui/Header';
import { Sidebar } from '../ui/Sidebar';

export interface LayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
}

export const Layout = ({ children, showSidebar }: LayoutProps) => (
  <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
    <Header />
    <div className="flex flex-1">
      {showSidebar && <Sidebar />}
      <main className="flex-1 p-6">{children}</main>
    </div>
    <footer className="p-4 text-center text-sm text-gray-500 border-t">
      © 2024 Eidos
    </footer>
  </div>
);
