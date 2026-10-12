import { useState } from "react";

export const ReactKapcsolo = function () {
    const [kapcsoloAllapot, setAllapot] = useState<boolean>(false);
    console.log(kapcsoloAllapot)
    return (
        <>
            <p>Kapcsolo állapota: {(kapcsoloAllapot) ? "Be" : "Ki"}</p>
            <button onClick={() => {
                kapcsoloAllapot ? setAllapot(false) : setAllapot(true)
            }}> Allapot valtoztatasa</button >
            {/* <img src={kapcsoloAllapot ? "https://www.w3schools.com/js/pic_bulbon.gif": "https://www.w3schools.com/js/pic_bulboff.gif"} alt="" /> */}
        </>
    )
};
