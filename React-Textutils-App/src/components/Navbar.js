import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

const [search, setSearch]=useState("")

const searching = (e) => {
setSearch(e.target.value)
}
const searching2=()=>{
  alert("Cant search" + " " + search +","+" "+"as the option is disabled for now")
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark-subtle text-emphasis-black">
  <div className="container-fluid">
    <div className="navbar-brand">Text-Utils</div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar Supported Content">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">About</Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li ><Link to="/textformatter" className="dropdown-item">
            Text-Formatter</Link></li>
            <li ><Link to="/copy" className="dropdown-item">
            Copy-text</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li ><Link to="/counter" className="dropdown-item">
            Counter</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input onChange={searching} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button onClick={searching2} className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}
