function UsingArray(){
    let animals=['cat','dog','horse']
    return(
        <ol>
            {animals.map(animal=>
                <li>{animal}</li>)}
        </ol>
    )
}
export default UsingArray