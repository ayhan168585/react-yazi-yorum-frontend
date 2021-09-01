import React, { useState } from "react"
import { Button } from "semantic-ui-react"

const YORUM_BASLANGIC={
    display_name: "", 
    body: "",
}

const YorumFormu=(props)=>{
    const [yorum, setYorum] = useState(YORUM_BASLANGIC )
    
    //setYorum(YORUM_BASLANGIC)

    const handleOnChange = event => {
        setYorum({ ...yorum, [event.target.name]: event.target.value })
    }

    return (
        <React.Fragment>
             <h3>Yorum yaz</h3>
            <form className="ui form" onSubmit={(event)=>{props.handleSubmit(event,yorum)
            setYorum(YORUM_BASLANGIC)
        }}>
                <div className="ui small icon input">
                    <input type="text" placeholder="Adınız" onChange={handleOnChange} value={yorum.display_name} name="display_name" />
                </div>
                <textarea placeholder="Yorumunuz" rows="3" onChange={handleOnChange} value={yorum.body} name="body"></textarea>
                <Button color='blue' type="submit">Yorum gönder</Button>
            </form>
        </React.Fragment>
    )
}

export default YorumFormu;