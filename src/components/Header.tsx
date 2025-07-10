import { NavLink } from 'react-router';

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' },
  { to: '/movies/tt27641028', label: 'tt27641028' },
  { to: '/signin', label: 'Sign In' }
];

export default function Header() {
  return (
    <header>
      <nav className="flex items-center gap-4">
        {navigations.map(nav => {
          return (
            <NavLink
              key={nav.to}
              to={nav.to}
              end={true}
              className={({ isActive }) =>
                isActive ? 'text-red-500' : 'text-black'
              }>
              {nav.label}
            </NavLink>
          );
        })}
      </nav>
    </header>
  );
}
