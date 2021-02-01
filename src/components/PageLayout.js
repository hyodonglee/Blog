import React from 'react'
import Navbar from '../components/Navbar'
import "../style.css"
import useTheme from '../useTheme'

const authorLinkStyle = {
    color: "#55749D",
}

function PageLayout({ children }) {
    const { theme, toggleTheme } = useTheme();

    function getTheme() {
        if (theme === "light") {
            typeof window !== "undefined" && document.documentElement.style
                .setProperty('--bg-color', '#FFF');
            return <img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/moon-symbol.png" alt="moon-icon" />
        }
        else {
            typeof window !== "undefined" && document.documentElement.style
                .setProperty('--bg-color', '#12181B');
            return <img src="https://img.icons8.com/android/24/FFFFFF/sun.png" alt="sun-icon" />
        }
    }

    return (
        <div className={theme}>
            <Navbar />
            <button className="btn theme-toggle-button" onClick={toggleTheme}>
                {getTheme()}
            </button>
            <main >{children}</main>
            <footer className={"text-center pt-4 " + theme}>
                <h5>Created and Presented By <a className="font-weight-bold" href="https://www.github.com/hyodonglee" style={authorLinkStyle}>Hyodong</a></h5>
                <h6>Copyright © Dong's Blog | 2021</h6><br />
            </footer>
        </div>
    )
}

export default PageLayout
