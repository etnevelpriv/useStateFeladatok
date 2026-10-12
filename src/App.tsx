import { Fejlec } from "./components/Fejlec/Fejlec"
import { ReactKapcsolo } from "./components/ReactKapcsolo/ReactKapcsolo"
import { KepBetolto } from "./components/KepBetolto/KepBetolto"
import { Lablec } from "./components/Lablec/Lablec"
export const App = function () {
    return(
        <>
        <Fejlec></Fejlec>
        <ReactKapcsolo></ReactKapcsolo>
        <KepBetolto trueUrl="https://www.w3schools.com/js/pic_bulbon.gif" falseUrl="https://www.w3schools.com/js/pic_bulboff.gif"></KepBetolto>
        <Lablec></Lablec>
        </>
    )
}