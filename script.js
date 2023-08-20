function displayCharacterName() {
    var characterName = document.getElementById('characterName');
    var displayName = document.getElementById('charactersName');
    displayName.innerHTML = characterName.value
}


function displayGenderPicture() {
    var genderSelect = document.getElementById('characterGender');
    var genderPicture = document.getElementById('genderPicture');

    if (genderSelect.value === "none") {
        genderPicture.innerHTML = "<img src=''>"
    } else if (genderSelect.value === "female") {
        genderPicture.innerHTML = "<img src='img/genderfemale1.jpg'>"
    } else if (genderSelect.value === "male") {
        genderPicture.innerHTML = "<img src='img/gendermale1.jpg'>"
    } else if (genderSelect.value === "other") {
        genderPicture.innerHTML = "<img src='img/genderother1.jpg'>"
    }
}

function displayRacePicture() {
    var raceSelect = document.getElementById('characterRace');
    var racePicture = document.getElementById('racePicture');

    if (raceSelect.value === "none") {
        racePicture.innerHTML = "<img src=''>"
    } else if (raceSelect.value === "aarakocra") {
        racePicture.innerHTML = "<img src='img/race14.jpg'>"
    } else if (raceSelect.value === "bugbear") {
        racePicture.innerHTML = "<img src='img/race13.jpg'>"
    } else if (raceSelect.value === "deepgnome") {
        racePicture.innerHTML = "<img src='img/race11.jpg'>"
    } else if (raceSelect.value === "dwarf") {
        racePicture.innerHTML = "<img src='img/race15.jpg'>"
    }
}

function displayClassPicture() {
    var classSelect = document.getElementById('characterClass');
    var classPicture = document.getElementById('classPicture');

    if (classSelect.value === "none") {
        classPicture.innerHTML = "<img src=''>"
    } else if (classSelect.value === "barbarian") {
        classPicture.innerHTML = "<img src='img/barbarian.jpg'>"
    } else if (classSelect.value === "fighter") {
        classPicture.innerHTML = "<img src='img/fighter.jpg'>"
    } else if (classSelect.value === "monk") {
        classPicture.innerHTML = "<img src='img/monk11.jpg'>"
    } else if (classSelect.value === "paladin") {
        classPicture.innerHTML = "<img src='img/paladin.jpg'>"
    }
}


/*
window.onload = () => {
    const heading = document.createElement("h1");
    const headingText = document.createTextNode("Create Your Character!")

    const subheading = document.createElement("h2");
    const subheadingText = document.createTextNode("Choose your character's...")

    const inputNameTitle = document.createElement("h4");
    const inputNameTitleText = document.createTextNode("NAME")

    const inputNameForm = document.createElement("input");

    const inputGenderTitle = document.createElement("h4");
    const inputGenderTitleText = document.createTextNode("GENDER")

    const inputGenderForm = document.createElement("input");

    const inputRaceTitle = document.createElement("h4");
    const inputRaceTitleText = document.createTextNode("RACE")

    const inputRaceForm = document.createElement("input");

    const inputClassTitle = document.createElement("h4");
    const inputClassTitleText = document.createTextNode("CLASS")

    const inputClassForm = document.createElement("input");

    document.body.style.backgroundColor = "lightblue";
    
    heading.appendChild(headingText);
    document.body.appendChild(heading);
    heading.style.textAlign = "center";
    
    subheading.appendChild(subheadingText);
    document.body.appendChild(subheading);
    subheading.style.textAlign = "center";

    document.body.appendChild(inputNameTitle);
    inputNameTitle.appendChild(inputNameTitleText);
 //   inputNameTitle.style.textAlign = "center";

    document.body.appendChild(inputNameForm);
    inputNameForm.classList.add("formbox");
    inputNameForm.style.marginLeft = "auto";
    inputNameForm.style.marginRight = "auto";

    document.body.appendChild(inputGenderTitle);
    inputGenderTitle.appendChild(inputGenderTitleText);
 //   inputGenderTitle.style.textAlign = "center";

    document.body.appendChild(inputGenderForm);
    inputGenderForm.classList.add("formbox");
    inputGenderForm.style.marginLeft = "auto";
    inputGenderForm.style.marginRight = "auto";

    document.body.appendChild(inputRaceTitle);
    inputRaceTitle.appendChild(inputRaceTitleText);
 //   inputRaceTitle.style.textAlign = "center";

    document.body.appendChild(inputRaceForm);
    inputRaceForm.classList.add("formbox");
    inputRaceForm.style.marginLeft = "auto";
    inputRaceForm.style.marginRight = "auto";

    document.body.appendChild(inputClassTitle);
    inputClassTitle.appendChild(inputClassTitleText);
 //   inputClassTitle.style.textAlign = "center";

    document.body.appendChild(inputClassForm);
    inputClassForm.classList.add("formbox");
    inputClassForm.style.marginLeft = "auto";
    inputClassForm.style.marginRight = "auto";
};
*/