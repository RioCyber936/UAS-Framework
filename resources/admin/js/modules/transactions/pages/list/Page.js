// import libs
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import Breadcrumb from "../../../../common/breadcrumb";
import {main} from '../../service'

// import components
import Row from './components/Row'
import Pagination from './components/Pagination'
import {Link} from 'react-router-dom'

class Page extends Component {
    static displayName = 'Transactions Page'
    static propTypes = {
        meta: PropTypes.object.isRequired,
        transactions: PropTypes.array,
        dispatch: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const {dispatch} = this.props

        dispatch(main({}))
    }

    pageChange = (pageNumber) => {
        this.props.dispatch(main({pageNumber}))
    }

    renderTransactions() {
        return this.props.transactions.map((transaction, index) => {
            console.log(transaction)
            return <Row key={index}
                        transaction={transaction}
                        index={index}/>
        })
    }

    render() {
        return (<Fragment>
            <Breadcrumb title="Transaction" parent="Transaction"/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="clearfix"/>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="thead-inverse" >
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>State</th>
                                            <th>Phone</th>
                                            <th>Postal Code</th>
                                            <th>Total</th>
                                            <th>Created At</th>
                                            <th>Updated At</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                            {this.renderTransactions()}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>)
    }
}

export default Page
