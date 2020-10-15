import React from "react";
import styled from "styled-components";

import CharacterCard from "../Styles/CharacterCard";

export default function CharacterInfo ({character}){
    const {name,status,gender, image} = character;

    return (
        <div>
            <CharacterCard>
                <div>
                <CharName>{name}</CharName>
                <CharStatus>
                    <p>Status: {status}</p>
                    <p>Gender: {gender}</p>
                </CharStatus>
                </div>
                <img src={(image)}/>
            </CharacterCard>
        </div>
    );
}

export const CharStatus = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 0 0 0 10px
`

export const CharName = styled.h2`
    display: flex;
    text-align: center;
    margin: 10px 0 0 10px
`