import moment from 'moment'
import Model from '../../utils/Model'
import User from '../users/Users'

class Transactions extends Model {
  constructor(props) {
    super(props)

    this.initialize(props)
  }

  initialize(props) {
    super.initialize(props)

    this.users_id = props.users_id || ''
    this.address = props.address || ''
    this.phone = props.phone || ''
    this.postal_code = props.postal_code || ''
    this.state = props.state || ''
    this.town = props.town || ''
    this.total = props.total || ''
    this.createdAt = props.createdAt ? moment(props.createdAt) : null
    this.updatedAt = props.updatedAt ? moment(props.updatedAt) : null

    // relate user model
    this.user = props.user ? new User(props.user) : null
  }
}

export default Transactions
