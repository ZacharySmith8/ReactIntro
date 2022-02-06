const App = () => {
    return (
        <div>
            <Person 
            age="10"
            name="Zachary"
            hobbies={["chores", "music", "video games"]}
            />

            <Person 
            age="33"
            name="BrandonMetlick"
            hobbies={["Surfing", "RockStar", "video games"]}
            />
             <Person 
            age="18"
            name="Raymond"
            hobbies={["Dating", "Partying", "video games"]}
            />
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))