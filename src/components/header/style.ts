import styled from "styled-components";

import HeaderBG from "../../assets/header-bg.png";

export const Container = styled.header`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 269px;
    padding-top: 64px;
    background-image: url(${HeaderBG});
    background-repeat: no-repeat;
    background-size: cover;
    box-sizing: content-box;

    & > img {
        width: 148px;
        height: 98px;
    }
`;