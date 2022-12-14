import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    *{
        padding: 0;
        margin: 0;
    }
`

export const GeneralContainer = styled.section `
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(45deg, red, #ff6600,#f63e75, #f9164b);
    background-size: 150%;
    min-height: 96vh;
    padding-top: 4vh;

    @keyframes gradient {
        0% {background-position: 100% 10%}
        20% {background-position: 80% 30%}
        40% {background-position: 60% 50%}
        60% {background-position: 40% 70%}
        80% {background-position: 20% 90%}
        100% {background-position: 0% 100%}
    }

    animation: gradient 3s ease infinite;

    button {
        cursor: pointer;
        border: none;
    }
    h1 {
        @media screen and (min-width: 800px) {
            font-size: 26px;
        }
        @media screen and (min-width: 420px) and (max-width: 800px) {
            font-size: 24px;
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
            font-size: 20px;
        }
    }
    h3 {
        color: black;
        @media screen and (min-width: 600px) {
            font-size: 24px;
        }
        @media screen and (min-width: 420px) and (max-width: 600px) {
            font-size: 21px;
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
            font-size: 20px;
        }
    }
    p {
        color: black;
        @media screen and (min-width: 600px) and (max-width: 1400px) {
            font-size: 18px;
        }
        @media screen and (min-width: 420px) and (max-width: 600px) {
            font-size: 16px;
        }
        @media screen and (min-width: 320px) and (max-width: 420px) {
            font-size: 14px;
        }
    }
`


export const ProfilesSection = styled.section `
    padding: 20px;
    margin: 0 auto;
    border-radius: 5px;
    background-color: white;

    @keyframes initialAnimation {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    animation: initialAnimation 3.5s;

    @media screen and (min-width: 1400px) {
        height: 79vh;
        width: 23vw;
    }
    @media screen and (min-width: 1200px)  and (max-width: 1400px) {
        height: 80vh;
        width: 32vw;
    }
    @media screen and (min-width: 1000px)  and (max-width: 1200px) {
        height: 80vh;
        width: 35vw;
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {
        height: 91vh;
        width: 50vw;
    }
    @media screen and (min-width: 600px) and (max-width: 800px) {
        height: 90vh;
        width: 70vw;
    }
    @media screen and (min-width: 480px) and (max-width: 600px) {
        height: 85vh;
        width: 80vw;
    }
    @media screen and (min-width: 320px) and (max-width: 480px) {
        height: 77vh;
        width: 80vw;
    }
`


