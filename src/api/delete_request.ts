
type Item = {
    dataType: string,
    id: string
}


const deleteRequest = (props: Item) => {

    let responseData;

    const url = `https://critic-s-gaze-default-rtdb.europe-west1.firebasedatabase.app/${props.dataType}/${props.id}.json`;

    fetch(url, {
        method: 'DELETE',
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

export default deleteRequest;