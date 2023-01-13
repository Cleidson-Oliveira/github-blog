import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Container } from "./style";

interface LoadingProps {}

export function Loading (props: LoadingProps) {

    return (
        <Container>
            <AiOutlineLoading3Quarters />
        </Container>
    )
}