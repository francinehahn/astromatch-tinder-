import styled from "styled-components";


export const NoMatches = styled.div `
    p {
        text-align: center;
        @media screen and (min-width: 1000px) {
            margin: 3vh 1vw;
        }
        @media screen and (min-width: 320px) and (max-width: 1000px) {
            margin: 3vh 3vw;
        }
    }
    img {
        width: 20%;
        display: block;
        margin: 0 auto;
        @keyframes beatingHeart {
            from {
                width: 20%;
                opacity: .7;
            }
            to {
                width: 23%;
                opacity: 1;
            }
        }
        animation: beatingHeart .6s ease infinite;
    }
`

export const ContainerMatches = styled.section `
    display: grid;
    max-height: 70vh;
    grid-template-columns: 70% 30%;
    align-content: flex-start;
    overflow-y: scroll;
`

export const DeleteButton = styled.button `
    border-radius: 5px;
    background-color: white;
    display: flex;
    align-items: flex-start;
    height: 10%;
    img {
        :hover {
            @keyframes opacity {
                from {opacity: .4}
                to {opacity: 1}
            }
            animation: opacity 2s;
        }
        @media screen and (min-width: 1400px) {
            width: 2vw;
            margin: 2vh 0 0 2vw;
        }
        @media screen and (min-width: 1200px) and (max-width: 1400px) {
            width: 2.5vw;
            margin: 2vh 0 0 7vw;
        }
        @media screen and (min-width: 1000px) and (max-width: 1200px) {
            width: 3vw;
            margin: 2vh 0 0 5vw;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            width: 4vw;
            margin: 2vh 0 0 9vw;
        }
        @media screen and (min-width: 600px) and (max-width: 800px) {
            width: 5vw;
            margin: 2vh 0 0 13vw;
        }
        @media screen and (min-width: 500px) and (max-width: 600px) {
            width: 6vw;
            margin: 2vh 0 0 10vw;
        }
        @media screen and (min-width: 320px) and (max-width: 500px) {
            width: 6vw;
            margin: 2vh 0 0 9vw;
        }
    }
`

export const CardMatches = styled.section `
    display: flex;
    gap: 15px;
    align-items: center;

    @media screen and (min-width: 1200px) {
        margin: 1vw;
    }
    @media screen and (min-width: 600px) and (max-width: 1200px) {
        margin: 3vw;
    }
    @media screen and (min-width: 320px) and (max-width: 600px) {
        margin: 3vh 5vw;
    }

    img {
        border-radius: 50%;
        @media screen and (min-width: 1300px) {
            width: 3vw;
            height: 7vh;
        }
        @media screen and (min-width: 1200px) and (max-width: 1300px) {
            width: 4vw;
            height: 7vh;
        }
        @media screen and (min-width: 1000px) and (max-width: 1200px) {
            width: 4vw;
            height: 6.5vh;
        }
        @media screen and (min-width: 800px) and (max-width: 1000px) {
            width: 6vw;
            height: 6vh;
        }
        @media screen and (min-width: 500px) and (max-width: 800px) {
            width: 9vw;
            height: 6vh;
        }
        @media screen and (min-width: 320px) and (max-width: 500px) {
            width: 10vw;
            height: 6vh;
        }
    }
`

export const Loading = styled.img `
    display: block;
    margin: 25vh auto 0 auto;
    width: 20%;
    
    @keyframes spin {
        from {transform: rotate(0)}
        to {transform: rotate(360deg)}
    }
    animation: spin 1.5s infinite;
`
