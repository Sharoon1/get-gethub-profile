import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container">
    <Link to='/' className="navbar-brand" >GitHub</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to='/about' className="nav-link active" >About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link to='/register' className="btn btn-outline-light" type="submit">Rergister</Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}
