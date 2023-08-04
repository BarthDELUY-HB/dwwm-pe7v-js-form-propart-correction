"use strict";

function checkIfAtLeastOnePhoneNumber(event)
{
    // On bloque l'envoi du formulaire tant qu'on n'a pas vérifié
    event.preventDefault();

    let landlineNumber = document.querySelector('#landLineNumber').value;
    let gsmNumber = document.querySelector('#gsmNumber').value;

    if (landlineNumber.length > 0 || gsmNumber.length > 0) {
        return true;
    }
    return false;
}

function attachPrivateAccountListeners()
{
    document.querySelector('#individualForm').addEventListener('submit', checkIfAtLeastOnePhoneNumber);
}