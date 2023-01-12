import { ReactNode, AnchorHTMLAttributes } from "react";
import { Conteiner } from "./style";

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode,
}

export function Link ({children, ...rest}: LinkProps) {

    return (
        <Conteiner {...rest}>
            {children}
        </Conteiner>
    )
}