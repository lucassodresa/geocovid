let dataCOVID = null;
async function getDataCovidRequest() {
    if (null == dataCOVID) {
        const t = "https://geocovidtest.herokuapp.com/data",
            e = await fetch(t);
        dataCOVID = await e.json()
    }
}

function getDataCovid(t) {
    dataCOVID[t] || (dataCOVID[t] = {}, dataCOVID[t].cases = "n/a", dataCOVID[t].deaths = "n/a", dataCOVID[t].recovered = "n/a"), isChartOpen || toggleChart(), document.getElementById("cases-value").textContent = formatNumber(dataCOVID[t].cases), document.getElementById("deaths-value").textContent = formatNumber(dataCOVID[t].deaths), document.getElementById("recovered-value").textContent = formatNumber(dataCOVID[t].recovered), createURL(document.getElementById("country").textContent, dataCOVID[t].cases, dataCOVID[t].deaths, dataCOVID[t].recovered)
}

function getDataCoord(t) {
    document.getElementById("chart-picture").src = "assets/countries-flags/" + countryNameToISO2[t].toLowerCase() + ".png", document.getElementById("country").textContent = t, getDataCovid(countryNameToISO2[t])
}
