export type PostType = {
    id: number,
    message: string,
    likesCounter: number
}
export type ContactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    mainLink: string,
}
export type PhotosType = {
    small: string | null,
    large: string | null
}
export type ProfileDataType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: ContactsType,
    photos: PhotosType,
    aboutMe: string
}
export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
}
export type DialogType = {
    id: number,
    name: string,
    img: string
}
export type MessagesType = {
    id: number,
    message: string
}