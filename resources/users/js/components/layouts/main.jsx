import React, { Component } from 'react';
import {Helmet} from 'react-helmet'
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';

// Import custom components
import {
    svgFreeShipping,
    svgservice,
    svgoffer,
    svgpayment
} from "../../services/script"
import TopCollection from "./common/collection"
import Header from "../common/headers/header"
import Footer from "../common/footers/footer"
import {ToastContainer} from "react-toastify";

class Beauty extends Component {
    constructor(props){
        super(props)

        this.state = {
            open: false
        }
    }
    onOpenModal = () => {
        this.setState({ open: true });
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        document.getElementById("color").setAttribute("href", `/users/assets/css/color4.css` );
    }

    render(){

        return (
            <div>
                <Helmet>
                    <title>Men's Collection</title>
                </Helmet>
                <Header logoName={'logo.png'}/>
                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home34">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>welcome to men collection</h4>
                                                    <h1>men products</h1><a href="#" className="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home35">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div>
                                                    <h4>watch store</h4>
                                                    <h1>watch products</h1><a href="#" className="btn btn-solid">shop
                                                    now</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>


                {/*About Section*/}
                <section className="beauty-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1 text-center">
                                <img src={`/users/assets/images/beauty/about-us.jpg`} alt="" className="img-fluid blur-up lazyload" />
                            </div>
                            <div className="col-xl-5 col-lg-6 col-md-12">
                                <div className="about-section">
                                    <div>
                                        <h2>about us</h2>
                                        <div className="about-text">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                accusantium doloremque laudantium, totam rem aperiam.sit voluptatem
                                                accusantium doloremque laudantium,totam rem aperiam.</p>
                                        </div>
                                        <div className="service small-section pb-0">
                                            <div className="row">
                                                <div className="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                                    <h5>discount shipping</h5>
                                                </div>
                                                <div className="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                                    <h5>good services</h5>
                                                </div>
                                                <div className="col-sm-4 service-block1">
                                                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                                    <h5>many offer</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*About Section End*/}

                {/*Product slider*/}
                <TopCollection type={'beauty'} />
                {/*Product slider End*/}

                {/*Product slider*/}
                <TopCollection type={'beauty'} />
                {/*Product slider End*/}

                <Footer logoName={'logo.png'}/>

                <ToastContainer />
            </div>
        )
    }
}


export default Beauty;