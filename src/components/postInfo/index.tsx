import { Container } from "./style";
import { Link as CustonLink } from "../link";
import { FiArrowLeft } from "react-icons/fi"
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

interface PostInfoProps {}

export function PostInfo (props: PostInfoProps) {

    return (
        <Container>
            <header>
                <Link to="/">
                    <CustonLink><FiArrowLeft /> Voltar</CustonLink>
                </Link>
                <CustonLink href="">Ver no github <FaExternalLinkAlt /></CustonLink>
            </header>
            <h2>Título do post</h2>
            <footer>
                <span><FaGithub /> cledsonoliviera</span>
                <span><FaCalendarDay /> há 1 hora</span>
                <span><FaComment /> 2 comentários</span>
            </footer>
        </Container>
    )
}