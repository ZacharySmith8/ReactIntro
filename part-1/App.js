const App = () => {
    return (
        <div>
            <FirstComp />
            <NamedComp name="Zach"/>
        </div>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);