export default class User {

    public userId: string;
    public nickName: string;
    public email: string;
    public password: string;
    public role: string;

    constructor(userId: string, nickName: string, email: string, password: string, role: string) {
        this.userId = userId;
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.role = role;

    }
};