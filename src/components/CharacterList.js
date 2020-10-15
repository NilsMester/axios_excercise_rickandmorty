import React, {useEffect} from "react";
import axios from "axios";


export default function CharacterList(){
    useEffect(()=> {
       let url = "https://rickandmortyapi.com";
       axios.get(url + "/api/character")
           .then(console.log);
    }, []);
    return (<div>


    </div>)
}