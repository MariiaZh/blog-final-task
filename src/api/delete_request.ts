import { createAsyncThunk } from "@reduxjs/toolkit";

type Item = {
    dataType: string,
    id: string
}

export const deleteRequest = createAsyncThunk(
    "deleteRequestWorker/deleteRequest",
    async (props: Item) => {
        let url = `https://critic-s-gaze-default-rtdb.europe-west1.firebasedatabase.app/${props.dataType}/${props.id}.json`;
        if (props.dataType === 'articles') {
            url = `https://critic-s-gaze-default-rtdb.europe-west1.firebasedatabase.app/${props.dataType}/-${props.id}.json`;
        }

        try {
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json();
            console.log("DELETED", data)
            return {
                dataType: props.dataType,
                id: props.id
            }
        } catch (err) {
            console.log(err);
        }

    })
