function scrollUnderFrontPageTitle() {
    window.scroll(0, document.getElementById("front-page-title").clientHeight - document.querySelector("nav").clientHeight + 1)
}

document.addEventListener("submit", submitContactForm);

function submitContactForm(event) {
    event.preventDefault();
    $('#confirmation-modal').modal('show');

}

