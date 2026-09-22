import { useState } from 'react';
import Title from './Title';

function Me() {
  const [showFullText, setShowFullText] = useState(false);

  return (
    <div className="rounded-md p-5 sm:p-6 col-span-2 border border-secondary-800 bg-secondary-900/90">
      <Title title="About Me" />

      <div className="space-y-3.5 text-secondary-300 text-sm sm:text-base leading-relaxed">
        <p>
          I am <strong className="text-secondary-100 font-semibold">Henok Emyaye</strong>, a full-stack developer with 3+ years of experience specializing in building responsive, scalable web applications with React, Next.js, TypeScript, and modern CSS.
        </p>

        {showFullText && (
          <div className="space-y-3.5 pt-1">
            <p>
              On the frontend, I create fast and intuitive interfaces using Tailwind CSS, Shadcn UI, and state management tools. On the backend, I build RESTful APIs with Node.js, Express, and NestJS connected to MongoDB and SQL databases.
            </p>
            <p>
              I work with international clients and teams, maintaining clean code standards, git workflow, and end-to-end performance optimization.
            </p>
          </div>
        )}

        <button
          onClick={() => setShowFullText(!showFullText)}
          className="text-primary-500 hover:text-primary-400 font-semibold text-sm pt-1.5 transition-colors block"
        >
          {showFullText ? 'Show Less ↑' : 'Read More ↓'}
        </button>
      </div>
    </div>
  );
}

export default Me;


