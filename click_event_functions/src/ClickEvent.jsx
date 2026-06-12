function ClickEvent() {
    function sayHello() {
        alert("Hello!");
    }
    return (
        <div>
            <button onClick={sayHello}>Click Me</button>
        </div>
    );}
export default ClickEvent; 