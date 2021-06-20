import React, {Component} from 'react';
import axios from 'axios'
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link, Redirect } from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import SimpleReactValidator from 'simple-react-validator';

import Breadcrumb from "../common/breadcrumb";
import {removeFromWishlist} from '../../actions'
import {getCartTotal} from "../../services";

class checkOut extends Component {

    constructor (props) {
        super (props)

        this.state = {
            users_id:'',
            town:'',
            address:'',
            state:'',
            postal_code:'',
            phone:'',
            total:props.total,
            errors:[]
        }
        //this.validator = new SimpleReactValidator();

        this.handleSubmit = this.handleSubmit.bind(this)
        this.hasErrorFor = this.hasErrorFor.bind(this)
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.renderErrorFor = this.renderErrorFor.bind(this)
    }

    setStateFromInput = (event) => {
        var obj = {};
        obj[event.target.name] = event.target.value;
        this.setState(obj);

      }

      handleFieldChange(e) {
        this.setState({
            [e.target.name]:e.target.value
        })
      }

      setStateFromCheckbox = (event) => {
          var obj = {};
          obj[event.target.name] = event.target.checked;
          this.setState(obj);

          if(!this.validator.fieldValid(event.target.name))
          {
              this.validator.showMessages();
          }
        }

    checkhandle(value) {
        this.setState({
            payment: value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        const transactions = {
            address : this.state.address,
            town : this.state.state,
            postal_code : this.state.postal_code,
            phone : this.state.phone,
            name : this.state.users_id,
            state : this.state.state,
            total : this.state.total,
        }

        console.log(transactions)
        axios.post('/api/v1/transaction', transactions).then(res => {
                var msg = res.status;
                console.log(msg===201)
                if (msg){
                    // eslint-disable-next-line react/prop-types
                    this.props.history.push('/users/home')
                }
            })
        }

    hasErrorFor(field){
        return !!this.state.errors[field]
    }
    renderErrorFor(field){
        if(this.hasErrorFor(field)){
            return (
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }
    render (){
        const {cartItems, symbol, total} = this.props;

        return (
            <div>

                {/*SEO Support*/}
                <Helmet>
                    <title>Men's Collection - Checkout</title>
                    <meta name="description" content="Men's Collection" />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb  title={'Checkout'}/>

                <section className="section-b-space">
                    <div className="container padding-cls">
                        <div className="checkout-page">
                            <div className="checkout-form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="checkout row">
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-title">
                                                <h3>Billing Details</h3>
                                            </div>
                                            <div className="row check-out">
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Name</div>
                                                    <input type="text" name="users_id" className={`form-control ${this.hasErrorFor('users_id') ? 'is-invalid' : ''}`} value={this.state.users_id} onChange={this.handleFieldChange} />
                                                    {this.renderErrorFor('users_id')}
                                                </div>
                                                <div className="form-group col-md-6 col-sm-6 col-xs-12">
                                                    <div className="field-label">Phone</div>
                                                    <input type="text" name="phone"  value={this.state.phone} onChange={this.handleFieldChange} className={`form-control ${this.hasErrorFor('users_id') ? 'is-invalid' : ''}`} />
                                                    {this.renderErrorFor('users_id')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Town</div>
                                                    <select name="country" value={this.state.town} onChange={this.handleFieldChange} className={`form-control ${this.hasErrorFor('users_id') ? 'is-invalid' : ''}`}>
                                                        <option>Malang</option>
                                                        <option>Surabaya</option>
                                                        <option>Gresik</option>
                                                        <option>Jombang</option>
                                                    </select>
                                                    {this.renderErrorFor('users_id')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-12 col-xs-12">
                                                    <div className="field-label">Address</div>
                                                    <input type="text" name="address" value={this.state.address} onChange={this.handleFieldChange} placeholder="Street address" className={`form-control ${this.hasErrorFor('users_id') ? 'is-invalid' : ''}`} />
                                                    {this.renderErrorFor('users_id')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">State / County</div>
                                                    <input type="text" name="state" value={this.state.state} onChange={this.handleFieldChange} className={`form-control ${this.hasErrorFor('users_id') ? 'is-invalid' : ''}`} />
                                                    {this.renderErrorFor('users_id')}
                                                </div>
                                                <div className="form-group col-md-12 col-sm-6 col-xs-12">
                                                    <div className="field-label">Postal Code</div>
                                                    <input type="text" name="postal_code" value={this.state.postal_code} onChange={this.handleFieldChange} className={`form-control ${this.hasErrorFor('users_id') ? 'is-invalid' : ''}`} />

                                                    {this.renderErrorFor('users_id')}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-details">
                                                <div className="order-box">
                                                    <div className="title-box">
                                                        <div>Product <span> Total</span></div>
                                                    </div>
                                                    <ul className="qty">
                                                        {cartItems.map((item, index) => {
                                                            return <li key={index}>{item.name} × {item.qty} <span>{symbol} {item.sum}</span></li> })
                                                        }
                                                    </ul>
                                                    <ul className="sub-total">
                                                        <li>Subtotal <span className="count">{symbol}{total}</span></li>
                                                        <li>Shipping <div className="shipping">
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="free-shipping" id="free-shipping" />
                                                                    <label htmlFor="free-shipping">Free Shipping</label>
                                                            </div>
                                                            <div className="shopping-option">
                                                                <input type="checkbox" name="local-pickup" id="local-pickup" />
                                                                    <label htmlFor="local-pickup">Local Pickup</label>
                                                            </div>
                                                        </div>
                                                        </li>
                                                    </ul>

                                                    <ul className="total">
                                                        <li>Total <span className="count">{symbol}{total}</span></li>
                                                    </ul>
                                                </div>

                                                <div className="payment-box">
                                                    {(total !== 0)?
                                                    <div className="text-right">
                                                        <button type="button" className="btn-solid btn" onClick={this.handleSubmit} >Place Order</button>
                                                    </div>
                                                    : ''}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    cartItems: state.cartList.cart,
    symbol: state.data.symbol,
    total: getCartTotal(state.cartList.cart)
})

export default connect(
    mapStateToProps,
    {removeFromWishlist}
)(checkOut)