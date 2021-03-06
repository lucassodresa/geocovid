const ISO3ToISO2={AFG:"AF",ALA:"AX",ALB:"AL",DZA:"DZ",ASM:"AS",AND:"AD",AGO:"AO",AIA:"AI",ATA:"AQ",ATG:"AG",ARG:"AR",ARM:"AM",ABW:"AW",AUS:"AU",AUT:"AT",AZE:"AZ",BHS:"BS",BHR:"BH",BGD:"BD",BRB:"BB",BLR:"BY",BEL:"BE",BLZ:"BZ",BEN:"BJ",BMU:"BM",BTN:"BT",BOL:"BO",BIH:"BA",BWA:"BW",BVT:"BV",BRA:"BR",VGB:"VG",IOT:"IO",BRN:"BN",BGR:"BG",BFA:"BF",BDI:"BI",KHM:"KH",CMR:"CM",CAN:"CA",CPV:"CV",CYM:"KY",CAF:"CF",TCD:"TD",CHL:"CL",CHN:"CN",HKG:"HK",MAC:"MO",CXR:"CX",CCK:"CC",COL:"CO",COM:"KM",COG:"CG",COD:"CD",COK:"CK",CRI:"CR",CIV:"CI",HRV:"HR",CUB:"CU",CUW:"CW",CYP:"CY",CZE:"CZ",DNK:"DK",DJI:"DJ",DMA:"DM",DOM:"DO",ECU:"EC",EGY:"EG",SLV:"SV",GNQ:"GQ",ERI:"ER",EST:"EE",ETH:"ET",FLK:"FK",FRO:"FO",FJI:"FJ",FIN:"FI",FRA:"FR",GUF:"GF",PYF:"PF",ATF:"TF",GAB:"GA",GMB:"GM",GEO:"GE",DEU:"DE",GHA:"GH",GIB:"GI",GRC:"GR",GRL:"GL",GRD:"GD",GLP:"GP",GUM:"GU",GTM:"GT",GGY:"GG",GIN:"GN",GNB:"GW",GUY:"GY",HTI:"HT",HMD:"HM",VAT:"VA",HND:"HN",HUN:"HU",ISL:"IS",IND:"IN",IDN:"ID",IRN:"IR",IRQ:"IQ",IRL:"IE",IMN:"IM",ISR:"IL",ITA:"IT",JAM:"JM",JPN:"JP",JEY:"JE",JOR:"JO",KAZ:"KZ",KEN:"KE",KIR:"KI",PRK:"KP",KOR:"KR",KWT:"KW",KGZ:"KG",LAO:"LA",LVA:"LV",LBN:"LB",LSO:"LS",LBR:"LR",LBY:"LY",LIE:"LI",LTU:"LT",LUX:"LU",MKD:"MK",MDG:"MG",MWI:"MW",MYS:"MY",MDV:"MV",MLI:"ML",MLT:"MT",MHL:"MH",MTQ:"MQ",MRT:"MR",MUS:"MU",MYT:"YT",MEX:"MX",FSM:"FM",MDA:"MD",MCO:"MC",MNG:"MN",MNE:"ME",MSR:"MS",MAR:"MA",MOZ:"MZ",MMR:"MM",NAM:"NA",NRU:"NR",NPL:"NP",NLD:"NL",ANT:"AN",NCL:"NC",NZL:"NZ",NIC:"NI",NER:"NE",NGA:"NG",NIU:"NU",NFK:"NF",MNP:"MP",NOR:"NO",OMN:"OM",PAK:"PK",PLW:"PW",PSE:"PS",PAN:"PA",PNG:"PG",PRY:"PY",PER:"PE",PHL:"PH",PCN:"PN",POL:"PL",PRT:"PT",PRI:"PR",QAT:"QA",REU:"RE",ROU:"RO",RUS:"RU",RWA:"RW",BLM:"BL",SHN:"SH",KNA:"KN",LCA:"LC",MAF:"MF",SPM:"PM",VCT:"VC",WSM:"WS",SMR:"SM",STP:"ST",SAU:"SA",SEN:"SN",SRB:"RS",SYC:"SC",SLE:"SL",SGP:"SG",SVK:"SK",SVN:"SI",SLB:"SB",SOM:"SO",ZAF:"ZA",SGS:"GS",SSD:"SS",ESP:"ES",LKA:"LK",SDN:"SD",SUR:"SR",SJM:"SJ",SWZ:"SZ",SWE:"SE",CHE:"CH",SYR:"SY",TWN:"TW",TJK:"TJ",TZA:"TZ",THA:"TH",TLS:"TL",TGO:"TG",TKL:"TK",TON:"TO",TTO:"TT",TUN:"TN",TUR:"TR",TKM:"TM",TCA:"TC",TUV:"TV",UGA:"UG",UKR:"UA",ARE:"AE",GBR:"GB",USA:"US",UMI:"UM",URY:"UY",UZB:"UZ",VUT:"VU",VEN:"VE",VNM:"VN",VIR:"VI",WLF:"WF",ESH:"EH",YEM:"YE",ZMB:"ZM",ZWE:"ZW",XKX:"XK",SXM:"SX"},ISO2ToISO3={AF:"AFG",AX:"ALA",AL:"ALB",DZ:"DZA",AS:"ASM",AD:"AND",AO:"AGO",AI:"AIA",AQ:"ATA",AG:"ATG",AR:"ARG",AM:"ARM",AW:"ABW",AU:"AUS",AT:"AUT",AZ:"AZE",BS:"BHS",BH:"BHR",BD:"BGD",BB:"BRB",BY:"BLR",BE:"BEL",BZ:"BLZ",BJ:"BEN",BM:"BMU",BT:"BTN",BO:"BOL",BA:"BIH",BW:"BWA",BV:"BVT",BR:"BRA",VG:"VGB",IO:"IOT",BN:"BRN",BG:"BGR",BF:"BFA",BI:"BDI",KH:"KHM",CM:"CMR",CA:"CAN",CV:"CPV",KY:"CYM",CF:"CAF",TD:"TCD",CL:"CHL",CN:"CHN",HK:"HKG",MO:"MAC",CX:"CXR",CC:"CCK",CO:"COL",KM:"COM",CG:"COG",CD:"COD",CK:"COK",CR:"CRI",CI:"CIV",HR:"HRV",CU:"CUB",CW:"CUW",CY:"CYP",CZ:"CZE",DK:"DNK",DJ:"DJI",DM:"DMA",DO:"DOM",EC:"ECU",EG:"EGY",SV:"SLV",GQ:"GNQ",ER:"ERI",EE:"EST",ET:"ETH",FK:"FLK",FO:"FRO",FJ:"FJI",FI:"FIN",FR:"FRA",GF:"GUF",PF:"PYF",TF:"ATF",GA:"GAB",GM:"GMB",GE:"GEO",DE:"DEU",GH:"GHA",GI:"GIB",GR:"GRC",GL:"GRL",GD:"GRD",GP:"GLP",GU:"GUM",GT:"GTM",GG:"GGY",GN:"GIN",GW:"GNB",GY:"GUY",HT:"HTI",HM:"HMD",VA:"VAT",HN:"HND",HU:"HUN",IS:"ISL",IN:"IND",ID:"IDN",IR:"IRN",IQ:"IRQ",IE:"IRL",IM:"IMN",IL:"ISR",IT:"ITA",JM:"JAM",JP:"JPN",JE:"JEY",JO:"JOR",KZ:"KAZ",KE:"KEN",KI:"KIR",KP:"PRK",KR:"KOR",KW:"KWT",KG:"KGZ",LA:"LAO",LV:"LVA",LB:"LBN",LS:"LSO",LR:"LBR",LY:"LBY",LI:"LIE",LT:"LTU",LU:"LUX",MK:"MKD",MG:"MDG",MW:"MWI",MY:"MYS",MV:"MDV",ML:"MLI",MT:"MLT",MH:"MHL",MQ:"MTQ",MR:"MRT",MU:"MUS",YT:"MYT",MX:"MEX",FM:"FSM",MD:"MDA",MC:"MCO",MN:"MNG",ME:"MNE",MS:"MSR",MA:"MAR",MZ:"MOZ",MM:"MMR",NA:"NAM",NR:"NRU",NP:"NPL",NL:"NLD",AN:"ANT",NC:"NCL",NZ:"NZL",NI:"NIC",NE:"NER",NG:"NGA",NU:"NIU",NF:"NFK",MP:"MNP",NO:"NOR",OM:"OMN",PK:"PAK",PW:"PLW",PS:"PSE",PA:"PAN",PG:"PNG",PY:"PRY",PE:"PER",PH:"PHL",PN:"PCN",PL:"POL",PT:"PRT",PR:"PRI",QA:"QAT",RE:"REU",RO:"ROU",RU:"RUS",RW:"RWA",BL:"BLM",SH:"SHN",KN:"KNA",LC:"LCA",MF:"MAF",PM:"SPM",VC:"VCT",WS:"WSM",SM:"SMR",ST:"STP",SA:"SAU",SN:"SEN",RS:"SRB",SC:"SYC",SL:"SLE",SG:"SGP",SK:"SVK",SI:"SVN",SB:"SLB",SO:"SOM",ZA:"ZAF",GS:"SGS",SS:"SSD",ES:"ESP",LK:"LKA",SD:"SDN",SR:"SUR",SJ:"SJM",SZ:"SWZ",SE:"SWE",CH:"CHE",SY:"SYR",TW:"TWN",TJ:"TJK",TZ:"TZA",TH:"THA",TL:"TLS",TG:"TGO",TK:"TKL",TO:"TON",TT:"TTO",TN:"TUN",TR:"TUR",TM:"TKM",TC:"TCA",TV:"TUV",UG:"UGA",UA:"UKR",AE:"ARE",GB:"GBR",US:"USA",UM:"UMI",UY:"URY",UZ:"UZB",VU:"VUT",VE:"VEN",VN:"VNM",VI:"VIR",WF:"WLF",EH:"ESH",YE:"YEM",ZM:"ZMB",ZW:"ZWE",XK:"XKX",SX:"SXM"},ISO2ToCountryName={AF:"Afghanistan",AX:"Aland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cabo Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, Democratic Republic",CK:"Cook Islands",CR:"Costa Rica",CI:"C??te d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Cura??ao",CY:"Cyprus",CZ:"Czechia",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands",FO:"Faeroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island & Mcdonald Islands",VA:"Vatican City",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"North Korea",KR:"South Korea",XK:"Kosovo",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"North Macedonia",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia",MD:"Moldova",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",AN:"Netherlands Antilles",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestine",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"R??union",RO:"Romania",RU:"Russia",RW:"Rwanda",BL:"Saint Barthelemy",SH:"Saint Helena",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia And Sandwich Isl.",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SS:"South Sudan",SR:"Suriname",SJ:"Svalbard And Jan Mayen",SZ:"Eswatini",SE:"Sweden",CH:"Switzerland",SY:"Syria",TW:"Taiwan",TJ:"Tajikistan",TZ:"Tanzania",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela",VN:"Vietnam",VG:"British Virgin Islands",VI:"U.S. Virgin Islands",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"},countryNameToISO2={Afghanistan:"AF","Aland Islands":"AX",Albania:"AL",Algeria:"DZ","American Samoa":"AS",Andorra:"AD",Angola:"AO",Anguilla:"AI",Antarctica:"AQ","Antigua and Barbuda":"AG",Argentina:"AR",Armenia:"AM",Aruba:"AW",Australia:"AU",Austria:"AT",Azerbaijan:"AZ",Bahamas:"BS",Bahrain:"BH",Bangladesh:"BD",Barbados:"BB",Belarus:"BY",Belgium:"BE",Belize:"BZ",Benin:"BJ",Bermuda:"BM",Bhutan:"BT",Bolivia:"BO","Bosnia and Herzegovina":"BA",Botswana:"BW","Bouvet Island":"BV",Brazil:"BR","British Indian Ocean Territory":"IO",Brunei:"BN",Bulgaria:"BG","Burkina Faso":"BF",Burundi:"BI",Cambodia:"KH",Cameroon:"CM",Canada:"CA","Cabo Verde":"CV","Cayman Islands":"KY","Central African Republic":"CF",Chad:"TD",Chile:"CL",China:"CN","Christmas Island":"CX","Cocos (Keeling) Islands":"CC",Colombia:"CO",Comoros:"KM",Congo:"CG","Congo, Democratic Republic":"CD","Cook Islands":"CK","Costa Rica":"CR","C??te d'Ivoire":"CI",Croatia:"HR",Cuba:"CU","Cura??ao":"CW",Cyprus:"CY",Czechia:"CZ",Denmark:"DK",Djibouti:"DJ",Dominica:"DM","Dominican Republic":"DO",Ecuador:"EC",Egypt:"EG","El Salvador":"SV","Equatorial Guinea":"GQ",Eritrea:"ER",Estonia:"EE",Ethiopia:"ET","Falkland Islands":"FK","Faeroe Islands":"FO",Fiji:"FJ",Finland:"FI",France:"FR","French Guiana":"GF","French Polynesia":"PF","French Southern Territories":"TF",Gabon:"GA",Gambia:"GM",Georgia:"GE",Germany:"DE",Ghana:"GH",Gibraltar:"GI",Greece:"GR",Greenland:"GL",Grenada:"GD",Guadeloupe:"GP",Guam:"GU",Guatemala:"GT",Guernsey:"GG",Guinea:"GN","Guinea-Bissau":"GW",Guyana:"GY",Haiti:"HT","Heard Island & Mcdonald Islands":"HM","Vatican City":"VA",Honduras:"HN","Hong Kong":"HK",Hungary:"HU",Iceland:"IS",India:"IN",Indonesia:"ID",Iran:"IR",Iraq:"IQ",Ireland:"IE","Isle of Man":"IM",Israel:"IL",Italy:"IT",Jamaica:"JM",Japan:"JP",Jersey:"JE",Jordan:"JO",Kazakhstan:"KZ",Kenya:"KE",Kiribati:"KI","North Korea":"KP","South Korea":"KR",Kosovo:"XK",Kuwait:"KW",Kyrgyzstan:"KG","Lao People's Democratic Republic":"LA",Latvia:"LV",Lebanon:"LB",Lesotho:"LS",Liberia:"LR",Libya:"LY",Liechtenstein:"LI",Lithuania:"LT",Luxembourg:"LU",Macao:"MO","North Macedonia":"MK",Madagascar:"MG",Malawi:"MW",Malaysia:"MY",Maldives:"MV",Mali:"ML",Malta:"MT","Marshall Islands":"MH",Martinique:"MQ",Mauritania:"MR",Mauritius:"MU",Mayotte:"YT",Mexico:"MX",Micronesia:"FM",Moldova:"MD",Monaco:"MC",Mongolia:"MN",Montenegro:"ME",Montserrat:"MS",Morocco:"MA",Mozambique:"MZ",Myanmar:"MM",Namibia:"NA",Nauru:"NR",Nepal:"NP",Netherlands:"NL","Netherlands Antilles":"AN","New Caledonia":"NC","New Zealand":"NZ",Nicaragua:"NI",Niger:"NE",Nigeria:"NG",Niue:"NU","Norfolk Island":"NF","Northern Mariana Islands":"MP",Norway:"NO",Oman:"OM",Pakistan:"PK",Palau:"PW",Palestine:"PS",Panama:"PA","Papua New Guinea":"PG",Paraguay:"PY",Peru:"PE",Philippines:"PH",Pitcairn:"PN",Poland:"PL",Portugal:"PT","Puerto Rico":"PR",Qatar:"QA","R??union":"RE",Romania:"RO",Russia:"RU",Rwanda:"RW","Saint Barthelemy":"BL","Saint Helena":"SH","Saint Kitts and Nevis":"KN","Saint Lucia":"LC","Saint Martin":"MF","Saint Pierre and Miquelon":"PM","Saint Vincent and the Grenadines":"VC",Samoa:"WS","San Marino":"SM","Sao Tome and Principe":"ST","Saudi Arabia":"SA",Senegal:"SN",Serbia:"RS",Seychelles:"SC","Sierra Leone":"SL",Singapore:"SG","Sint Maarten":"SX",Slovakia:"SK",Slovenia:"SI","Solomon Islands":"SB",Somalia:"SO","South Africa":"ZA","South Georgia And Sandwich Isl.":"GS",Spain:"ES","Sri Lanka":"LK",Sudan:"SD","South Sudan":"SS",Suriname:"SR","Svalbard And Jan Mayen":"SJ",Eswatini:"SZ",Sweden:"SE",Switzerland:"CH",Syria:"SY",Taiwan:"TW",Tajikistan:"TJ",Tanzania:"TZ",Thailand:"TH","Timor-Leste":"TL",Togo:"TG",Tokelau:"TK",Tonga:"TO","Trinidad and Tobago":"TT",Tunisia:"TN",Turkey:"TR",Turkmenistan:"TM","Turks and Caicos Islands":"TC",Tuvalu:"TV",Uganda:"UG",Ukraine:"UA","United Arab Emirates":"AE","United Kingdom":"GB","United States":"US","United States Outlying Islands":"UM",Uruguay:"UY",Uzbekistan:"UZ",Vanuatu:"VU",Venezuela:"VE",Vietnam:"VN","British Virgin Islands":"VG","U.S. Virgin Islands":"VI","Wallis and Futuna":"WF","Western Sahara":"EH",Yemen:"YE",Zambia:"ZM",Zimbabwe:"ZW"},allCountries=["Afghanistan","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Brazil","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cabo Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Colombia","Comoros","Congo","Congo, Democratic Republic","Costa Rica","C??te d'Ivoire","Croatia","Cuba","Cura??ao","Cyprus","Czechia","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faeroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-Bissau","Guyana","Haiti","Vatican City","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","North Korea","South Korea","Kosovo","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macao","North Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","R??union","Romania","Russia","Rwanda","Saint Barthelemy","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Martin","Saint Pierre and Miquelon","Saint Vincent and the Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Sint Maarten","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","Spain","Sri Lanka","Sudan","South Sudan","Suriname","Eswatini","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor-Leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","Uruguay","Uzbekistan","Vanuatu","Venezuela","Vietnam","British Virgin Islands","U.S. Virgin Islands","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"];
let text,
    w,
    logo_pos,
    isMobile=screen.width<620;
function log(a) {
   console.log(a)
}

function setCursor(a) {
   document.body.style.cursor=a
}

function capitalizeFirstLetter(a) {
   return a.charAt(0).toUpperCase()+a.slice(1)
}

function formatNumber(num) {
   return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
let isChartOpen=!1,
   date=new Date;
function load() {
   let a=document.getElementById("searchbar");
   a.addEventListener("keyup", function(e) {
      13===e.keyCode&&""!==a.value&&search(a.value)
   })
}

function btnVelhoWhats() {
   this.setAttribute("src", "assets/img/whatsapp.png")
}

function btnNovoWhats() {
   this.setAttribute("src", "assets/img/whatsapp-hover.png")
}

function btnVelhoTwitter() {
   this.setAttribute("src", "assets/img/twitter.png")
}

function btnNovoTwitter() {
   this.setAttribute("src", "assets/img/twitter-hover.png")
}

function btnVelhoFacebook() {
   this.setAttribute("src", "assets/img/facebook.png")
}

function btnNovoFacebook() {
   this.setAttribute("src", "assets/img/facebook-hover.png")
}

function btnVelhoClip() {
   this.setAttribute("src", "assets/img/clipboard.png")
}

function btnNovoClip() {
   this.setAttribute("src", "assets/img/clipboard-hover.png")
}

function clipCopy() {
   let a=document.getElementById("myInput");
   document.getElementById("myInput").style.visibility="visible",
      document.getElementById("myInput").value=decodeURIComponent(text),
      a.select(),
      a.setSelectionRange(0, 99999),
      document.execCommand("copy"),
      document.getElementById("myInput").style.visibility="hidden",
      document.getElementById("myTooltip").innerHTML="Copied!"
}

function outFunc() {
   document.getElementById("myTooltip").innerHTML="Copy"
}

function createURL(a,e,n,i) {

   text="COVID-19%20("+date.toLocaleDateString()+") %0ACountry:%20"+a+" %0ACases:%20"+formatNumber(e.toString())+" %0ADeaths:%20"+formatNumber(n.toString())+" %0ARecovered:%20"+formatNumber(i.toString())+"%0A%0AVisit GeoCOVID.com for more:%0Ahttps://www.geocovid.com",
 
      document.getElementById("whats-share").href="https://wa.me/?text=*COVID-19%20("+date.toLocaleDateString()+")*%0ACountry:%20"+"*"+a+"*"+"%0ACases:%20"+formatNumber(e.toString())+"%0ADeaths:%20"+formatNumber(n.toString())+"%0ARecovered:%20"+formatNumber(i.toString())+'%0A%0AVisit GeoCOVID.com for more:%0Ahttps://www.geocovid.com',
      
      document.getElementById("twitter-share").href="https://twitter.com/intent/tweet?text="+text,
      
      document.getElementById("facebook-share").href="https://www.facebook.com/sharer.php?u=https://www.geocovid.com&quote="+text//,
      
      //document.getElementById("health-info").href="https://docs.google.com/forms/d/e/1FAIpQLSfxJuj4xwm2yoZ-spxQOuwX6BX6nXDmpLVboq-cW9lrqzX6AA/viewform?usp=pp_url&entry.1112886610="+a
}

function search(a) {
   log("Buscou '"+a+"'")
}

function toggleChart() {
   if(document.getElementById("chart").style.width="0px", isMobile&&0!=screen.width) {
      const a=isChartOpen?0: 100;
      document.getElementById("chart").style.width=a+"%",
         isChartOpen=!isChartOpen
   }
   else isChartOpen?(w=0, mymap.setMaxBounds(L.latLngBounds(L.latLng(-65, -180), L.latLng(90, 195)))):(w=450, mymap.setMaxBounds(L.latLngBounds(L.latLng(-65, -260), L.latLng(90, 195)))),
      logo_pos=35+w,
      document.getElementById("chart").style.width=w+"px",
      document.getElementById("hovering-logo").style.left=logo_pos+"px",
      isChartOpen=!isChartOpen
}

function openChart() {
   !isChartOpen&&toggleChart()
}

function closeChart() {
   !isChartOpen&&toggleChart()
}

function xhrRequest(a, e) {
   let n;
   if("undefined"!=typeof XMLHttpRequest)n=new XMLHttpRequest;
   else {
      const e=["MSXML2.XmlHttp.5.0",
               "MSXML2.XmlHttp.4.0",
               "MSXML2.XmlHttp.3.0",
               "MSXML2.XmlHttp.2.0",
               "Microsoft.XmlHttp"];
      for(let i=0;
          i<e.length;
          i++)try {
         n=new ActiveXObject(e[i]);
         break
      }
      catch(a) {}
   }
   n.onreadystatechange=function() {
      n.readyState<4||200===n.status&&4===n.readyState&&e(n)
   }
      ,
      n.open("GET", a, !0),
      n.send("")
}
