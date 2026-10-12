import { useState } from "react"
import type { KepBetolto_interface } from "../../models/interfaces/KepBetolto.inteface"

export const KepBetolto = function (props:KepBetolto_interface) {
    const [url, changeUrl] = useState<string>(props.falseUrl);

    return (
        <>
        <button onClick={()=> {
            (url == props.trueUrl) ? changeUrl(props.falseUrl) : changeUrl(props.trueUrl)
        }}><img src={url} alt=""/></button>
        </>
    )
}