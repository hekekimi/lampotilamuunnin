




let muuntonappi = document.getElementById("muuntonappi");
let tyhjennysnappi = document.getElementById("tyhjennysnappi");

let celsius_to_fahrenheit = document.getElementById("celsius_to_fahrenheit");
let fahrenheit_to_celsius = document.getElementById("fahrenheit_to_celsius");
muuntonappi.addEventListener("click",laske);
tyhjennysnappi.addEventListener("click",tyhjenna);

function laske(event)

{




let valikko = document.getElementById("valikko");
let arvo = valikko.value;




if (arvo == "1")
{

event.preventDefault()
let syote = document.getElementById("lampotila_arvo").value;
let vastaus = syote * 1.8 + 32;
if (isNaN(syote)== true | syote =="")
{

    window.alert("Anna luku, kiitos!")
    return;
}
if (vastaus <= -273.15)
    {

    window.alert("Tulos on alle absoluuttisen nollapisteen, yritä uudelleen!")
    location.reload()
    }

    let desimaalivalikko = document.querySelector('input[name ="desimaalivalitsin"]:checked')
    let desimaalien_maara = desimaalivalikko ? desimaalivalikko.value:null;
    if(desimaalien_maara == null)
    {
        window.alert("Valitse desimaalien määrä")
    }


    if (desimaalien_maara == "1")

    {
    let vastausElementti = document.createElement("li");
    let vastausTeksti = document.createTextNode(`${syote} celsius-astetta on ${vastaus.toFixed(1)} fahrenheit-astetta.`)
    vastausElementti.appendChild(vastausTeksti);
    document.querySelector('#vastauslista').appendChild(vastausElementti);

    }
    else if (desimaalien_maara =="2")
    {
    let vastausElementti = document.createElement("li");
    let vastausTeksti = document.createTextNode(`${syote} celsius-astetta on ${vastaus.toFixed(2)} fahrenheit-astetta.`);
    vastausElementti.appendChild(vastausTeksti);
    document.querySelector('#vastauslista').appendChild(vastausElementti);


    }

    else if (desimaalien_maara =="3")
    {
    let vastausElementti = document.createElement("li");
    let vastausTeksti = document.createTextNode(syote +" celsius-astetta on "+vastaus.toFixed(3)+" fahrenheit-astetta. ");
    vastausElementti.appendChild(vastausTeksti);
    document.querySelector('#vastauslista').appendChild(vastausElementti);


    }
}
else if(arvo =="2")
{

    event.preventDefault()
    let syote = document.getElementById("lampotila_arvo").value;

    if (isNaN(syote)== true | syote =="")
    {
    
        window.alert("Anna luku, kiitos!")
        return;
    }

    let vastaus = (syote-32)/1.8;

    if (vastaus <= -273.15)
    {

    window.alert("Tulos on alle absoluuttisen nollapisteen, yritä uudelleen!")
    location.reload()
    }
    


    let desimaalivalikko = document.querySelector('input[name ="desimaalivalitsin"]:checked')
    let desimaalien_maara = desimaalivalikko ? desimaalivalikko.value:null;
    if(desimaalien_maara == null)
    {
        window.alert("Valitse desimaalien määrä")
    }


    if (desimaalien_maara == "1")

    {
    let vastausElementti = document.createElement("li");
    let vastausTeksti = document.createTextNode(`${syote} fahrenheit-astetta on ${vastaus.toFixed(1)} celsius-astetta.`)
    vastausElementti.appendChild(vastausTeksti);
    document.querySelector('#vastauslista').appendChild(vastausElementti);

    }
    else if (desimaalien_maara =="2")
    {
    let vastausElementti = document.createElement("li");
    let vastausTeksti = document.createTextNode(`${syote} fahrenheit-astetta on ${vastaus.toFixed(2)} celsius-astetta.`);
    vastausElementti.appendChild(vastausTeksti);
    document.querySelector('#vastauslista').appendChild(vastausElementti);


    }

    else if (desimaalien_maara =="3")
    {
    let vastausElementti = document.createElement("li");
    let vastausTeksti = document.createTextNode(syote +" fahrenheit-astetta on "+vastaus.toFixed(3)+" celsius-astetta ");
    vastausElementti.appendChild(vastausTeksti);
    document.querySelector('#vastauslista').appendChild(vastausElementti);


    }





}


}

function tyhjenna(event)
{
event.preventDefault();
document.querySelector("#vastauslista").textContent = "";



}