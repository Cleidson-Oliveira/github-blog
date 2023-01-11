import Logo from "../../assets/logo.svg";
import { Container } from "./style";

interface HeaderProps {}

export function Header (props: HeaderProps) {

    return (
        <Container>
            <img src={Logo} alt="Logo github blog" />
        </Container>
    )
}