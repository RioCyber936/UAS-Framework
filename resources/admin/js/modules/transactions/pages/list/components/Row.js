import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const displayName = 'Transactions'
const propTypes = {
  index: PropTypes.number.isRequired,
  transaction: PropTypes.object.isRequired,
}

const Row = ({ index, transaction}) => {
  return (<tr key={index}>
    <th scope="row">{index+1}</th>
    <td>{transaction.users_id}</td>
    <td>{transaction.address}</td>
    <td>{transaction.state}</td>
    <td>{transaction.phone}</td>
    <td>{transaction.postal_code}</td>
    <td>{transaction.total}</td>
    <td>{transaction.createdAt && transaction.createdAt.format('MMMM, DD YYYY')}</td>
    <td>{transaction.updatedAt && transaction.updatedAt.format('MMMM, DD YYYY')}</td>
  </tr>)
}

Row.displayName = displayName
Row.propTypes = propTypes

export default Row