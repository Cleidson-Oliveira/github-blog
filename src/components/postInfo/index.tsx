import { Container } from "./style";
import { Link as CustonLink } from "../link";
import { FiArrowLeft } from "react-icons/fi"
import { FaCalendarDay, FaComment, FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { findCreationPostTime } from "../../utils/findCreationPostTime";

interface PostInfoProps {
    title: string,
    htmlUrl: string,
    comments: number,
    createdAt: string,
    user: string,
}

export function PostInfo (props: PostInfoProps) {

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
            <header>
                <Link to="/">
                    <FiArrowLeft /> Voltar
                </Link>
                <CustonLink 
                    href={props.htmlUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ver no github 
                    <FaExternalLinkAlt />
                </CustonLink>
            </header>
            <h2>{props.title}</h2>
            <footer>
                <span><FaGithub /> {props.user}</span>
                <span><FaCalendarDay /> {formatCreatePostTime(props.createdAt)}</span>
                { !!props.comments && <span><FaComment /> {props.comments} comentários</span>}
            </footer>
        </Container>
    )
}