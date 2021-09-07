import React, { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { api } from "../api";
import YaziFormu from "./YaziFormu"
const YaziDuzenle=(props)=>{
    const[yazi,setYazi]=useState({});
    const {id}=props.match.params;
   
    useEffect(()=>{
        api().get(`/posts/${id}`).then(response=>{
            setYazi({title:response.data.title,content:response.data.content})
        })
    },[])
    return(
        <div>
            <h2>Yazı Düzenleme Formu</h2>
            <YaziFormu yazi={yazi}/>
        </div>
    )
}

export default YaziDuzenle;