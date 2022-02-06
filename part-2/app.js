const App = () => {
   return( <div>
        <Tweet 
        username="zachary8"
        name="zach"
        date= {new Date().toDateString()}
        message= "This is Tweet1."
        />

        <Tweet 
        username="NickB"
        name="Nickolas Brandonson"
        date= {new Date().toDateString()}
        message= "This is Tweet2."
        />

        <Tweet
        username="WitDaStix"
        name="Braxon Gunter"
        date={new Date().toDateString()}
        message = "This is Tweet3"
        />
    </div>
   )
}

ReactDOM.render(<App />,
    document.getElementById("root"))