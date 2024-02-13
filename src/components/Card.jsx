import {useState} from "react";
import './Styly.css';
export function Card({title, content}) {
    const [upVote, setUpVote] = useState(0)
    const [downVote, setDownVote] = useState(0)

    const upVoteClick = () => {
        setUpVote(upVote + 1)
    }
    const downVoteClick = () => {
        setDownVote(downVote - 1)
    }
    return <div>
        <div style={{display: "flex", margin: "10px", gap: "20px", backgroundColor: "gray"}}>
            <div>
                <div>{title}</div>
                <div>{content}</div>
            </div>
            <button className={"button-24"} onClick={() => upVoteClick()}>Upvote {upVote}</button>
            <button className={"button-24"} onClick={() => downVoteClick()}>Downvote {downVote}</button>
        </div>
    </div>
}