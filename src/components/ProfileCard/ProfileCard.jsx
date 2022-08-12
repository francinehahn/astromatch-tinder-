import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Card, Photo, ButtonSection, MatchTitle, Loading} from './style'
import iconx from '../../img/icon-x.png'
import iconheart from '../../img/iconheart.png'
import loading from '../../img/loading.png'


export function ProfileCard() {

    const [user, setUser] = useState([])
    const [isMatch, setIsMatch] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    //Escolher um novo perfil perfil toda vez que clica no like ou deslike
    const chooseProfile = () => {
        setIsLoading(true)
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/person').then(response => {
            
            if(response.data.profile === null) {
                axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/clear`).then(() => {
                    setIsLoading(false)
                    alert('Atenção: Você vizualisou todos os perfis disponíveis e por isso seus matches serão resetados.')
                }).catch(err => {
                    setIsLoading(false)
                    alert(`Houve um erro: ${err}`)
                })
            } else {
                setIsLoading(false)
                setUser(response.data.profile)
            } 

        }).catch(err => alert(`Erro: ${err}`))
    }


    useEffect(() => {chooseProfile()}, [])
   
    //Dar like ou deslike em um usuário
    const choosePerson = (body) => {
        axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/francine-hahn-barros/choose-person',
        body).then(response => {
            if (response.data.isMatch === true) {
                setIsMatch(true)
            } else {
                setIsMatch(false)
            }
            chooseProfile()
        }).catch(err => alert(`Erro: ${err}`))
    }

    //Quando usuário clica no deslike
    const handleDeslike = () => {
        const body = {
            id: user.id,
            choice: false
        }
        choosePerson(body)
    }


    //Quando usuário clica no like
    const handleLike = () => {
        const body = {
            id: user.id,
            choice: true
        }
        choosePerson(body)
    }


    return (
        <Card>
            {isMatch && <MatchTitle>It's a match!!</MatchTitle>}
            
            {isLoading && (
                <Loading src={loading} alt={'Círculo girando'}/>
            )}
            
            {!isLoading && user && (
            <>
                <Photo src={user.photo} alt={user.photo_alt}/>
                <section>
                    <h3>{user.name}, {user.age}</h3>
                    <p>{user.bio}</p>
                </section>
                <ButtonSection>
                    <button onClick={handleDeslike}>
                        <img src={iconx} alt={'Ícone com um x representasndo um deslike'}/>
                    </button>
                    <button onClick={handleLike}>
                        <img src={iconheart} alt={'Ícone com um coração representando um like'}/>
                    </button>
                </ButtonSection>
            </>
            )}
        </Card>
    )
}