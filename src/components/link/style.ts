import styled from "styled-components";

export const Conteiner = styled.a`
    display: flex;
    align-items: center;
    gap: 8px;
    align-items: flex-start;
    text-transform: uppercase;
    font-weight: bold;
    color: ${({theme}) => theme.colors.blue};
    font-size: ${({theme}) => theme.fontSize.xs};
`;