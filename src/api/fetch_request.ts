import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'articlesWorker/fetchData',

    async (dataPart: string) => {
        try {
            const response = await fetch(`https://critic-s-gaze-default-rtdb.europe-west1.firebasedatabase.app/${dataPart}.json`)
            if (!response.ok) {
                throw new Error("Something went wrong...");
            }
            const data = await response.json();
            return {
                dataType: dataPart,
                data: data
            }
        } catch (err) {
            console.log(err)
        }
    }
)