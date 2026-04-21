let isGreen = false;

function toggleTheme() {
    const link = document.querySelector('link[rel="stylesheet"]');
    
    if (isGreen) {
        link.href = "red.css";
    } else {
        link.href = "green.css";
    }

    isGreen = !isGreen;
}

function toggleSection() {
    const section = document.getElementById("projekty");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}

function validateForm() {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error = document.getElementById("error");

    error.innerText = "";

    if (name === "" || surname === "" || email === "" || message === "") {
        error.innerText = "Wszystkie pola są wymagane";
        return false;
    }

    if (/\d/.test(name) || /\d/.test(surname)) {
        error.innerText = "Imię i nazwisko nie mogą zawierać cyfr";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerText = "Niepoprawny email";
        return false;
    }

    return true;
}

fetch("data.json")
    .then(response => response.json())
    .then(data => {

        let skillsList = document.getElementById("skills");
        data.skills.forEach(skill => {
            let li = document.createElement("li");
            li.textContent = skill;
            skillsList.appendChild(li);
        });

        let projectsList = document.getElementById("projects");
        data.projects.forEach(project => {
            let li = document.createElement("li");
            li.textContent = project;
            projectsList.appendChild(li);
        });

    });