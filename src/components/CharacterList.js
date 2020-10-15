import React, {useEffect, useState} from "react";
import axios from "axios";
import CharacterInfo from "./CharacterInfo";


export default function CharacterList(){

    const [characters, setCharacters] = useState([]);

    useEffect(()=> {
        let url = "https://rickandmortyapi.com";
        axios.get(url + "/api/character")
            .then((response) =>
                setCharacters(response.data.results))

    }, []);

    return (
        <main>
            {
                characters.map(character => <CharacterInfo key={character.id} character={character}/>)}
        </main>);
}