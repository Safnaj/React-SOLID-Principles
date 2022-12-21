import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const headersData = [
  {
    label: "SRP",
    route: "srp",
  },
  {
    label: "OCP",
    route: "ocp",
  },
  {
    label: "LSP",
    route: "lsp",
  },
  {
    label: "ISP",
    route: "isp",
  },
  {
    label: "DIP",
    route: "dip",
  },
];

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo'>React SOLID Principles</div>
      <ul className='nav-links'>
        <div className='menu'>
          {headersData.map(({ label, route }) => {
            return (
              <li key={label}>
                <Link key={label} to={route}>
                  {label}
                </Link>
              </li>
            );
          })}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
