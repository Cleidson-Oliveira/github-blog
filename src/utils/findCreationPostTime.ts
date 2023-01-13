export const findCreationPostTime = (createdAt: string) => {

    const postCreatedTime = Date.now() - Date.parse((createdAt));
    const postCreatedTimeInHours = postCreatedTime /1000 /60 /60;    

    return Math.floor(postCreatedTimeInHours)
}