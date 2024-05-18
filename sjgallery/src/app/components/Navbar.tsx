import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/contact">
          Contact
        </Link>
      </div>
      <div className="logo">
        <Link href="/about">
          About
        </Link>
      </div>
      <div className="logo">
        <Link href="/artists">
          Artists
        </Link>
      </div>
    </div>
  )
}

export default Navbar;