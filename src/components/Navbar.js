import React from 'react'
// //bootstrap
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap'
import Link from "gatsby-plugin-transition-link/AniLink";


const linkStyle = {
    color: "#FFFFFF",
    fontSize : "24px",
    fontWeight : "600"
}

const activeStyle = {
    color: "#86E57F"
}

const NavLink = ({ children, to }) => (
    <Link to={to} activeStyle={activeStyle} style={linkStyle}>
        {children}
    </Link>
)

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light shadow-sm " style={{ backgroundColor: "#2F4E77" }}>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="nav justify-content-center container">
                    <li class="nav-item mr-5">
                        <NavLink class="nav-link" to = "/">Home</NavLink>
                    </li>
                    <li class="nav-item mr-5">
                        <NavLink class="nav-link" to = "/blog">Blog</NavLink>
                    </li>
                    <li class="nav-item mr-5">
                        <NavLink class="nav-link" to = "/algorithm">Algorithm</NavLink>
                    </li>
                    <li class="nav-item mr-5">
                        <NavLink class="nav-link" to = "/project">Project</NavLink>
                    </li>
                    <li class="nav-item mr-5">
                        <NavLink class="nav-link" to = "/tags">Tags</NavLink>
                    </li>
                    <li class="nav-item mr-5">
                        <NavLink class="nav-link" to = "/search">Search</NavLink>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar
