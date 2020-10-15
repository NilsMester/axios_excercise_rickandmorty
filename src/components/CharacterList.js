import React, {useEffect, useState} from "react";
import axios from "axios";


export default function CharacterList(){
    const [characters, setCharacters] = useState([]);
    useEffect(()=> {
       let url = "https://rickandmortyapi.com";
       axios.get(url + "/api/character")
           .then((response) =>
               setCharacters(response.data.results))

    }, []);
    return (<div>
        {
            characters.map(character => <div>{character.name}</div>)
        }
    </div>)
}