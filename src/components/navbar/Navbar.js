import "./navbar.css";
export default function Navbar() {
  return (
    <nav className="navbar">
      <img src="/logo.png" alt="logo" />
      <div className="nav-actions">
        <button>Docs</button>
        <button>API</button>
      </div>
    </nav>
  );
}
