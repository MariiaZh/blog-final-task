import React, { Fragment } from "react";
import CustomCard from "../components/PreviewCard";
import dummy_posts from "../models/dummy_posts";

const currentUser = dummy_posts.filter(post => post.authorId === '03')

const HomeScreen = () => {
    return (<Fragment>
        {currentUser.map(post => {
            return (
                <CustomCard
                    title={post.title}
                    text={post.text}
                    likes={post.likes} />
            )
        })
        }
    </Fragment>

    )
}

export default HomeScreen;