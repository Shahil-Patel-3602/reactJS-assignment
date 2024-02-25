import './Offers.css'
// import the image from the images folder
import computer from '../images/computer.png'
import starImagex from '../images/star-rating.png'
import starImagey from '../images/9-5-star-rating.png'
import starImagez from '../images/9-3-star-rating.png'
import starImageLast from '../images/9-1-star-rating.png'
import documentation from '../images/documentation.png'

const Offers = () => {
  return (
    <div>
        {/* The First Offer */}
        <div className="offer-1">
            <div className="builder-image-left">
                <img src={computer} alt="" />
            </div>
            {/* The text information */}
            <div className="main-text">
                <div className="firstText">
                    <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                </div>

                <div className="mainHighlights">
                    <b>Main highlights</b>

                    <div className="highlightText">
                        <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.</p>
                    </div>

                </div>

                <div className="showMore">
                    <p>Show More!</p>
                </div>
            </div>

            {/* The Rating and view box*/}
            <div className="ratingBox">
                <div className="rating">
                    <div className="score">
                        9.8
                    </div>
                    <div className="exceptional">
                        Exceptional
                    </div>
                    <div className="stars">
                        <img src={starImagex} alt="" />
                    </div>
                </div>
                <div className="views">
                    <button>Views</button>
                </div>
            </div>

        </div>

        {/* The second offer */}
        <div className="offer-2">
            <div className="builder-image-left">
                <img src={computer} alt="" />
            </div>
            {/* The text information */}
            <div className="main-text">
                <div className="firstText">
                    <b>SiteCraft 68-Inch Ultimate Web Design Studio</b>- Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)
                </div>

                <div className="mainHighlights">
                    <b>Main highlights</b>

                    <div className="highlightText">
                        <p>[What You Get]: Gain access to the SiteCraft design studio, featuring a robust <br/>selection of design elements, SEO optimization tools, and e-commerce integrations.</p>
                    </div>
                </div>

                <div className="showMore">
                    <p>Show More!</p>
                </div>
            </div>

            {/* The Rating and view box*/}
            <div className="ratingBox">
                <div className="rating">
                    <div className="score">
                        9.5
                    </div>
                    <div className="exceptional">
                        Exceptional
                    </div>
                    <div className="stars">
                        <img src={starImagey} alt="" />
                    </div>
                </div>
                <div className="views">
                    <button>Views</button>
                </div>
            </div>
        </div>

        {/* The third offer */}
        <div className="offer-3">
            <div className="builder-image-left">
                <img src={computer} alt="" />
            </div>
            {/* The text information */}
            <div className="main-text">
                <div className="firstText">
                    <b>WixPro 72-Inch Responsive Website Builder</b>- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)
                </div>

                <div className="mainHighlights">
                    <b>Main highlights</b>

                    <div className="highlightText">
                        <p>[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.
                        </p>
                    </div>
                </div>

                <div className="showMore">
                    <p>Show More!</p>
                </div>
            </div>

            {/* The Rating and view box*/}
            <div className="ratingBox">
                <div className="rating">

                    <div className="score">
                        9.3
                    </div>
                    <div className="exceptional">
                        Exceptional
                    </div>
                    <div className="stars">
                        <img src={starImagez} alt="" />
                    </div>

                </div>
                <div className="views">
                    <button>Views</button>
                </div>
            </div>
        </div>

        {/* The fourth offer */}
        <div className="offer-4">
            <div className="builder-image-left">
                <img src={computer} alt="" />
            </div>
            {/* The text information */}
            <div className="main-text">
                <div className="firstText">
                    <text><b>CDK Responsive Builder</b>: An extensive library of widgets and apps, and detailed step-by-step guides.</text>
                    
                    <button>26%off</button>
                </div>

                <div className="mainHighlights">
                    <b>Main highlights</b>

                    <div className="highlightText-special">
                        <div className="randomNums">
                            <button>9.9</button>
                            <h3>Building Responsive</h3>
                        </div>
                        <div className="randomNums">
                            <button>8.9</button>
                            <h3>Cool</h3>
                        </div>
                        <div className="randomNums">
                            <button>8.9</button>
                            <h3>Docs</h3>
                        </div>
                    </div>

                </div>

                <div className="loveIt">
                    <h3>Why we love it</h3>

                    <div className="reasons">
                        <img src={documentation} alt="" />
                        <h4>Documention</h4>
                    </div>
                    <div className="reasons">
                        <img src={documentation} alt="" />
                        <h4>Easy Use</h4>
                    </div>
                    <div className="reasons">
                        <img src={documentation} alt="" />
                        <h4>Out of box</h4>
                    </div>
                </div>

                <div className="showMore">
                    <p>Show More!</p>
                </div>
            </div>

            {/* The Rating and view box*/}
            <div className="ratingBox">
                <div className="rating">
                    <div className="score">
                        9.1
                    </div>
                    <div className="exceptional">
                        Exceptional
                    </div>
                    <div className="stars">
                        <img src={starImageLast} alt="" />
                    </div>
                </div>
                <div className="views">
                    <button>Views</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Offers