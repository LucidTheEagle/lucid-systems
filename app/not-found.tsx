import Link from "next/link";
export default function NotFound() {
    return (
      <div className="min-h-screen bg-obsidian flex items-center justify-center">
        <div className="text-center space-y-6">
          <p className="text-lucid font-mono text-sm uppercase tracking-widest">
            &gt; SIGNAL_LOST
          </p>
          <h1 className="text-ancient text-4xl md:text-6xl font-bold uppercase tracking-[0.15em] text-alabaster">
            404
          </h1>
          <p className="text-granite font-mono text-sm">
            The coordinates you seek do not exist.
          </p>
          <Link 
            href="/"
            className="inline-block mt-8 px-6 py-3 border border-lucid text-lucid hover:bg-lucid hover:text-obsidian transition-all duration-300 font-mono text-sm uppercase tracking-widest"
          >
            [RETURN_TO_BASE]
          </Link>
        </div>
      </div>
    );
  }