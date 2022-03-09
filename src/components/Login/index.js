import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  setToken = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const getToken = await fetch('https://apis.ccbp.in/login', options)
    const tokenValue = await getToken.json()
    Cookies.set('jwt_token', tokenValue.jwt_token, {expires: 1})
    const {history} = this.props
    history.replace('/')
  }

  render() {
    const jwToken = Cookies.get('jwt_token')
    if (jwToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <h1 className="heading">Please Login</h1>
        <button type="button" className="button" onClick={this.setToken}>
          Login with Sample Creds
        </button>
      </>
    )
  }
}
export default Login
