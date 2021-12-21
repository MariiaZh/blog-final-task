import { createAsyncThunk } from "@reduxjs/toolkit";

type Item = {
    dataType: string,
    id: string
}


export const deleteRequest = createAsyncThunk(
    "deleteRequestWorker/deleteRequest",
    async (props: Item) => {
        const url = `https://critic-s-gaze-default-rtdb.europe-west1.firebasedatabase.app/${props.dataType}/${props.id}.json`;
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
                statusData: data,
                dataType: props.dataType
            }

        } catch (err) {
            console.log(err);
        }

    })
