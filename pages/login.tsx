import { useAuth } from '../lib/auth';
import { useRouter } from 'next/router';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { useState } from 'react';

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      login();
      router.push('/dashboard');
    }, 800);
  };

  return (
    <div className="max-w-sm mx-auto space-y-4">
      <h1 className="text-xl font-bold">Login</h1>
      <Input placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button onClick={handleLogin} disabled={loading} className="w-full">
        {loading ? 'Loading...' : 'Sign in'}
      </Button>
    </div>
  );
}
