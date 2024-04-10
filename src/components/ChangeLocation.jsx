import { ChangeLocationDropdown } from "./ChangeLocationDropdown"
import { CurrentLocation } from "./CurrentLocation"

export function ChangeLocationSection(){
    // o sa imi randeze alte 2 componente
    return(
        <div>
            <CurrentLocation currentLocation='Bucuresti'/>
            <ChangeLocationDropdown/>
        </div>
    )
}