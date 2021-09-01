import axios from "axios";
import { deprecationHandler } from "moment";
import React, { useEffect, useState } from "react"
import YaziListesi from "./YaziListesi"
import { Button } from 'semantic-ui-react'
import YaziYorumlari from "./YaziYorumlari";


const YaziDetayi = (props) => {
    const { id } = props.match.params;
    const [yaziDetayi, setYaziDetayi] = useState({});
    const [yorumlar, setYorumlar] = useState([]);
    // const [display_name,setDisplay_name]=useState("")
    // const [body,setBody]=useState("")


    const handleCommentSubmit = (event,yorum) => {
        event.preventDefault();
        axios.post(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`, yorum)
            .then(response => {
                setYorumlar([...yorumlar,response.data])
            })
            .catch(error=>{
                console.log(error)
            })
    }
   
    useEffect(() => {

        axios.all([
           axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`),
            axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
        ])
        .then(responses=>{
           
            setYaziDetayi(responses[0].data)
            setYorumlar(responses[1].data)
        })
        .catch(error=>{
            console.log(error)
        })
        // axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}`)
        //     .then((response) => {
        //         setYaziDetayi(response.data)
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })

        // axios.get(`https://react-yazi-yorum.herokuapp.com/posts/${id}/comments`)
        //     .then((response) => {
        //         setYorumlar(response.data)
        //     })
    }, []);
    return (
        <React.Fragment>
            <h2 className="ui header">{yaziDetayi.title}</h2>
            <p>{yaziDetayi.created_at}</p>
            <p>{yaziDetayi.content}</p>
            <YaziYorumlari yorumlar={yorumlar} handleSubmit={handleCommentSubmit}/>
            {/*
            //Yorumlar
            //Yorumlar Listesi
            //Yorum Yazma Formu
            */ }
           
          
        </React.Fragment>
    )
}

export default YaziDetayi;