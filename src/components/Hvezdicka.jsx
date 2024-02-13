import './Styly.css';
import {useState} from "react";
export function Hvezdicka() {
    const [pocet, setPocet] = useState(0)
    const handlMyAss = (hvezdicka) => {
        setPocet(hvezdicka)
    }
    return (
        <div>
            {[1, 2, 3, 4, 5].map((hvezdicka) => (
                <button className={hvezdicka <= pocet ? "hvezda" : "hvezda-default"}
                        onClick={() => handlMyAss(hvezdicka)}>
                    ★
                </button>
            ))}
        </div>
    )
}
