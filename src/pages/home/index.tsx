import { Header } from "../../components/header";
import { PostList } from "../../components/postList";
import { Profile } from "../../components/profile";

export function Home () {

    return (
        <div>
            <Header />
            <Profile />
            <PostList />
        </div>
    )
}