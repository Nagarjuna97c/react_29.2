import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div>
    <Link to="/" className="link">
      Home
    </Link>
    <Link to="/about" className="link">
      About
    </Link>
  </div>
)

export default Header
