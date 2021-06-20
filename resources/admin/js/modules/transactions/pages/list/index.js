// import libs
import { connect } from 'react-redux'
import Transactions from "../../Transactions";

// import components
import Page from './Page'

const mapStateToProps = state => {
  console.log("current state", state)
  const {data, ...meta} = state.transactions
  
  return {
    transactions: data?.map((transaction) => new Transactions(transaction)),
    meta: Object.assign({}, meta)
  }
}

export default connect(mapStateToProps)(Page)
