import React from 'react'
import { Link } from 'gatsby';

const TagList = ({ tags }) => {
    return (
        // <div className = "my-4">
        <div>
            <h4>Tags</h4>
            <div>
                {
                    tags.map(
                        tag => (<Link to={"/tags/" + tag} className="mr-3 btn my-2 btn-info">#{tag}</Link>)
                    )
                }
            </div>
            <hr/>
        </div>
    )
}

export default TagList
