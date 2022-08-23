import React, {useState} from 'react'
import axios from 'axios'
import {url} from '../../constants/constants'
import { useRequestData } from '../../hooks/useRequestData'
import {Card, Photo, ButtonSection, MatchTitle, Loading} from './style'
import iconx from '../../img/icon-x.png'
import iconheart from '../../img/iconheart.png'
import loading from '../../img/loading.png'


export function ProfileCard() {
    const [isMatch, setIsMatch] = useState(false)
    const [user, isLoading, setIsLoading, error, updateData, setUpdateData, request, setRequest] = useRequestData(`${url}person`)
    
    //Verificando se há um match
    const choosePerson = (body) => {
        setIsLoading(true)
        axios.post(`${url}choose-person`, body).then(response => {
            setIsLoading(false)
            if (response.data.isMatch === true) {
                setIsMatch(true)
            } else {
                setIsMatch(false)
            }
        }).catch(err => {
            setIsLoading(false)
            alert(`Erro: ${err}`)
        })
        setRequest(!request)
    }

    //Quando usuário clica no deslike
    const handleDeslike = () => {
        const body = {
            id: user.profile.id,
            choice: false
        }
        choosePerson(body)
    }


    //Quando usuário clica no like
    const handleLike = () => {
        const body = {
            id: user.profile.id,
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
            
            {!isLoading && !error && user.profile && (
                <>
                    <Photo src={user.profile.photo} alt={user.profile.photo_alt}/>
                    <section>
                        <h3>{user.profile.name}, {user.profile.age}</h3>
                        <p>{user.profile.bio}</p>
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

            {!isLoading && error && (
                <>
                    <p>Houve o seguinte erro:</p>
                    <p>{error}</p>
                </>
            )}
        </Card>
    )
}