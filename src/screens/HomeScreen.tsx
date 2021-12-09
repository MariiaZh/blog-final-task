import React, { Fragment } from "react";
import dummy_posts from "../models/dummy_posts";

const currentUser = dummy_posts.filter(post => post.authorId === '03')

const HomeScreen: React.FC = () => {
    return (<Fragment>
        {currentUser.map(post => {
            return (
                <div key={post.id}>Hello</div>
            )
        })
        }
    </Fragment>

    )
}

export default HomeScreen;