import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
    width: 864px;
    margin: auto;
    margin-bottom: 40px;
`;

export const PostListHeader = styled.header`
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 12px;
    }

    h2 {
        ${({theme}) => css`
            color: ${theme.colors.base.subtitle};
            font-size: ${theme.fontSize.l};
        `}
    }

    span {
        ${({theme}) => css`
            color: ${theme.colors.base.span};
            font-size: ${theme.fontSize.s};
        `}
    }

    input{
        width: 100%;
        padding: 12px 16px;
        border-radius: 6px;
        color: ${({theme}) => theme.colors.base.text};

        ${({theme}) => css`
            background-color: ${theme.colors.base.input};
            border: 1px solid ${theme.colors.base.border};
        `}

        &::placeholder {
            color: ${({theme}) => theme.colors.base.label};
        }
        
        &:focus {
            border: 1px solid ${({theme}) => theme.colors.blue};
        }
        
        &:focus-visible {
            outline: none;
        }
    }
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 300px;
    max-width: 416px;
    height: 260px;
    padding: 32px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.base.post};

    header {
        display: flex;
        justify-content: space-between;
        gap: 16px;

        span {
            white-space: nowrap;

            ${({theme}) => css`
                color: ${theme.colors.base.span};
                font-size: ${theme.fontSize.s};
            `}
        }
        
        & > a {
            text-transform: capitalize;

            ${({theme}) => css`
                color: ${theme.colors.base.title};
                font-size: ${theme.fontSize.xl};
            `}
        }
    }

    div {
        & > p, h1, h2, h3, h4, h5, h6, span, a {

            line-height: 160%;
            font-weight: normal;

            ${({theme}) => css`
                color: ${theme.colors.base.text};
                font-size: ${theme.fontSize.m};
            `}
        }
    }
`;