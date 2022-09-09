import "bulma/css/bulma.min.css";

const Navbar = () => {
  return (
    <nav
      className="navbar is-warning is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Purrfect Pet Shop
        </a>
      </div>

      <div className="navbar-menu has-dropdown is-active">
        <a className="navbar-item" href="/costumes">
          Costumes
        </a>
        <a className="navbar-item" href="/accessories">
          Accessories
        </a>
        <a className="navbar-item" href="/toys">
          Toys
        </a>
        <a className="navbar-item" href="/towers">
          Towers
        </a>

        <a className="navbar-item navbar-end" href="/signup">
          Sign up!
        </a>
        <a className="navbar-item" href="/login">
          Login
        </a>
        <a className="navbar-item" href="/account">
          Your Account
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
