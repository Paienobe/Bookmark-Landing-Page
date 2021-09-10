const menuBtn = document.querySelector(".burger-menu")
const navList = document.querySelector(".nav-list")
const closeBtn = document.getElementById("times")
const logo = document.querySelector(".logo")
const navLinks = document.querySelectorAll(".nav-links")
const navSocials = document.querySelectorAll(".nav-socials")
const tabHouse = document.querySelector(".features-house")
const tabs = document.querySelectorAll(".tab-selection") 
const tabContent = document.querySelectorAll(".tab-content")
const questions = document.querySelectorAll(".question-block")
const errorMsg = document.querySelector(".error")
const email = document.querySelector("#user-email")
const contact = document.querySelector(".contact-btn")
const header = document.querySelector(".header")
const navbar = document.querySelector(".navbar")

window.addEventListener("scroll", function() {
    let navHeight = navbar.getBoundingClientRect().height
    let bodyHeight = window.pageYOffset
    if (bodyHeight > navHeight) {
        header.classList.add("sticky-header")
        header.style.zIndex = 2
    } else {
        header.classList.remove("sticky-header")
    }
})

menuBtn.addEventListener("click", () => {
    navList.classList.add("show-list")
    logo.style.visibility = "hidden"
    menuBtn.style.visibility = "hidden"
})

closeBtn.addEventListener("click", removeAndVisible)

window.addEventListener("scroll", removeAndVisible)

navLinks.forEach((link) => {
    link.addEventListener("click", removeAndVisible)
})

navSocials.forEach((link) => {
    link.addEventListener("click", removeAndVisible)
})

function removeAndVisible() {
    navList.classList.remove("show-list")
    logo.style.visibility = "visible"
    menuBtn.style.visibility = "visible"
}

tabHouse.addEventListener("click", function(e) {
    const id = e.target.dataset.id
    if (id) {
        tabs.forEach((btn) => {
            btn.classList.remove("active")
            e.target.classList.add("active")
        })

        tabContent.forEach((item) => {
            item.classList.remove("active-tab")
        })
        const element = document.getElementById(id)
        element.classList.add("active-tab")
    }
})

questions.forEach((question) => {
    const btn = question.querySelector(".q-btn")
    btn.addEventListener("click", () => {
        questions.forEach((item) => {
            if (item !== question) {
                item.classList.remove("show-answer")
            }
        })
        question.classList.toggle("show-answer")
    })
}) 

contact.addEventListener ("click", () => {
    if (email.value === "") {
        email.style.display = "none"
        errorMsg.classList.add("show-error")

    setTimeout(() => {
            errorMsg.classList.remove("show-error")
            email.style.display = "inline"
        }, 1000)
    } else {
        email.value = ""
    }
})

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        const id = e.currentTarget.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        const navHeight = navbar.getBoundingClientRect().height
        const fixedNav = navbar.classList.contains("sticky-header")
        let position = element.offsetTop - navHeight
        console.log(element.offsetTop - navHeight)

        if (!fixedNav) {
            position = position - navHeight
        }
        if (navHeight > 82) {
            position = position + navHeight
        }
        window.scrollTo({
            left: 0,
            top: position
        })
        navHeight.style.height = 0
    })
})