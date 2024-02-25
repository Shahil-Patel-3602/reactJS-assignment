import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className="left-section">
        <input type="text" className='search-box' />
      </div>

      <div className="right-section">
        <ul className='menu-options'>
          <li className='menu-option'>Categories</li>
          <li className='menu-option'>Website Builder</li>
          <li className='menu-option'>Today&apos;s Deals</li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar