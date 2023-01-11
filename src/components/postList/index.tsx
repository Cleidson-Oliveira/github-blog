import { useState } from "react";
import { Card, Container, PostListHeader } from "./style";

interface PostListProps {}

export function PostList (props: PostListProps) {

    const [ posts , setPosts ] = useState([
        {
            title: "JavaScript data types and data structures",
            text: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in",
        },
        {
            title: "JavaScript data types and data structures",
            text: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in",
        },
        {
            title: "JavaScript data types and data structures",
            text: "Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in",
        },
    ])

    return (
        <Container>
            <PostListHeader>
                <div>
                    <h2>Publicações</h2>
                    <span>6 publicações</span>
                </div>
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                />
            </PostListHeader>
            {!!posts && posts.map((post, index) => (
                <Card key={index}>
                    <header>
                        <h2>{post.title}</h2>
                        <span>Há 1 hora</span>
                    </header>
                    <p>{post.text}</p>
                </Card>
            ))}
        </Container>
    )
}