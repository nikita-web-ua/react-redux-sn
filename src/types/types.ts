export type postType = {
    id: number,
    message: string,
    likesCounter: number
}
export type contactsType = {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    mainLink: string,
}
export type photosType = {
    small: string | null,
    large: string | null
}
export type profileDataType = {
    userId: number,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    contacts: contactsType,
    photos: photosType
}
export type userType = {
    id: number,
    name: string,
    status: string,
    photos: photosType
}