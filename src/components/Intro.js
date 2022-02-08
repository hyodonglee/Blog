import React from 'react'
import { Link } from 'gatsby';


import NLink from "gatsby-plugin-transition-link/AniLink";


const linkStyle = {
    color: "#55749D",
    fontSize: "24px",
    fontWeight: "600"
}

const activeStyle = {
    color: "#F0F"
}

const titleStyle={
    textAlign:'center'
}

const NavLink = ({ children, to }) => (
    <NLink to={to} activeStyle={activeStyle} style={linkStyle}>
        {children}
    </NLink>
)


function Intro() {

    return (
        <div className="container my-4">
            {/* <h2 className="card-title text-danger font-weight-bold">Hyodong's Blog</h2> */}
            <h2 className="card-title font-weight-bold" style={titleStyle}>Dong's Blog</h2>
            <img
                            width="250"
                            className="rounded-circle author-img mx-4 mb-4"
                            src="https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
                            alt="author-img" />

            <p className="card-subtitle mt-2">
                안녕하세요. 이효동입니다. <br/>
                효율적인 관리와 범용성을 위해 <br/>
                https://velog.io/@hyodonglee 로 이전했습니다.<br/>
            </p>
            <Link className="btn btn-dark my-3" to="about">Who am I?</Link>

            <hr />
            {/* <h4>Outline</h4>
            <ul class="list-group my-3">
                <li class="list-group-item">
                    <NavLink class="nav-link" to="/">Home</NavLink>
                </li>
                <li class="list-group-item">
                        <NavLink class="nav-link" to="/blog">Blog</NavLink>
                </li>
                <li class="list-group-item">
                        <NavLink class="nav-link" to="/tags">Tags</NavLink>
                </li>
                <li class="list-group-item">
                    <NavLink class="nav-link" to="/search">Search</NavLink>
                </li>
            </ul>
            <hr/> */}

            <h4>Built with</h4>
            <a href="https://reactjs.org/">
                <img
                    className="mr-4 mt-3"
                    src="https://img.icons8.com/ios/40/00D8FF/react-native-filled.png"
                    alt="build-with-icon-1" />
            </a>
            <a href="http://gatsbyjs.org/">
                <img
                    className="mr-4 mt-3"
                    width="40px"
                    src="https://seeklogo.com/images/G/gatsby-logo-1A245AD37F-seeklogo.com.png"
                    alt="build-with-icon-2" />
            </a>
            <a href="https://www.netlify.com/">
                <img
                    className="mr-4 mt-3"
                    width="40px"
                    src="https://www.netlify.com/img/press/logos/logomark.png"
                    alt="build-with-icon-3" />
            </a>
            <a href="https://www.markdownguide.org/">
                <img
                    className="mr-4 mt-3"
                    src="https://img.icons8.com/office/40/000000/markdown.png"
                    alt="build-with-icon-4" />
            </a>
            <h6><br />Open Sourced on <a href="https://github.com">Github</a></h6>
            <hr />
            {/* <h4>Latest Posts</h4>
            <ul class="list-group my-3">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Morbi leo risus</li>
                <li class="list-group-item">Porta ac consectetur ac</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul> */}
        </div>
    )
}

export default Intro
