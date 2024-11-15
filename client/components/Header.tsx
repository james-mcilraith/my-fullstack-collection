import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>World Famous Trees</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Tree</Link>
    </nav>
  </header>
)

export default Header
