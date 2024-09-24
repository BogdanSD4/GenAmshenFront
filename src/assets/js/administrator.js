var prevScrollpos = window.scrollY;
window.onscroll = function() {
var currentScrollPos = window.scrollY;
    if (prevScrollpos > currentScrollPos) {
    document.querySelector("#navbar").style.top = "0";
    } else {
    document.querySelector("#navbar").style.top = "-120px";
    }
prevScrollpos = currentScrollPos;
}



const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n =>
    n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }))




    function showModal(message) {
        let modalImg = document.querySelector("#modal-img");
        let modalText = document.querySelector("#modal-text");
        modalText.textContent = message;
        modalImg.style.display = "block";
        let spanCloseImg = modalImg.querySelector(".closeImg");
        spanCloseImg.addEventListener("click", function() {
        modalImg.style.display = "none";
    });
    
    window.addEventListener("click", function(event) {
        if (event.target == modalImg) {
            modalImg.style.display = "none";
        }
    });
    }
    
    const selectImage = document.querySelector('.select-image');
    const inputFile = document.querySelector('#file');
    const imgArea = document.querySelector('.img-area');
    
    selectImage.addEventListener('click', function() {
        inputFile.click();
    })
    
    inputFile.addEventListener('change', function() {
        const image = this.files[0];
        if (image.size < 2000000){
            const reader = new FileReader();
            reader.onload = ()=> {
                const allImg = imgArea.querySelectorAll('img');
                allImg.forEach(item=> item.remove());
                const imgUrl = reader.result;
                const img = document.createElement('img');
                img.src = imgUrl;
                imgArea.appendChild(img);
                imgArea.classList.add('active');
                imgArea.dataset.img = image.name;
            }
            reader.readAsDataURL(image);
        } else {
            showModal('Размер фото должен быть меньше 2MB');
        }
    });



const imageInputBack = document.querySelector('#file-back');
let UploadedImg = "";
    
    imageInputBack.addEventListener("change", function() {
    const readerBack = new FileReader();
    readerBack.addEventListener("load", () => {
    UploadedImg = readerBack.result;
    document.querySelector('.image-back').style.backgroundImage = `url(${UploadedImg})`
})
    readerBack.readAsDataURL(this.files[0])
})



document.addEventListener('DOMContentLoaded', function() {
    // Set up color change for all buttons
    setUpButtonColor();

    // Set up specific functionality for #team-btn
    const teamBtn = document.querySelector("#team-btn");
    if (teamBtn) {
        teamBtn.addEventListener("click", function() {
            displayTeamData(1);
            document.querySelector("#team").style.display = "block";
            document.querySelector("#database").style.display = "none";
            document.querySelector("#create-profile-data").style.display = "none";
        });
    } 


function setUpButtonColor() {
    const buttons = document.querySelectorAll('#team-btn, #database-btn, #profile-btn, #btn-team-display, #btn-team-moderator-display, #btn-display-list, #btn-team-add-clerk, #btn-team-add-mod, #btn-go-to-database, #btn-pending-requests, #btn-create-profile, #btn-continue-filling');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            buttons.forEach(btn => btn.classList.remove('active-btn'));
            
            // Add active class to clicked button
            this.classList.add('active-btn');
        });
    });
}


function displayTeamData(infoTeam) {
    var infoDisplayTeam = document.querySelector("#team");
    infoDisplayTeam.innerHTML = "";

    if (infoTeam === 1) {
        infoDisplayTeam.innerHTML = `
        <div class="grid-container">
        <div class="col-1">
            <h6>Команда</h6>
            <br>
            <br>
                <h6>Операторы ввода данных</h6>
                <button id="btn-team-display">Список операторов</button>
                <button id="btn-team-add-clerk">Добавить оператора</button>

                <br>

                <h6>Модераторы</h6>
                <button id="btn-team-moderator-display">Список модераторов</button>
                <button id="btn-team-add-mod">Добавить модератора</button>
        </div>

        <div id="infoDisplayTeam"></div> 

        </div>
    `;
    setUpButtonColor();
    }

    document.querySelector("#btn-team-display").addEventListener("click", function() {
        displayTeam(2);
    });
    
    document.querySelector("#btn-team-add-clerk").addEventListener("click", function() {
        displayTeam(6);
    });

    document.querySelector("#btn-team-moderator-display").addEventListener("click", function() {
        displayModerator(5);
    });
    
    document.querySelector("#btn-team-add-mod").addEventListener("click", function() {
        displayModerator(7);
    });
    
}


document.querySelector("#database-btn").addEventListener("click", function() {
    displayDatabase(3);

    document.querySelector("#database").style.display = "block";
    document.querySelector("#team").style.display = "none";
    document.querySelector("#create-profile-data").style.display = "none";
});

function displayDatabase(infoDatabase) {
    var infoDisplayDatabase = document.querySelector("#database");
    infoDisplayDatabase.innerHTML = "";

    if (infoDatabase === 3) {
        infoDisplayDatabase.innerHTML = `
        <div class="grid-container">
        <div class="col-1">
            <h6>База данных</h6>
            <br>
            <br>
            <a href="#"><button id="btn-go-to-database">Перейти в базу данных</button></a>
            <a href="#"><button id="btn-pending-requests">Запросы в обработке</button></a>
        </div>
        </div>   
    `;
    setUpButtonColor();
    }
}



document.querySelector("#profile-btn").addEventListener("click", function() {
    displayProfilelData(4);

    document.querySelector("#create-profile-data").style.display = "block";
    document.querySelector("#team").style.display = "none";
    document.querySelector("#database").style.display = "none";
});


function displayProfilelData(info) {
    var infoDisplay = document.querySelector("#create-profile-data");
    infoDisplay.innerHTML = "";

    if (info === 4) {
        infoDisplay.innerHTML = `
        <div class="grid-container">
        <div class="col-1">
            <h6>Профиль</h6>
            <br>
            <br>
            <a href="personal-data.html"><button id="btn-create-profile">Создать профиль</button></a>
            <a href="#"><button id="btn-continue-filling">Продолжить заполнение</button></a>
        </div>  
        </div> 
    `;
    setUpButtonColor();
    }
}
});