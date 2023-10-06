var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectedPlanButtons = document.querySelectorAll(".plan button");
var modalCancelButton = document.querySelector(".modal button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNavbar = document.querySelector(".mobile-nav");

selectedPlanButtons.forEach((item) => {
    item.addEventListener("click", () => {
        openModal();
    });
});

if (modalCancelButton) {
    modalCancelButton.addEventListener("click", () => {
        closeModal();
    });
}

backdrop.addEventListener("click", () => {
    closeModal();
});

const closeModal = () => {
    //backdrop.style.display = "none";
    //modal.style.display = "none";
    backdrop.classList.remove("open");
    if (modal) {
        modal.classList.remove("open");
    }

    mobileNavbar.classList.remove("open");
};

const openModal = () => {
    //backdrop.style.display = "block";
    //modal.style.display = "block";
    backdrop.classList.add("open");
    modal.classList.add("open");
};

toggleButton.addEventListener("click", () => {
    backdrop.classList.add("open");
    mobileNavbar.classList.add("open");
});
