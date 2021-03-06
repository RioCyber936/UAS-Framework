import React, {Component} from 'react';
import { Link} from 'react-router-dom';

import LogoImage from "../headers/common/logo"
import {SlideUpDown} from "../../../services/script";

class Footer extends Component {

    componentDidMount(){
        var contentwidth = window.innerWidth;
        if ((contentwidth) < 750) {
            SlideUpDown('footer-title');
        } else {
            var elems = document.querySelectorAll(".footer-title");
            [].forEach.call(elems, function(elemt) {
                let el = elemt.nextElementSibling;
                el.style = "display: block";
            });
        }
    }

    render () {

        return (
                <footer className="footer-light pet-layout-footer">
                    <div className="white-layout">
                        <div className="container">
                            <section className="small-section">
                                <div className="row footer-theme2">
                                    <div className="col">
                                        <div className="footer-link link-white">
                                            <div className="footer-brand-logo">
                                                <LogoImage logo={this.props.logoName} />
                                            </div>
                                            <div className="social-white">
                                                <ul>
                                                    <li>
                                                        <Link to={'https://www.facebook.com/'} ><i className="fa fa-facebook" aria-hidden="true"/></Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'https://plus.google.com/'} ><i className="fa fa-google-plus" aria-hidden="true"/></Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'https://twitter.com'}><i className="fa fa-twitter" aria-hidden="true"/></Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'https://instagram.com'}><i className="fa fa-instagram" aria-hidden="true"/></Link>
                                                    </li>
                                                    <li>
                                                        <Link to={'https://rss.com/'}><i className="fa fa-rss" aria-hidden="true"/></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="footer-title footer-mobile-title">
                                                <h4>my account</h4>
                                            </div>
                                            <div className="footer-contant">
                                                <ul>
                                                    <li><Link to={`/users/collection`} >womens</Link></li>
                                                    <li><Link to={`/users/collection`} >clothing</Link></li>
                                                    <li><Link to={`/users/collection`} >accessories</Link></li>
                                                    <li><Link to={`/users/collection`} >featured</Link></li>
                                                    <li><Link to={`/users/collection`} >service</Link></li>
                                                    <li><Link to={`/users/collection`} >cart</Link></li>
                                                    <li><Link to={`/users/collection`} >my order</Link></li>
                                                    <li><Link to={`/users/collection`} >FAQ</Link></li>
                                                    <li><Link to={`/users/collection`} >new product</Link></li>
                                                    <li><Link to={`/users/collection`} >featured product</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="sub-footer black-subfooter">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-md-6 col-sm-12">
                                    <div className="footer-end">
                                        <p><i className="fa fa-copyright" aria-hidden="true"/> 2021 Copyright</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-6 col-sm-12">
                                    <div className="payment-card-bottom">
                                        <ul>
                                            <li>
                                                <a href="#"><img src={`/users/assets/images/icon/visa.png`} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={`/users/assets/images/icon/mastercard.png`} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={`/users/assets/images/icon/paypal.png`} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={`/users/assets/images/icon/american-express.png`} alt="" /></a>
                                            </li>
                                            <li>
                                                <a href="#"><img src={`/users/assets/images/icon/discover.png`} alt="" /></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
        );
    }
}

export default Footer;