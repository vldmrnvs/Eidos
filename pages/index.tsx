import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Modal } from '../components/ui/Modal';
import { Badge } from '../components/ui/Badge';
import { Avatar } from '../components/ui/Avatar';
import { Tooltip } from '../components/ui/Tooltip';
import { SkeletonLoader } from '../components/ui/SkeletonLoader';
import componentsData from '../data/baseComponents.json';

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">UI Components Demo</h1>
      <div className="flex space-x-4">
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <Card className="max-w-md">
        <p className="mb-2">This is a card component with data from /data:</p>
        <ul className="list-disc list-inside text-sm">
          {componentsData.slice(0,3).map((c) => (
            <li key={c.name}>{c.name}</li>
          ))}
        </ul>
      </Card>
      <div className="flex items-center space-x-2">
        <Input placeholder="Type here" className="w-64" />
        <Badge>New</Badge>
        <Tooltip text="User Avatar">
          <Avatar src="https://placekitten.com/100" alt="user" size="sm" />
        </Tooltip>
      </div>
      <div className="w-32 h-8">
        <SkeletonLoader className="h-full" />
      </div>
      <Modal open={open} onClose={() => setOpen(false)} title="Example Modal">
        <p>This modal uses Framer Motion for animations.</p>
      </Modal>
    </div>
  );
}
