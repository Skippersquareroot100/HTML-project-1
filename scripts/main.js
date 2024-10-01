const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

const obj = document.querySelector("img");
obj.onclick = () => {
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            if (i % 2 !== 0) {
                obj.setAttribute("src", "images/images-2.jpeg");
            } else {
                obj.setAttribute("src", "images/firefox2.png");
            }
        }, i * 100);
    }
};

let myButton = document.querySelector("#changeUserButton");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
 setUserName();
};
