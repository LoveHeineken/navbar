import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
  return (
    <nav ClassName="nav">
      <Link to="/" class="site-title">Site Name</Link>
      <ul>
        <CustomeLink to="pricing">Pricing</CustomeLink>
        <CustomeLink to="/about">About</CustomeLink>
      </ul>
    </nav>
  )
}

function CustomeLink({ to, children, ...props }) {
  useResolvedPath
  const path = window.location.pathname
  if (path === to)
    return (
      <li ClassName={path === to ? "active" : ""}>
        <Link to={to} {...props}>{children}</Link>
      </li>
    )
}
