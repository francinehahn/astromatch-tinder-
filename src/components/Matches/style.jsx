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


    @media screen and (min-width: 1500px) {   
        min-height: 72vh;
    }
    @media screen and (min-width: 1400px) and (max-width: 1500px) {   
        min-height: 71vh;
    }
    @media screen and (min-width: 1300px) and (max-width: 1400px) {   
        min-height: 73.6vh;
    }
    @media screen and (min-width: 1200px) and (max-width: 1300px) {   
        min-height: 73.8vh;
    }
    @media screen and (min-width: 1000px) and (max-width: 1200px) {   
        min-height: 68vh;
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {   
        min-height: 80.3vh;
    }
    @media screen and (min-width: 650px) and (max-width: 800px) {   
        min-height: 79.8vh;
    }
    @media screen and (min-width: 600px) and (max-width: 650px) {   
        min-height: 79vh;
    }
    @media screen and (min-width: 500px) and (max-width: 600px) {
        min-height: 75vh;
    }
    @media screen and (min-width: 420px) and (max-width: 500px) {
        min-height: 68vh;
    }
    @media screen and (min-width: 390px) and (max-width: 420px) {
        min-height: 68.6vh;
    }
    @media screen and (min-width: 320px) and (max-width: 390px) {
        min-height: 71.3vh;
    }
`


export const ContainerMatches = styled.section `
    display: grid;
    grid-template-columns: 70% 30%;
    align-content: flex-start;

    @media screen and (min-width: 1400px) {   
        min-height: 73vh;
    }
    @media screen and (min-width: 1200px) and (max-width: 1400px) {   
        min-height: 74.6vh;
    }
    @media screen and (min-width: 1100px) and (max-width: 1200px) {   
        min-height: 73.7vh;
    }
    @media screen and (min-width: 1000px) and (max-width: 1100px) {   
        min-height: 73.5vh;
    }
    @media screen and (min-width: 800px) and (max-width: 1000px) {   
        min-height: 81vh;
    }
    @media screen and (min-width: 650px) and (max-width: 800px) {   
        min-height: 82.5vh;
    }
    @media screen and (min-width: 500px) and (max-width: 650px) {   
        min-height: 76vh;
    }
    @media screen and (min-width: 400px) and (max-width: 500px) {
        min-height: 69.9vh;
    }
    @media screen and (min-width: 320px) and (max-width: 400px) {
        min-height: 70vh;
    }
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
