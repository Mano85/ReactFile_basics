
const mainhead=document.getElementById("main");
console.log(mainhead);

//react//
var h1React = React.createElement("h1", {}, "HEADING CREATED using React");

var htmlRoot = document.getElementById("root");
var rootReact = ReactDOM.createRoot(htmlRoot);
rootReact.render(h1React);