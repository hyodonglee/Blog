import React from 'react'
import Page from '../components/PageLayout';
import Helmet from 'react-helmet'
import { SocialIcon } from 'react-social-icons'

function About() {
    return (
        <Page>
            <Helmet>
                <title>About | Dong's Blog</title>
            </Helmet>
            <div className="container about my-5">
                <h1 className="font-weight-bold">Hi, Everyone!</h1>
                <h2>Welcome to Dong's Blog</h2>
                <h6 className="my-3">
                    안녕하세요. 취업을 준비하고 있는 대학생, 이효동입니다. 블로그 작성을 계속해서 진행하고 있습니다.
                </h6>
                <p></p>
                <h2>Authors</h2>

                <div className="row my-5">
                    <div className="col-lg-6">

                        <img
                            width="250"
                            className="rounded-circle author-img mx-4 mb-4"
                            src="https://user-images.githubusercontent.com/54053016/106390261-d4693200-642a-11eb-8ac8-eb8203cf74b9.png"
                            alt="author-img" />

                    </div>
                    <div className="col">
                        <h3>
                            Lee Hyodong
                            </h3>
                        <h5>A CS undergraduate at Kyungpook National University<br /></h5>
                        <p>
                            <br />
                            I created this blog to record and study Computer Programming, Algorithm, etc.
                            In this blog, you can see all of my work and document. I hope you get something valuable.
                            Thanks~!
                            <br />
                            I built this entire blog with <a href="http://gatsbyjs.org/">Gatsby Js</a> 🚀.
                        </p>

                        <h5>Stay in touch <br /></h5>
                        <SocialIcon url="https://github.com/hyodonglee" className="mr-4" />
                        <SocialIcon url="https://www.instagram.com/hyo_olong/" className="mr-4" />
                        {/* <SocialIcon url="https://facebook.com/sree.dhannu" className="mr-4" /> */}
                    </div>
                </div>
            </div>

        </Page>
    )
}

export default About
