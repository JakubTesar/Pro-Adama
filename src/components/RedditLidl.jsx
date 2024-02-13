import './Styly.css';
import {useState} from "react";
import {Card} from "./Card";

export function RedditLidl() {
    const data = [
        {
            "title": "AAA",
            "content": 111,
            "id": 1,
        },
        {
            "title": "BBB",
            "content": 222,
            "id": 2,
        },
        {
            "title": "CCC",
            "content": 333,
            "id": 3,
        },
        {
            "title": "DDD",
            "content": 444,
            "id": 4,
        },
        {
            "title": "EEE",
            "content": 555,
            "id": 5,
        },
    ]
    const [favs, setFavs] = useState([])
    const setFavsClick = (c) => {
        if (favs.find(e => e.id === c.id)) {
            setFavs(favs.filter(item => item.id !== c.id))
        } else {
             setFavs([...favs, c])
        }
    }
    return (
        <div>
            <div>
                <h1>Favourites</h1>
                {favs.map((c) => (<div style={{display: "flex", margin: "10px", gap: "20px", backgroundColor: "gray"}}>
                        <Card title={c.title} content={c.content} style={{backgroundColor: "black"}}></Card>
                        <button className={"button-24"} onClick={() => setFavsClick(c)}>♥</button>
                    </div>)
                )}
            </div>
            <div>
                <div>
                    <h1>All</h1>
                    {data.map((c) => (
                        <div style={{display: "flex", margin: "10px", gap: "20px", backgroundColor: "gray"}}>
                            <Card title={c.title} content={c.content} style={{backgroundColor: "black"}}></Card>
                            <button className={"button-24"} onClick={() => setFavsClick(c)}>♥</button>
                        </div>)
                    )}
                </div>
                <h2>{favs.length} ♥</h2>
            </div>
        </div>
    )
}
