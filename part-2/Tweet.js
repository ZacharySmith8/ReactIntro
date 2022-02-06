const Tweet = (props) => {
    return (
        <div>
            <h3>{props.username}</h3>
            
            <p>{props.name}</p>
            
            <p>{props.date}</p>
            <p>{props.message}</p>
            
            
        </div>
    );
}