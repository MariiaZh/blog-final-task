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

        if (props.newAcc) {
            console.log("sign up from auth-api!!!")
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
                throw new Error("Wrong credentials...");
            }

            const data = await response.json();
            console.log("succses answer from firebase", data);
            return data.localId;
        } catch (err) {
            console.log(err);
            return { error: err };
        }
    });

export default authenticationRequest;
