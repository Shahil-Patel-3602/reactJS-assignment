import './RelatedDeals.css'
import computer from '../images/computer.png'

const RelatedDeals = () => {
  return (
    <div className='deals'>

        <div className="heading">
            <p>Related Deals you might like for </p>
        </div>

            <div className="deal-details">
                <div className="deals">
                    <div className="dealImage">
                        <img src={computer} alt="" />
                    </div>

                    <div className="dealContent">
                        
                        <span className='deal-offer-1'>20% off</span>
                        <span className='deal-offer-1'>Limited Time</span>
                        
                        <div className="dealDescription">
                            <div className="dealDesc-1">
                                <b>Webbuilder 1</b>
                            </div>

                            <div className="dealDesc-2">
                                <p>Computer  Modern clasic with wix support</p>

                                <div className="ratesDeal">
                                    <span className="dealRate">$39.96</span>
                                    <span className="original-dealRate">$49.96</span>
                                    <span className="discount">(20% off)</span>
                                </div>

                                <div className="dealButton">
                                    <button>View Deal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="deals">
                    <div className="dealImage">
                        <img src={computer} alt="" />
                    </div>

                    <div className="dealContent">
                        
                        <span className='deal-offer-1'>20% off</span>
                        <span className='deal-offer-1'>Limited Time</span>
                        
                        <div className="dealDescription">
                            <div className="dealDesc-1">
                                <b>Webbuilder 1</b>
                            </div>

                            <div className="dealDesc-2">
                                <p>Computer  Modern clasic with wix support</p>

                                <div className="ratesDeal">
                                    <span className="dealRate">$39.96</span>
                                    <span className="original-dealRate">$49.96</span>
                                    <span className="discount">(20% off)</span>
                                </div>

                                <div className="dealButton">
                                    <button>View Deal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="deals">
                    <div className="dealImage">
                        <img src={computer} alt="" />
                    </div>

                    <div className="dealContent">
                        <span className='deal-offer-1'>20% off</span>
                        <span className='deal-offer-2'>Limited Time</span>
                        
                        <div className="dealDescription">
                            <div className="dealDesc-1">
                                <b>Webbuilder 1</b>
                            </div>

                            <div className="dealDesc-2">
                                <p>Computer  Modern clasic with wix support</p>
                                <div className="ratesDeal">
                                    <span className="dealRate">$39.96</span>
                                    <span className="original-dealRate">$49.96</span>
                                    <span className="discount">(20% off)</span>
                                </div>
                                <div className="dealButton">
                                    <button>View Deal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    </div>
  )
}

export default RelatedDeals