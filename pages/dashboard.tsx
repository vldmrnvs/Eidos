import { useEffect, useState } from 'react';
import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import componentsData from '../data/baseComponents.json';
import { Card } from '../components/ui/Card';
import { SkeletonLoader } from '../components/ui/SkeletonLoader';
import { Button } from '../components/ui/Button';

export default function Dashboard() {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="space-y-4">
        <p>You must be logged in to view the dashboard.</p>
        <Button onClick={() => router.push('/login')}>Go to Login</Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <Button variant="secondary" onClick={logout}>Logout</Button>
      </div>
      {loading ? (
        <SkeletonLoader className="h-40" />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {componentsData.slice(0,6).map((c) => (
            <Card key={c.name}>
              <h3 className="font-semibold">{c.name}</h3>
              <p className="text-sm text-gray-600">{c.description}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
