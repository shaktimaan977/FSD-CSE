// console.log("Hello world")
// let div = document.querySelector('#parent');
// let h2= document.createElement("h2")
// div.appendChild(h2)
// h2.innerHTML="welcome to react"
// document.getElementById("parent").style.color="green"
const parent = document.getElementById("root")
    const root = ReactDOM.createRoot(parent)
    const h2 = React.createElement("h2",{style:{color:'red'}},"Welcome to ReactJS")
    const li1 = React.createElement("li", {style:{color:'red'}}, "Orange")
    const li2 = React.createElement("li", {style:{color:'red'}}, "Apple")
    const li3 = React.createElement("li", {style:{color:'red'}}, "Banana")
    const li4 = React.createElement("li", {style:{color:'red'}}, "Guava")
    const ul = React.createElement("ul", {style: {backgroundColor: "cyan"}}, li1, li2, li3, li4)
    const h1 = React.createElement("h1", {},  "By react create element")    
    root.render(ul)
    // const li1=<li>Orange</li>;
    // const li2=<li>apple</li>;
    // const li3=<li>guava</li>;
    // const li4=<li>banana</li>;
    // const ul=<ul style={{color:'red'}}>{li1}{li2}{li3}{li4}</ul>;
 