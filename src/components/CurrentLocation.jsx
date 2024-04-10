export function CurrentLocation(props){
    // pe props o sa primim orasul
    const { currentLocation } = props;
    return(
        <p>Orasul tau current este <strong>{currentLocation}</strong></p>
    )
}