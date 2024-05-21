import Link from "next/link";

const Navbar = () => {
  
  return (
    <div className="nav-container">
      <div style={{ display: "flex", paddingTop: "10px"}}>
        <h2>SARAH JANKO GALLERY</h2>
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