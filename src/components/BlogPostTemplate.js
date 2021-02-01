import { graphql } from "gatsby"
import React from 'react'
import '../style.css'
import Helmet from 'react-helmet'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import useTheme from '../useTheme'
import TagList from "./TagList";

import Page from '../components/PageLayout'


const Temp = ({ data, pageContext }) => {

  console.log(pageContext)

  const { theme, toggleTheme } = useTheme();

  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html, timeToRead } = markdownRemark
  const { previous, next } = pageContext


  function getTheme() {
    if (theme === "light") {
      return <img src="https://img.icons8.com/ios-glyphs/24/FFFFFF/moon-symbol.png" alt="moon-icon" />
    }
    else {
      return <img src="https://img.icons8.com/android/24/FFFFFF/sun.png" alt="sun-icon" />
    }
  }//어둡고 밝고 밝기 조절


  return (
    <Page>
      <Helmet>
        <title>{frontmatter.title}</title>
      </Helmet>
      <div className="container abs">
        <div className="col">
          {/* <div className="col-lg-4">
            <Intro />
          </div> */}
          {/* <div className={"col-lg-8 "}> */}
          <div className="post-content" dangerouslySetInnerHTML={{ __html: html }} />
          <hr />
          {/* <div className=" my-2"> */}
          <span>
            <TagList tags={frontmatter.tags} />
            <ul
              style={{
                display: `flex`,
                flexWrap: `wrap`,
                justifyContent: `space-between`,
                listStyle: `none`,
                padding: 0,
              }}
            >
              <li>
                {previous && (
                  <AniLink to={previous.frontmatter.slug} >
                    ← {previous.frontmatter.title}
                  </AniLink>
                )}
              </li>
              <li>
                {next && (
                  <AniLink to={next.frontmatter.slug} >
                    {next.frontmatter.title} →
                  </AniLink>
                )}
              </li>
            </ul>
            <hr />
          </span>
        </div>
      </div>

      {/* </div> */}
      {/* </div> */}
    </Page>
  )
}

export default Temp

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        tags
        author
        authorImg
      }
      timeToRead
    }
  }
`