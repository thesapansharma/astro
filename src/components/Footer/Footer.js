import "./Footer.css"

const Footer = () => {
  return (
<div className="footer">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-sm-4 col-xs-12">
        <div className="single_footer">
          <h4>Services</h4>
          <ul>
            <li>
              <a href="#">Basic Astrology</a>
            </li>
            <li>
              <a href="#">Advance Astrology</a>
            </li>
            <li>
              <a href="#">Hand Reading</a>
            </li>
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="single_footer single_footer_address">
          <h4>Page Link</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="/#contact">Contact Us</a>
            </li>
            <li>
              <a href="/#courses">Pricing</a>
            </li>
            <li>
              <a href="/refund-policy">Refund Policy </a>
            </li>
            <li>
              <a href="/privacy-policy">Privacy Policy </a>
            </li>
            <li>
              <a href="/terms-and-conditions">Terms and Conditions </a>
            </li>
            <li>
              <a href="/#about">About Us</a>
            </li>
          </ul>
        </div>
      </div>
      {/*- END COL */}
      <div className="col-md-4 col-sm-4 col-xs-12">
        <div className="single_footer single_footer_address">
          <h4>Subscribe today</h4>
          <div className="signup_form">
            <form action="#" className="subscribe">
              <input
                type="text"
                className="subscribe__input"
                placeholder="Enter Email Address"
              />
              <button type="button" className="subscribe__btn">
                <i className="fas fa-paper-plane" />
              </button>
            </form>
          </div>
        </div>
      </div>
      {/*- END COL */}
    </div>
    {/*- END ROW */}
    <div className="row">
      <div className="col-lg-12 col-sm-12 col-xs-12">
        <p className="copyright">
          Copyright © 2024 <a href="#">Astro75</a>.
        </p>
      </div>
      {/*- END COL */}
    </div>
    {/*- END ROW */}
  </div>
  {/*- END CONTAINER */}
</div>

  )
}
export default Footer;