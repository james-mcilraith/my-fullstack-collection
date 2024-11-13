import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>The Worlds Most Famous Trees</h1>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/add">Add Tree</Link>
    </nav>
  </header>
)

export default Header
