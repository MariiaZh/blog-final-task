import User from "../models/User";

type DataType = {
    arrayOfUsers: User[],
    email: string,
    password?: string,
    nickName?: string
}

export const CompareExistingUsersWithInputFields = (props: DataType) => {

    const currentUser: User | void = props.arrayOfUsers.find(user => user.email === props.email);

    if (!currentUser) {
        return {
            status: "error",
            message: "Sorry, this email doesn't exist. Please, select 'Create New Account' for registration!"
        }
    } else {
        if (currentUser.password !== props.password) {
            return {
                status: "error",
                message: "Sorry, this password is wrong. Try again!"
            }
        } else {
            return {
                status: "success",
                message: "Your account verificated!"
            }
        }
    }

}

export const CompareNewUserWithExisting = (props: DataType) => {

    if (props.arrayOfUsers.find(user => user.email === props.email)) {
        return {
            status: "error",
            message: "Sorry, this email has already exist. Please, choose anothe email for registration!"
        }
    } else if (props.arrayOfUsers.find(user => user.nickName === props.nickName)) {
        return {
            status: "error",
            message: "Sorry, this password is wrong. Try again!"
        }
    } else {
        return {
            status: "success",
            message: "Your account is approved!"
        }
    }
}



