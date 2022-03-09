import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom/cjs/react-router-dom.min'

const LogoutButton = props => {
  const logOut = () => {
    console.log('logout clicked')
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <>
      <button type="button" className="button" onClick={logOut}>
        Logout
      </button>
    </>
  )
}

export default withRouter(LogoutButton)
