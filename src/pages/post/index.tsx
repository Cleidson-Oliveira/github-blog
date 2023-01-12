import { Header } from "../../components/header";
import { PostInfo } from "../../components/postInfo";

interface PostProps {}

export function Post (props: PostProps) {

    return (
        <div>
            <Header />
            <PostInfo />
        </div>
    )
}