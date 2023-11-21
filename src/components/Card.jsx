import {Button} from "./Button";
import {UserCard} from "./UserCard";
import {BookCard} from "./BookCard";

export function Card({imgSrc}){
    return <div>
        <h1>Roll dice</h1>
        <img src={imgSrc}/>
        <div style={{margin: "200px"}}>
            <UserCard name={"Pepik"} userPP={"https://cards.scryfall.io/large/front/0/0/00042443-4d4e-4087-b4e5-5e781e7cc5fa.jpg?1562894988"} age={55} bookCount={69} level={3}></UserCard>
            <BookCard name={"1984"} bookImg={"https://cards.scryfall.io/large/front/0/0/000ba9c3-cd88-47c1-966a-00466569a9bf.jpg?1562864254"}></BookCard>
        </div>
        <div style={{margin: "200px"}}>
            <UserCard name={"Pepik"} userPP={"https://cards.scryfall.io/large/front/0/0/00042443-4d4e-4087-b4e5-5e781e7cc5fa.jpg?1562894988"} age={55} bookCount={69} level={3}></UserCard>
            <BookCard name={"1984"} bookImg={"https://cards.scryfall.io/large/front/0/0/000ba9c3-cd88-47c1-966a-00466569a9bf.jpg?1562864254"}></BookCard>
        </div>
        <div style={{margin: "200px"}}>
            <UserCard name={"Pepik"} userPP={"https://cards.scryfall.io/large/front/0/0/00042443-4d4e-4087-b4e5-5e781e7cc5fa.jpg?1562894988"} age={55} bookCount={69} level={3}></UserCard>
            <BookCard name={"1984"} bookImg={"https://cards.scryfall.io/large/front/0/0/000ba9c3-cd88-47c1-966a-00466569a9bf.jpg?1562864254"}></BookCard>
        </div>

        <Button>Roll</Button>
    </div>
}