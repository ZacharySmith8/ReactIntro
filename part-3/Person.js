const Person = (props) => {
    let vote = props.age >= 18 ? "GO VOTE!!!" : "You Must Be 18 Sorry!"

    let name = props.name.length >=8 ? props.name.slice(0,6): props.name; 
    let hobbies = props.hobbies.map(h => <li>{h}</li>)
    return (
        <div>
            <p>Learn some information aboue this person</p>
        <ul>
            <li>{name}</li>
            <li>{vote}</li>
            <h3>Hobbies</h3>
         <li>{hobbies}</li>   
        </ul>
        
        </div>
        
    )
}