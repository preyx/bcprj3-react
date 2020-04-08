import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from 'react-router-dom'
const axios = require('axios')

export default function Auth () {
  return (
    <Router>
      <div>
        <AuthButton />

        <ul>
          <li>
            <Link to='/public'>Public Page</Link>
          </li>
          <li>
            <Link to='/protected'>Protected Page</Link>
          </li>
        </ul>

        <Switch>
          <Route path='/public'>
            <PublicPage />
          </Route>
          <Route path='/login'>
            <LoginPage />
          </Route>
          <PrivateRoute path='/protected'>
            <ProtectedPage />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  )
}
