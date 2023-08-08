"use strict";

function checkIfAtLeastOnePhoneNumber(event)
{
    let landlineNumber = document.querySelector('#landLineNumber').value;
    let gsmNumber = document.querySelector('#gsmNumber').value;

    if (landlineNumber.length > 0 || gsmNumber.length > 0) {
        return true;
    }
    document.querySelector('#errorMessage').textContent = "Merci de renseigner au moins un numéro de téléphone !";
    // On bloque l'envoi du formulaire
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
}

function checkZipCode(event)
{
    const zipCode = document.querySelector('#privatePostalCode').value;
    if ( zipCode.length == 5
        && isNumeric(zipCode)) {
        return true;
    }
    document.querySelector('#errorMessage').textContent = "Le code postal est invalide !";
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
}

function checkIfCGVChecked(event)
{
    if (document.querySelectorAll('#privateAcceptCGV:checked').length == 1) {
        return true;
    }
    document.querySelector('#privateAcceptCGV').classList.add('CGVUnchecked');
    document.querySelector('#errorMessage').textContent = "Merci de valider les CGV !";
    event.preventDefault();
    event.stopImmediatePropagation();
    return false;
}

function attachPrivateAccountListeners()
{
    document.querySelector('#individualForm').addEventListener('submit', checkIfAtLeastOnePhoneNumber);
    document.querySelector('#individualForm').addEventListener('submit', checkZipCode);
    document.querySelector('#individualForm').addEventListener('submit', checkIfCGVChecked);
}