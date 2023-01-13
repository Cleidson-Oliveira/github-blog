import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from {
        transform: rotateZ(0deg);
    }
    to {
        transform: rotateZ(360deg);
    }
`;

export const Container = styled.div`
    position: relative;
    top: -55px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    margin: auto;
    border-radius: 10px;
    background: #09203a;

    svg {
        width: 20%;
        height: 20%;
        color: white;
        line-height: 1rem;
        animation: ${spin} 1s ease infinite;
    }
`;