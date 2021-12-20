export type Comment = {
    articleIdKey: string,
    commentId: string,
    nickName: string,
    date: string,
    text: string
}


type Article = {
    articleId: string,
    authorIdKey: string,
    title: string,
    text: string,
    date: string,
    categories: string[],
    likes: number,
    image: string,
}

export default Article;

