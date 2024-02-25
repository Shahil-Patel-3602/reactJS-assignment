import './Footer.css'
import US from '../images/united-states-footer.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className="categories">
            <h2>CATEGORIES</h2>
            <ul>
              <li>Web Builder</li>
              <li>Hosting</li>
              <li>Data Center</li>
              <li>Robotic-Automation</li>
            </ul>
        </div>

        <div className="contact">
          <h2>CONTACT</h2>
            <ul>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
              <li>Categories</li>
              <li>About</li>
            </ul>
        </div>

        <div className="dropDown">
            <p>United States</p>
            <img src={US} alt="" />
        </div>

    </div>
  )
}

export default Footer