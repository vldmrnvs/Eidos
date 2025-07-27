import RightPanel from '../components/RightPanel';
import Canvas from '../components/Canvas';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <aside className="w-20 bg-base-200 p-4 flex flex-col justify-between">
        <nav className="space-y-4">
          <button className="btn btn-ghost btn-lg" aria-label="Home">🏠</button>
          <button className="btn btn-ghost btn-lg" aria-label="Library">📚</button>
          <button className="btn btn-ghost btn-lg" aria-label="Measure">📏</button>
          <button className="btn btn-ghost btn-lg" aria-label="Settings">⚙️</button>
          <button className="btn btn-ghost btn-lg" aria-label="Projects">🗂️</button>
        </nav>
        <div className="mt-auto">
          <button className="btn btn-ghost" aria-label="API Key">🔑</button>
        </div>
      </aside>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <header className="navbar bg-base-100 border-b border-base-300 justify-between">
          <input
            type="text"
            className="input input-bordered"
            placeholder="Project Name"
          />
          <div className="space-x-2">
            <button className="btn" aria-label="AI Copilot">🤖</button>
            <button className="btn">💾 Export</button>
          </div>
        </header>

        {/* Canvas Area */}
        <Canvas />
        <RightPanel />
      </div>
    </div>
  );
}
