const form = document.querySelector(".contact-form");
const formStatus = document.querySelector("#form-status");
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = "Wird gesendet...";

    formStatus.textContent = "";

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            formStatus.textContent =
                "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet.";

            form.reset();
        } else {
            formStatus.textContent =
                "Beim Senden ist etwas schiefgelaufen. Bitte versuche es erneut.";
        }
    } catch (error) {
        formStatus.textContent =
            "Die Nachricht konnte nicht gesendet werden. Bitte versuche es erneut.";
    }

    submitButton.disabled = false;
    submitButton.textContent = "Nachricht senden";
});