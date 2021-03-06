import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'

class TopBar extends Component {

    render() {
        const {translate} = this.props;
        return (
            <div className="top-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="header-contact">
                                <ul>
                                    <li>{translate('topbar_title', { theme_name: ' React.js' })}</li>
                                    <li><i className="fa fa-phone" aria-hidden="true"/>{translate('call_us')}:  123 - 456 - 7890</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-6 text-right">
                            <ul className="header-dropdown">
                                <li className="mobile-wishlist compare-mobile"><Link to={`/users/compare`}><i className="fa fa-random" aria-hidden="true"/>{translate('compare')}</Link></li>
                                <li className="mobile-wishlist"><Link to={`/users/wishlist`}><i className="fa fa-heart" aria-hidden="true"/>{translate('wishlist')}</Link></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default withTranslate(TopBar);