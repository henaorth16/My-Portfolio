import { useNavigate, Link } from 'react-router-dom';

function Nav() {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 pointer-events-none">
      {/* Brand */}
      <Link
        to="/"
        className="pointer-events-auto text-secondary-200 hover:text-white font-heading font-black text-xl tracking-wider transition-colors"
      >
        HENOK<span className="text-primary-500">.</span>
      </Link>

      {/* Action CTA */}
      <button
        onClick={() => navigate('/contact')}
        className="pointer-events-auto px-5 py-2 text-sm font-semibold font-heading text-secondary-100 bg-secondary-900/90 hover:bg-primary-600 hover:text-white border border-secondary-700/80 hover:border-primary-500 rounded-md transition-all active:scale-95"
      >
        Let&apos;s Talk
      </button>
    </header>
  );
}

export default Nav;


