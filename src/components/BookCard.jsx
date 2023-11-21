export function BookCard({name, bookImg}) {
    return <div style={{display: "flex", borderRadius: "5px", border: "solid black 1px", justifyContent: "space-between", padding: "10px"}}>
        <h2>{name}</h2>
        <img src={bookImg} style={{borderRadius: "50%", width: "25px", height: "25px", marginLeft: "30px"}}/>
    </div>
}