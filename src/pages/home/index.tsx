import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components/header";
import { PostList } from "../../components/postList";
import { Profile } from "../../components/profile";
import { Conteiner } from "./style";
import { Loading } from "../../components/loading";

interface ProfileInfo {
    avatar_url: string | null,
    name: string | null,
    html_url: string | null,
    bio: string | null,
    login: string | null,
    company: string | null,
    followers: number | null,
}

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

export function Home () {

    const [ loading, setLoading ] = useState<boolean>(true);
    const [ profileInfo, setProfileInfo ] = useState<ProfileInfo | null>(null);
    const [ posts , setPosts ] = useState<Post[]>([] as Post[]);

    useEffect(() => {
        const profileInfo = axios.get("https://api.github.com/users/Cleidson-Oliveira")
        const posts = axios.get("https://api.github.com/search/issues?q=repo:Cleidson-Oliveira/github-blog")

        Promise.all([profileInfo, posts])
        .then(values => {
            setProfileInfo(values[0].data);
            setPosts(values[1].data.items);
            setLoading(false);
        })
        .catch(err => console.log(err))
        
    }, [])

    return (
        <div>
            <Header />
            { !loading 
                ? <Conteiner>
                    <Profile profileInfo={profileInfo!} />
                    <PostList posts={posts}/>
                </Conteiner>
                : <Loading />
            }
        </div>
    )
}