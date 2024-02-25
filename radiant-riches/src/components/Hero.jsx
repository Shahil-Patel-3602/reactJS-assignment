import './Hero.css'
import Offers from './Offers'
import lastUpdated from '../images/last-updated.png'
import topRelevant from '../images/top-relevant.png'
import Advertisement from '../images/advertising-disclosure.png'

const Hero = () => {
  return (
    <div className='main-page'>

      {/* The line that Best Builders of website will be written here */}
      <div className="heading-line">
        <h1>Best Website builders in the US</h1>
      </div>

      {/* The last updated etc. data will be written here */}
      <div className="metaData">
        <div className="left-metaData">
          <div className="last-updated">
            <img src={lastUpdated} alt="" />
            <p>Last Updated - February 22, 2020</p>
          </div>
          <div className="advertisement">
            <img src={Advertisement} alt="" />
            <p>Advertisement Disclosure</p>
          </div>
        </div>

        <div className="right-metaData">
          <p>Top Relevant</p>
          <img src={topRelevant} alt="" />
        </div>
      </div>
      
      {/* The small buttons of: Tools, AWS Builder, etc. will be placed here */}
      <div className="buildOptions">
        <button className="buildOption">Tools</button>
        <button className="buildOption">AWS Builder</button>
        <button className="buildOption">Start Build</button>
        <button className="buildOption">Build Supplies</button>
        <button className="buildOption">Tooling</button>
        <button className="buildOption">BlueHosting</button>
      </div>

      <div className="hostingProcess">
        <p>Home &gt; Hosting for all &gt; Hosting &gt; Hosting6 &gt; Hosting5</p>
      </div>

      <div className="Offers">
        <Offers />
      </div>

    </div>
  )
}

export default Hero