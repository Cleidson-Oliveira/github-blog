import { Container } from "./style";
import { FaBuilding, FaExternalLinkAlt, FaGithub, FaUserFriends } from "react-icons/fa";

interface ProfileProps {}

export function Profile (props: ProfileProps) {

    return (
        <Container>
            <img src="https://avatars.githubusercontent.com/u/81466026?v=4" alt="" />
            
            <div>
                <header>
                    <h2>Cleidson Oliveira</h2>
                    <a href="">github <FaExternalLinkAlt /></a>
                </header>
                <div>
                    <p> Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass. </p>
                </div>
                <footer>
                    <p><FaGithub /> cleidsonolveira</p>
                    <p><FaBuilding /> Rocketseat</p>
                    <p><FaUserFriends /> 2 seguidores</p>
                </footer>
            </div>
        </Container>
    )
}