type Comment = {
    author: boolean,
    nickName: string,
    date: Date,
    text: string
}

class Article {
    public authorId: string;
    public title: string;
    public text: string;
    public date: Date;
    public categories: string[];
    public comments: Comment[];
    public likes: number;

    constructor(authorId: string, title: string, text: string, date: Date, categories: string[], comments: Comment[], likes: number) {
        this.authorId = authorId;
        this.title = title;
        this.text = text;
        this.date = date;
        this.categories = categories;
        this.comments = comments;
        this.likes = likes;
    }
}

export default Article;
