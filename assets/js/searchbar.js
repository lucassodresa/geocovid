function openCountryList() {
    document.getElementById("country-list").classList.add("show")
}

function closeCountryList() {
    document.getElementById("country-list").classList.remove("show")
}

function triggerCountryClick(t) {
    let e = countryNameToISO2[t],
        n = countryCoords[e];
    triggerLayerClick(n), document.getElementById("searchbar").value = ""
}

function filterFunction() {
    openCountryList();
    let t = document.getElementById("searchbar");
    if (0 == t.value.length) return void closeCountryList();
    let e = t.value.toUpperCase(),
        n = document.getElementById("country-list").getElementsByTagName("a");
    for (let t = 0; t < n.length; t++) txtValue = n[t].textContent || n[t].innerText, txtValue.toUpperCase().indexOf(e) > -1 ? n[t].style.display = "" : n[t].style.display = "none"
}

function createCountryList() {
    let t = "";
    for (let e = 0; e < allCountries.length; e++) t += '<a onclick="triggerCountryClick(`' + allCountries[e] + '`);closeCountryList();">', t += allCountries[e], t += "</a>\n";
    document.getElementById("country-list").innerHTML = t
}
