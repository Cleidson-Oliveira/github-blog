import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 450px;
    padding: 30px;
    margin: auto;
    border-radius: 10px;
    background: #09203a;

    p {
        text-align: center;
        font-size: ${({theme}) => theme.fontSize["2xl"]};
        color: ${({theme}) => theme.colors.base.title};
    }
`;