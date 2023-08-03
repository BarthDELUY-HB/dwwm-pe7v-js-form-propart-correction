

    // Récupérer les éléments du DOM
    const individualForm = document.getElementById("individualForm");
    const professionalForm = document.getElementById("professionalForm");
    const individualCheckbox = document.getElementById("individualCheckbox");
    const professionalCheckbox = document.getElementById("professionalCheckbox");
    const individualError = document.getElementById("individualError");
    const professionalError = document.getElementById("professionalError");

        // Gérer l'événement du changement des cases à cocher
    individualCheckbox.addEventListener("change", function() {
        if (individualCheckbox.checked) {
        individualForm.style.display = "block";
        } else {
        individualForm.style.display = "none";
        }
    });
    
    professionalCheckbox.addEventListener("change", function() {
        if (professionalCheckbox.checked) {
        professionalForm.style.display = "block";
        } else {
        professionalForm.style.display = "none";
        }
    });
    
    // Masquer les formulaires par défaut
    individualForm.style.display = "none";
    professionalForm.style.display = "none";
    
        // Gérer l'événement du changement des cases à cocher
    individualCheckbox.addEventListener("change", function() {
        if (individualCheckbox.checked) {
        individualForm.style.display = "block";
        professionalForm.style.display = "none";
        professionalCheckbox.checked = false;
        } else {
        individualForm.style.display = "none";
        }
    });
    
    professionalCheckbox.addEventListener("change", function() {
        if (professionalCheckbox.checked) {
        professionalForm.style.display = "block";
        individualForm.style.display = "none";
        individualCheckbox.checked = false;
        } else {
        professionalForm.style.display = "none";
        }
    });
    
    // Masquer les formulaires par défaut
    individualForm.style.display = "none";
    professionalForm.style.display = "none";
    


    // Fonction pour activer le clignotement en rouge
    function activateBlinkingError(errorElement) {
    errorElement.classList.add("error");
    setTimeout(function() {
        errorElement.classList.remove("error");
    }, 1000); // Retirer la classe après 1 seconde (1000 millisecondes)
    }

    // ...

    // Valider le formulaire individuel lors de la soumission
    individualForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Effectuer les validations ici pour le formulaire particulier
    // Exemple : 
    const acceptCGV = document.getElementById("acceptCGV");
    if (!acceptCGV.checked) {
        individualError.textContent = "Vous devez accepter les CGV.";
        activateBlinkingError(individualError);
        acceptCGV.focus();
        return;
    }
    // Si toutes les validations sont réussies, vous pouvez soumettre le formulaire
    individualError.textContent = ""; // Effacer le message d'erreur s'il y en avait un
    // Soumettre le formulaire individuel ici
    });

    // Valider le formulaire professionnel lors de la soumission
    professionalForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Effectuer les validations ici pour le formulaire professionnel
    // Exemple :
    const acceptCGV = document.getElementById("acceptCGV");
    if (!acceptCGV.checked) {
        professionalError.textContent = "Vous devez accepter les CGV.";
        activateBlinkingError(professionalError);
        acceptCGV.focus();
        return;
    }
    // Si toutes les validations sont réussies, vous pouvez soumettre le formulaire
    professionalError.textContent = ""; // Effacer le message d'erreur s'il y en avait un
    // Soumettre le formulaire professionnel ici
    });



    