import {useState} from "react";

export function Button() {
    const [num, setNum] = useState(0);

    return <button onClick={rand(num)}>
        {num}
    </button>
}

function rand(num) {
    num = Math.random() * 10
}