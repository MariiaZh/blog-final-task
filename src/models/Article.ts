export type Comment = {
    author: boolean,
    nickName: string,
    date: string,
    text: string
}

export class Article {
    public id: string;
    public authorId: string;
    public title: string;
    public text: string;
    public date: string;
    public categories: string[];
    public comments: Comment[];
    public likes: number;
    public image: string;

    constructor(id: string, authorId: string, title: string, text: string, date: string, categories: string[], comments: Comment[], likes: number, image: string) {
        this.id = id;
        this.authorId = authorId;
        this.title = title;
        this.text = text;
        this.date = date;
        this.categories = categories;
        this.comments = comments;
        this.likes = likes;
        this.image = image;

    }
}

export default Article;
