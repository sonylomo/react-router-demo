import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      style={{
        display: "flex",
        gap: 12,
        justifyContent: "center",
        color: "orange",
        fontSize: 24,
      }}
    >
      {links.map((item) => (
        <Link key={crypto.randomUUID()} to={item.to}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
