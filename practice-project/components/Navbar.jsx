import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm px-3">
      <Link className="navbar-brand fw-bold" href="/">
        MySite
      </Link>

      <div className="navbar-nav ms-auto">
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/about">About</Link>
        <Link className="nav-link" href="/services">Services</Link>
        <Link className="nav-link" href="/contact">Contact</Link>
      </div>
    </nav>
  );
}