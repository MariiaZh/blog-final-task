import { createAsyncThunk } from "@reduxjs/toolkit";

type Item = {
    dataType: string,
    id: string,
    keyData: string
}


export const patchRequest = createAsyncThunk(
    "postRequestWorker/patchRequest",

    async (props: Item) => {

        const url = `https://critic-s-gaze-default-rtdb.europe-west1.firebasedatabase.app/${props.dataType}/${props.id}.json`;

        try {
            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    [props.keyData]: props.id
                }),
            })

            const data = await response.json();

            console.log("PATCH", data)
            return {
                dataType: props.dataType
            }

        } catch (err) {
            console.log(err);
        }

    })
