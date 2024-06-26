import Link from "next/link";

const Navbar = () => {
  
  return (
    <div className="nav-container">
      <div style={{ display: "flex" }}>
        <h2><a href="/" >SARAH JANKO GALLERY</a></h2>
      </div>
      <div className="nav-links">
          <Link href="/artists">
            Artists
          </Link>
          <Link href="/contact">
            Contact
          </Link>
          <Link href="/about">
            About
          </Link>
      </div>
    </div>
  )
}

export default Navbar;