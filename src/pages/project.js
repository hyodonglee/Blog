import React from "react"
import Card from "../components/Card"
import Page from '../components/PageLayout'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from "gatsby"

const Project = () => {
  const data = useStaticQuery(graphql`
    query{
        allMarkdownRemark(
          sort: {fields: frontmatter___date, order: DESC}, limit: 2000
          filter: { frontmatter: { categories: {in:"study"} }}
          ) {
          
            edges {
            node {
              frontmatter {
                title                
                slug
                categories
                date(formatString: "MMMM DD, YYYY")
                author
                description
              }
            }
          }
        }
      }      
  `)
  return (
    <Page>
      <Helmet>
        <title>Blog | Dong's Blog</title>
      </Helmet>
      <div className="container">
        <div className="col">
          {
            data.allMarkdownRemark.edges.map(
              ({ node }) => (<Card
                slug={node.frontmatter.slug}
                authorName={node.frontmatter.author}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                timeStamp={node.frontmatter.date}
              />)
            )
          }
        </div>
      </div>
    </Page>
  )
}

export default Project
