import styled, { css } from "styled-components";

export const Container = styled.div`
    position: relative;
    top: -5.5rem;
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 864px;
    padding: 32px 40px;
    margin: auto;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.base.profile};

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h2 {
        margin-top: 12px;
        ${({theme}) => css`
            color: ${theme.colors.base.title};
            font-size: ${theme.fontSize["2xl"]};
        `}
    }

    footer {
        display: flex;
        gap: 24px;

        span {
            display: flex;
            align-items: center;
            gap: 8px;

            ${({theme}) => css`
                color: ${theme.colors.base.text};
                font-size: ${theme.fontSize.m};
            `}
        }

        svg {
            color: ${({theme}) => theme.colors.base.label};
        }
    }
`