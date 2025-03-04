import { Outlet, NavLink } from "react-router";

function MainLayout() {
  return (
    <div className="container">
      <header className="header">
        <img src="teamBlogo.png" alt="Logo" className="logo" />
      </header>
      <div className="content">
        <nav className="sidebar">
          <ul>
          <li><NavLink to='/' >Home</NavLink></li>
          <li><NavLink to='/products' >Products</NavLink></li>
            <li><NavLink to='/about' >About</NavLink></li>
            <li><NavLink to='/contact' >Contact</NavLink></li>
          </ul>
        </nav>
        <main className="main-content">
          <Outlet />
        </main>
      </div>
      <footer className="footer">
        <p>&copy; 2024 Team B. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default MainLayout;
