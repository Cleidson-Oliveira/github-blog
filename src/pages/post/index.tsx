import axios from "axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router-dom";
import { Header } from "../../components/header";
import { Loading } from "../../components/loading";
import { PostInfo } from "../../components/postInfo";
import { Container, PostContent } from "./style";

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

export function Post () {

    const [ postData, setPostData ] = useState<Post | null>(null);

    let { postId } = useParams();

    useEffect(() => {
        axios.get(`https://api.github.com/repos/Cleidson-Oliveira/github-blog/issues/${postId}`)
        .then(res => setPostData(res.data))
    }, [postId])

    return (
        <div>
            <Header />
            { postData
                ? <Container>
                    <PostInfo 
                        title={postData.title}
                        htmlUrl={postData.html_url}
                        user={postData.user.login}
                        comments={postData.comments}
                        createdAt={postData.created_at}
                    />
                    <PostContent>
                        <ReactMarkdown>{postData?.body!}</ReactMarkdown>
                    </PostContent>
                </Container>
                : <Loading />
            }
            
        </div>
    )
}