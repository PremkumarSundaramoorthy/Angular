
export interface IUser
{
    emailAddress: string;
    pasword: string;
}

export interface ICurrentUser
{
    idToken: string,
    email: string,
    refershToken: string,
    expiresIn: string
}