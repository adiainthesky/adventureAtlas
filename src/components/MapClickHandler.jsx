import { useMapEvent } from "react-leaflet";

export const MapClickHandler = ({onClick}) => {
    useMapEvent("click", (event) => {
        onClick(event)
    })
    return null
}