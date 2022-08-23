import React from 'react'
import {HeaderSection} from './style'
import iconPeople from '../../img/match-icon.png'
import iconArrow from '../../img/icon-arrow.png'


export function Header(props) {

    return (
        <HeaderSection>
            {props.showMatches? (
                <button onClick={() => props.setShowMatches(false)}>
                    <img src={iconArrow} alt={'ícone de uma seta'}/>
                </button>
            ) : (
                <button onClick={() => props.setShowMatches(true)}>
                    <img src={iconPeople} alt={'ícone de match entre duas pessoas'}/>
                </button>
            )}

            <div>
                <h1>astromatch</h1>
            </div>
        </HeaderSection>
    )
}