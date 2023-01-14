import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    top: -5.5rem;
`;

export const PostContent = styled.div`
    width: 864px;
    padding: 40px 32px;
    margin: auto;

    font-size: ${({theme}) => theme.fontSize.m};

    p, span {
        color: ${({theme}) => theme.colors.base.text};
        font-size: inherit;
    }

    a {
        color: ${({theme}) => theme.colors.blue};
        font-size: inherit;
    }

    h1, h2, h3, h4, h5, h6 {
        color: ${({theme}) => theme.colors.base.title};
        margin-top: 16px;
        margin-bottom: 8px;
    }

    @media screen and (max-width: 600px){
        width: unset;
    }
`;