import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import PreviewCard from './PreviewCard';
import Article from "../../../models/Article";

const SortedArticles: React.FC<{ sorterType: string }> = (props) => {

    const articlesList = useSelector((state: RootState) => state.articlesWorker.articlesList);
    const usersList = useSelector((state: RootState) => state.articlesWorker.usersList);
    const selectedGenre = useSelector((state: RootState) => state.articlesWorker.selectedGenre);

    let finalList: Article[] = [];

    switch (props.sorterType) {
        case 'last-added':
            const arrForSort = [...articlesList];
            arrForSort.sort((a, b) => (a.date > b.date) ? 1 : -1);
            for (let i = 6; i > 0; i--) {
                finalList.push(arrForSort[arrForSort.length - i]);
            }
            console.log(' finalList:', finalList)
            break;
        case 'most-liked': finalList = articlesList.slice().sort((a: Article, b: Article) => a.likes < b.likes ? 1 : -1);
            break;
        case 'selected-genre':
            articlesList.forEach(post => {
                if (post.categories.indexOf(selectedGenre) !== -1) {
                    finalList.push(post);
                }
            });
            break;
        default: finalList = [...articlesList];
    }

    return (
        <Fragment>
            {finalList.map(post => {
                let postAuthor: string | void = usersList.find(user => user.userId === post.authorIdKey)?.nickName;
                if (typeof postAuthor === "undefined") {
                    postAuthor = "Incognita";
                }

                const postText: string = post.text.slice(0, 300);
                return (
                    <PreviewCard
                        key={post.articleId + Math.round(Math.random() * 100)}
                        {...post}
                        text={postText}
                    />
                )
            })}
        </Fragment>
    )

}

export default SortedArticles;


