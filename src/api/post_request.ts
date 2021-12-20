import Article, { Comment } from "../models/Article";
import User from '../models/User';



type PropsArticle = { dataType: string } & Article;
type PropsUser = { dataType: string } & User;
type PropsComment = { dataType: string } & Comment;


const postRequest = (props: PropsArticle | PropsUser | PropsComment) => {

    let responseData;
    const url = `https://critic-s-gaze-default-rtdb.europe-west1.firebasedatabase.app/${props.dataType}.json`;

    fetch(url, {
        method: 'POST',
        body: JSON.stringify({
            ...props
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json();
        })
        .then((data) => {
            console.log('success', data)

            responseData = {
                ...data
            };
        })
        .catch((err) => {
            console.log(err)
            alert(err.message);
        });
    return responseData;
}

export default postRequest;