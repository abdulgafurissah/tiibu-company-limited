import React from 'react'
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <>
    <h1>error 404!</h1>
    <h2>Page Not Found </h2>
    <ul>
        <li><Link to='/'>Home page</Link></li>
    </ul>

    </>
  )
}

export default PageNotFound;