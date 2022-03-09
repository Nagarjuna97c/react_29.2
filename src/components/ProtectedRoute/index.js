import Cookies from 'js-cookie'
import {Route, Redirect} from 'react-router-dom'

const ProtectedRoute = props => {
  const jwToken = Cookies.get('jwt_token')
  console.log(jwToken)
  if (jwToken === undefined) {
    return <Redirect to="/login" />
  }
  return <Route {...props} />
}

export default ProtectedRoute
