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
  const resolevedPath = useResolvedPath(path)
  const isActive = useMatch({ path: resolevedPath.pathname, end: true })
  return (
    <li ClassName={isActive ? "active" : ""}>
      <Link to={to} {...props}>{children}</Link>
    </li>
  )
}
