import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { filterPosts } from "../../utils/filterPosts";
import { findCreationPostTime } from "../../utils/findCreationPostTime";
import { Card, Container, PostListHeader } from "./style";
import { Link } from "react-router-dom";
import { EmptyList } from "../emptyList";

interface Post {
    number: number,
    title: string,
    html_url: string,
    comments: number,
    created_at: string,
    body: string,
    user: {
        login: string,
    }
}

interface PostListProps {
    posts: Post[]
}

export function PostList ({ posts }: PostListProps) {

    const [ filter , setFilter ] = useState("");

    const filteredPosts = filter == "" 
    ? posts 
    : posts.filter(post => {
        return (filterPosts(filter, post.body) || filterPosts(filter, post.title))
    })

    const formatCreatePostTime = (createdAt: string) => {
        const dayInHours = 24;
        const monthInHours = dayInHours * 30;
        const yearsInHours = dayInHours * 365;

        const time = findCreationPostTime(createdAt);

        if (time > yearsInHours) {
            const timeInYears = Math.floor(time / yearsInHours);

            return `Há ${timeInYears} ${timeInYears > 1 ? "anos" : "ano"}`;
        }

        if (time > monthInHours) {
            const timeInMonths = Math.floor(time / monthInHours);

            return `Há ${timeInMonths} ${timeInMonths > 1 ? "meses" : "mês"}`;
        }
        
        if (time > dayInHours) {
            const timeIndays = Math.floor(time / dayInHours);

            return `Há ${timeIndays} ${timeIndays > 1 ? "dias" : "dia"}`;
        }
        
        return `Há ${time} ${time > 1 ? "horas" : "hora"}`;
    }

    return (
        <Container>
            <PostListHeader>
                <div>
                    <h2>Publicações</h2>
                    { filteredPosts && 
                        <span>{filteredPosts.length} {filteredPosts.length != 1 ? "publicações" : "publicação"}</span>
                    }
                </div>
                <input
                    type="text"
                    placeholder="Buscar conteúdo"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </PostListHeader>
            {(!!filteredPosts) && filteredPosts.map(post => (
                <Card key={post.number}>
                    <header>
                        <Link to={"/post/" + post.number}>{post?.title}</Link>
                        <span>{formatCreatePostTime(post.created_at)}</span>
                    </header>
                    <div>
                        <ReactMarkdown>{post?.body.slice(0, 200) + " ..."}</ReactMarkdown>
                    </div>
                </Card>
            ))}
            {filteredPosts.length === 0 && <EmptyList />}
        </Container>
    )
}