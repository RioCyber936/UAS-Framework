import Http from '../../utils/Http'
import Transformer from '../../utils/Transformer'
import * as transactionActions from './store/actions'

function transformRequest(parms) {
    return Transformer.send(parms)
}

function transformResponse(params) {
    return Transformer.fetch(params)
}

export function main(params) {

    let {pageNumber = 1, url = '/api/v1/transaction'} = params

    return dispatch => {
        if (pageNumber > 1) {
            url = url + `?page=${pageNumber}`
        }

        Http.get(url)
            .then((res) => {
                dispatch(transactionActions.list(transformResponse(res.data)))
                console.log(res.data)
            })
            .catch((err) => {
                // TODO: handle err
                console.error(err.response)
            })
    }
}