const LINKS = [
  { href: '#rooms', label: 'Rooms' },
  { href: '#breakfast', label: 'Breakfast' },
  { href: '#garden', label: 'Garden' },
  { href: '#rates', label: 'Rates' },
  { href: '#book', label: 'Find us' },
]

export function Header() {
  return (
    <header className="header wrap">
      <a className="wordmark" href="#top" aria-label="Gesserts Guesthouse, back to top">
        <span className="wordmark__name">Gesserts</span>
        <span className="wordmark__place">Pension · Keetmanshoop</span>
      </a>
      <nav className="nav" aria-label="Main">
        <ul className="nav__list">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a className="nav__link" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a className="btn btn--light" href="#book">
          Book a stay
        </a>
      </nav>
    </header>
  )
}
