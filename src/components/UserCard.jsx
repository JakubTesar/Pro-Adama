export function UserCard({name, age, bookCount, level, userPP}) {
    return <div style={{display: "flex", borderRadius: "5px", border: "solid black 1px", padding: "10px"}}>
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
            <p>{bookCount}</p>
            <p>{level}</p>
        </div>
        <img src={userPP} style={{borderRadius: "50%", width: "25px", height: "25px"}}/>
    </div>
}