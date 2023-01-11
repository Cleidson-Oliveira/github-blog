export const filterPosts = (filter: string, post: string) => {
    return post.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
}