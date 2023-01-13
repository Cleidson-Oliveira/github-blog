import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 32px;
    width: 864px;
    padding: 32px 40px;
    margin: auto;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.base.profile};

    & > div {
        position: relative;
        margin: 10px 0;
    }

    img {
        width: 148px;
        height: 148px;
        border-radius: 8px;
    }

    h2 {
        margin-bottom: 8px;
        ${({theme}) => css`
            color: ${theme.colors.base.title};
            font-size: ${theme.fontSize["2xl"]};
        `}
    }
    
    p {
        ${({theme}) => css`
            color: ${theme.colors.base.text};
            font-size: ${theme.fontSize.m};
        `}
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    footer {
        position: absolute;
        bottom: 0;
        display: flex;
        gap: 24px;

        p {
            display: flex;
            align-items: center;
            gap: 8px;
        }

        svg {
            color: ${({theme}) => theme.colors.base.label};
        }
    }
`;