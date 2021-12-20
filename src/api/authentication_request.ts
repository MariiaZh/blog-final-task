import { createAsyncThunk } from "@reduxjs/toolkit";

type Auth = {
    email: string,
    password: string,
    newAcc: boolean
}

const authenticationRequest = createAsyncThunk(
    'userAuth/authenticationRequest',

    async (props: Auth) => {

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDe5LikvHnGOBiXi4GrVbuvGuIS8Aaxh2M'

        console.log(' isAuth:REQUEST')
        if (props.newAcc) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDe5LikvHnGOBiXi4GrVbuvGuIS8Aaxh2M'
        }

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify({
                    email: props.email,
                    password: props.password,
                    returnSecureToken: true,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error("Something went wrong...");
            }
            const data = await response.json();
            return data.localId;
        } catch (err) {
            console.log(err);
        }
    });

export default authenticationRequest;
