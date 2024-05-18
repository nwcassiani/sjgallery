import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <h2>SARAH JANKO GALLERY</h2>
      <div style={{ display: "flex"}}>
        <div style={{ margin: "0 auto"}}>
          <Link className="nav-link" href="/artists">
            Artists
          </Link>
          <Link className="nav-link" href="/contact">
            Contact
          </Link>
          <Link className="nav-link" href="/about">
            About
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar;