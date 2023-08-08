"use strict";

function checkSIREN(event)
{
    const siren_siret = document.querySelector('#sirenNumber').value;
    if ( (siren_siret.length == 9 || siren_siret.length == 14)
        && isNumeric(siren_siret)) {
        return true;
    }
    document.querySelector('#sirenNumberError').textContent = "Merci de saisir une valeur à 9 ou 14 chiffres";
    event.preventDefault();
    return false;
}

function checkVATNumberBeginsWithFR(VATNumber)
{
    const VATNumberBeginning = VATNumber.slice(0, 2).toLocaleUpperCase();
    if (VATNumberBeginning.localeCompare("FR") === 0) {
        return true;
    }
    return false;
}

function checkVATNumberKeyIsNumeric(VATNumber)
{
    const VATNumberKey = VATNumber.slice(2, 2);
    if (isNumeric(VATNumberKey)) {
        return true;
    }
    return false;
}

function checkVATNumber(event)
{
    let vatNumber = document.querySelector('#vatNumber').value;
    if (vatNumber.length == 13
        && checkVATNumberBeginsWithFR(vatNumber)
        && checkVATNumberKeyIsNumeric(vatNumber))  {
        return true;
    }
    event.preventDefault();
    return false;
}


function attachProfessionnalAccountListeners()
{
    document.querySelector('#professionalForm').addEventListener('submit', checkSIREN);
    document.querySelector('#professionalForm').addEventListener('submit', checkVATNumber);
}