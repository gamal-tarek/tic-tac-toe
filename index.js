let tab = document.getElementsByClassName("tab")
let item = document.getElementsByClassName("item")[0]
let x = document.getElementsByTagName("input")[0]
let o = document.getElementsByTagName("input")[1]
let vare = "x"
if (localStorage.getItem("x") != undefined) {
    x.value = localStorage.getItem("x")
} else {
    x.value = ""
}
if (localStorage.getItem("o") != undefined) {
    o.value = localStorage.getItem("o")
} else {
    o.value = ""
}

x.onblur = () => {
    localStorage.setItem("x", x.value)
}
o.onblur = () => {
    localStorage.setItem("o", o.value)
}

localStorage.setItem("o", o.value)
for (let i = 0; i < 9; i++) {
    tab[i].onclick = (e) => {
        if (e.target.innerHTML == "") {
            e.target.innerHTML = vare
            if (vare == "x") {
                vare = "o"
            } else {
                vare = "x"
            }
        }
        if (tab[0].innerHTML == tab[1].innerHTML && tab[1].innerHTML == tab[2].innerHTML && tab[2].innerHTML != "") {
            item.innerHTML = `${tab[1].innerHTML == "x"?localStorage.getItem("x"):localStorage.getItem("o")} win`
            tab[0].classList.add("win")
            tab[1].classList.add("win")
            tab[2].classList.add("win")
            reload()
        } else if (tab[3].innerHTML == tab[4].innerHTML && tab[4].innerHTML == tab[5].innerHTML && tab[5].innerHTML != "") {
            item.innerHTML = `${tab[5].innerHTML == "x"?localStorage.getItem("x"):localStorage.getItem("o")} win`
            tab[3].classList.add("win")
            tab[4].classList.add("win")
            tab[5].classList.add("win")
            reload()
        } else if (tab[6].innerHTML == tab[7].innerHTML && tab[7].innerHTML == tab[8].innerHTML && tab[8].innerHTML != "") {
            item.innerHTML = `${tab[8].innerHTML == "x"?localStorage.getItem("x"):localStorage.getItem("o")} win`
            tab[6].classList.add("win")
            tab[7].classList.add("win")
            tab[8].classList.add("win")
            reload()
        } else if (tab[0].innerHTML == tab[3].innerHTML && tab[3].innerHTML == tab[6].innerHTML && tab[6].innerHTML != "") {
            tab[0].classList.add("win")
            tab[3].classList.add("win")
            tab[6].classList.add("win")
            item.innerHTML = `${tab[0].innerHTML == "x"?localStorage.getItem("x"):localStorage.getItem("o")} win`
            reload()
        } else if (tab[1].innerHTML == tab[4].innerHTML && tab[4].innerHTML == tab[7].innerHTML && tab[7].innerHTML != "") {
            item.innerHTML = `${tab[1].innerHTML == "x"?localStorage.getItem("x"):localStorage.getItem("o")} win`
            tab[1].classList.add("win")
            tab[4].classList.add("win")
            tab[7].classList.add("win")
            reload()
        } else if (tab[2].innerHTML == tab[5].innerHTML && tab[5].innerHTML == tab[8].innerHTML && tab[8].innerHTML != "") {
            item.innerHTML = `${tab[2].innerHTML == "x"?localStorage.getItem("x"):localStorage.getItem("o")} win`
            tab[2].classList.add("win")
            tab[5].classList.add("win")
            tab[8].classList.add("win")
            reload()
        } else if (tab[0].innerHTML == tab[4].innerHTML && tab[4].innerHTML == tab[8].innerHTML && tab[8].innerHTML != "") {
            item.innerHTML = `${tab[0].innerHTML == "x"?localStorage.getItem("x"):localStorage.getItem("o")} win`
            tab[0].classList.add("win")
            tab[4].classList.add("win")
            tab[8].classList.add("win")
            reload()
        } else if (tab[2].innerHTML == tab[4].innerHTML && tab[4].innerHTML == tab[6].innerHTML && tab[6].innerHTML != "") {
            item.innerHTML = `${tab[2].innerHTML == "x"?localStorage.getItem("x"):localStorage.getItem("o")} win`
            tab[2].classList.add("win")
            tab[4].classList.add("win")
            tab[6].classList.add("win")
            reload()
        } else if (tab[0].innerHTML.length == 1 &&
            tab[1].innerHTML.length == 1 &&
            tab[2].innerHTML.length == 1 &&
            tab[3].innerHTML.length == 1 &&
            tab[4].innerHTML.length == 1 &&
            tab[5].innerHTML.length == 1 &&
            tab[6].innerHTML.length == 1 &&
            tab[7].innerHTML.length == 1 &&
            tab[8].innerHTML.length == 1) {
            item.innerHTML = `Draw`
            tab[0].classList.add("win")
            tab[1].classList.add("win")
            tab[2].classList.add("win")
            tab[3].classList.add("win")
            tab[4].classList.add("win")
            tab[5].classList.add("win")
            tab[6].classList.add("win")
            tab[7].classList.add("win")
            tab[8].classList.add("win")
            reload()
        }
    }
}

function reload() {
    setInterval(() => {
        location.reload();
    }, 1000);
}