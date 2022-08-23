import React from 'react'
import axios from 'axios'
import {url} from '../../constants/constants'
import {CardMatches, ContainerMatches, NoMatches, DeleteButton, Loading} from './style'
import iconBrobekHeart from '../../img/icon-broken-heart.png'
import iconDelete from '../../img/iconDelete.png'
import { useRequestData } from '../../hooks/useRequestData'
import loading from '../../img/loading.png'


export function Matches() {
    const [data, isLoading, setIsLoading, error, updateData, setUpdateData] = useRequestData(`${url}matches`)

    //Limpar matches e perfis vistos
    const handleClear = () => {
        const confirmation = confirm('Tem certeza que quer excluir os seus matches?')
        confirmation === true && (
            axios.put(`${url}clear`).then(() => {
                setUpdateData(!updateData)
                alert('Seus matches foram excluidos')
            }).catch(err => alert(`Erro: ${err}`))
        )
    }
    
    return (
        <section>
            {isLoading && <Loading src={loading} alt={'Círculo girando'}/>}
            
            {!isLoading && !error && data.matches.length===0 && (
                <NoMatches>
                    <p>Você ainda não possui matches.</p>
                    <img src={iconBrobekHeart} alt={'Imagem de um coração partido'}/>
                </NoMatches>
            )}
            
            {!isLoading && !error && data.matches.length > 0 && (
                <ContainerMatches>
                    <section>
                        {data.matches.map((item, index) => {
                            return (
                                <CardMatches key={index}>
                                    <img src={item.photo} alt={item.photo_alt}/>
                                    <p>{item.name}</p>
                                </CardMatches>
                            )
                        })}
                    </section>
                    <DeleteButton onClick={handleClear}>
                        <img src={iconDelete} alt={'Ícone de uma lixeira'}/>
                    </DeleteButton>
                </ContainerMatches>
            )}

            {!isLoading && error && (
                <>
                    <p>Houve o seguinte erro:</p>
                    <p>{error}</p>
                </>
            )}
        </section>
    )
}