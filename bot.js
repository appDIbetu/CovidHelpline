    var chatWindow = new Bubbles(document.getElementById("main"), "chatWindow")


    var bihar_helpline = "State Helpline Health Services: 104 <br>Gaya: 18003456613<br>Begusarai: 18003456604<br>Bhagalpur: 18003456606<br>Madhubani: 18003456623<br>Muzaffarpur: 18003456629<br>Darbhanga: 18003456610<br>East Champaran: 18003456624 Gopalganj: 18003456608<br>Jehanabad: 18003456614<br>Khagaria: 18003456620<br>Nalanda: 18003456119<br>Nawada: 18003456615<br>Purnia: 18003456619<br>Rohtas: 18003456637<br>Saharsa: 18003456633<br>Samistipur: 18003456635<br>Saran: 18003456607<br>Supaul: 18003456634<br>Vaishali: 18003456616"
    var jk_helpline = "Jammu:0191-2571912/2571616<br>Kashmir:0194-2440283/2430581/2452052/2457313/2457312<br>Srinagar:01942457543<br>Kathua:01922234314<br>Anantnag:01932-222255<br>Kupwara:01955-253658<br>Budgam:0195-1255237<br>Kulgam:01931-260388<br>Baramulla:01952-351261/7889534245"
    var jharkhand_helpline = "Health Services: 104<br>Ambulance: 108<br>East Singhbhum: 8987510050 (Whatsapp for bed), 9431301355 (Control room)<br>Jamshedpur: 0657-2440111/0657-2221717<br>Ranchi: 0651-2200008 (Control room), 0651-2200009 (Ambulance)"
    var punjab_helpline = "Punjab Control Room: 8872090029<br>Amritsar: 0183-2535323<br>Bathinda: 0164-2212501/7087086291<br>Ludhiana: 0161-4622276<br>SAS Nagar (Mohali): 7814641397"
    var kerela_helpline = "Covid Helpline DISHA: 0471-2309250/2309252/2552056/2551056<br>Ambulance: 108<br>Palakkad: 0491-2505264<br>Kozhikode: 0495-2371471<br>Ernakulam: 0484-2368802<br>Wayanad: 8590902880"
    var pune_helpline = "Covid Helpline: 020-67801500/020-25502110<br>Ambulance: 9689939381 and 108<br>Pune Control Room: 020-26127394<br>Pune ZP Control Room: 020-26138082<br>PCMC Control Room: 020-67331151/020-67331152<br>Covid Helpline for Hearse: 9689939628, 020-24503211/12"
    var surat_helpline = "24/7 Covid Helpline: 079-23250818<br>Ambulance: 108<br>Health Helpline: 104<br>Surat Covid Helpline Number: 18001238000"
    var bengaluru_helpline = "Covid Related Queries: 14410<br>Ambulance and Emergency: 108<br>West: 080-68248454<br>South: 8431816718<br>Mahadevapura: 080-23010101/23010102<br>Bommanahalli: 8884666670<br>Dasarahalli: 080-29635906"
    var kolkata_helpline = "Covid Helpline: 1800-313-444-222<br>Ambulance: 033-22197202<br>Ambulance for all areas under KMC and Bidhannagar:  033-40902929"
    var chennai_helpline = "Covid Helpline: 044-46122300/044-25384520<br>Ambulance: 108<br>Covid Care Assistance: 104"
    var mumbai_helpline = "Based on Wards:<br>A: 022-22700007<br>B: 022-23759023/022-23759025<br>C: 022-22197331<br>D: 022-23835004<br>E: 022-23797901<br>F South: 022-24177507/8657792809<br>F North: 022-24011380/8879150447 (Whatsapp)<br>G South: 022-24219515/7208764360<br>G North: 022-24210441/8291163739<br>H East: 022-26635400/8879203979<br>H West: 022-26440121<br>K East: 022-26847000/8657933681<br>K West: 022-26208388<br>P South: 022-28780008/8828476098/7304776098<br>P North: 022-69600000/69600001/69600002<br>R South: 022-28054788/8828495740 (Whatsapp)<br>R North: 022-28947350/8369324810 (Whatsapp)<br>R Central: 022-28947360/9920089097 (Whatsapp)<br>L: 022-26509901/7678061274/7710870510<br>M East: 022-25526301/7208680538/7208590415<br>M West: 022-25284000<br>N: 022-21010201<br>S: 022-25954000/9004869724<br>T: 022-25694000"

    var convo = {
      ice: {
        says: ["Welcome to COVIDWarrior","DISCLAIMER: The site just aggregates information from publicly available sources like twitter, google etc. Please verify before using any information. The developer is not liable or answerable for any loss. [अस्वीकरण: यह साइट केवल सार्वजनिक रूप से उपलब्ध स्रोतों जैसे ट्विटर, गूगल आदि से जानकारी एकत्र करती है। कृपया किसी भी जानकारी का उपयोग करने से पहले सत्यापित करें। डेवलपर किसी भी नुकसान के लिए उत्तरदायी या जवाबदेह नहीं है]।", "Please choose your language. [कृपया अपनी भाषा चुनें।]"],
        reply: [
          {
            question: "English",
            answer: "english"
          },
          {
            question: "हिंदी",
            answer: "hindi"
          },
        ]
      },
      english: {
        says: ["Please select the help you are in need for."],
        reply: [
          {
            question: "Ambulance services",
            answer: "ambulanceservicesEng"
          },
          {
            question: "Oxygen Cylinder / Oxygen Refill / Oxygen Bed / Oxygen Concentrator",
            answer: "parentOxygenEng"
          },
          {
            question: "Bed / ICU / Ventilator",
            answer: "icurootenglish"
          },
          {
            question: "Plasma",
            answer: "plasmaenglish"
          },
          {
            question: "Medicine / Injection",
            answer: "medicineenglish"
          },

          /*{
            question: "Hospitals Near Me",
            answer: "hospfuncenglish"
          },*/
          {
            question: "Official Helpline Number",
            answer: "helplineenglish"
          }
        ]
      },

      hindi: {
        says: ["आपको किस चीज के लिए मदद चाहिए?"],
        reply: [
          {
            question: "एम्बुलेंस सेवाएं",
            answer: "ambulancefunchindi"
          },
          {
            question: "आईसीयू / होम आईसीयू / बेड / वेंटिलेटर",
            answer: "icuroothindi"
          },
          {
            question: "ऑक्सीजन सिलेंडर / ऑक्सीजन रिफिल / ऑक्सीजन बेड / ऑक्सीजन कन्सेन्ट्रेटर",
            answer: "oxygenroothindi"
          },
          {
            question: "प्लाज्मा",
            answer: "plasmahindi"
          },
          {
            question: "दवा",
            answer: "medicinehindi"
          },
          /*{
            question: "खाना",
            answer: "foodfunchindi"
          },*/
          /*{
            question: "ऑनलाइन चिकित्सक परामर्श",
            answer: "onlineconchindi"
          },
          {
            question: "आपके आस-पास के अस्पताल खोजें",
            answer: "hospfunchindi"
          },*/
          {
            question: "आधिकारिक हेल्पलाइन नंबर",
            answer: "helplinehindi"
          }/*,
          {
            question: "टीकाकरण स्लॉट- 2 सप्ताह",
            answer: "vaccinationhindi"
          }*/
          // {
          //   question: "Vaccination (टीका)",
          //   answer: "vaccinefunc"
          // }
        ]
      },

      "vaccinationenglish": {
        says: ["Select your age group 👇"],
        reply: [
          {
            question: "Under 45",
            answer: "vaccinationfuncu45"
          },
          {
            question: "Above 45",
            answer: "vaccinationfunca45"
          }
        ]
      },

      "vaccinationhindi": {
        says: ["अपने आयु वर्ग का चयन करें 👇"],
        reply: [
          {
            question: "45 से कम",
            answer: "vaccinationfuncu45"
          },
          {
            question: "45 से अधिक",
            answer: "vaccinationfunca45"
          }
        ]
      },


      "icurootenglish": {
        says: ["What do you need help with?"],
        reply: [
          {
            question: "ICU",
            answer: "icufuncenglish"
          },
          {
            question: "Bed",
            answer: "bedfuncenglish"
          },
          {
            question: "Oxygen Bed",
            answer: "oxygenbedfuncenglish"
          },
          {
            question: "Ventilator",
            answer: "ventilatorfuncenglish"
          },
          {
            question: "Home ICU",
            answer: "homeicufuncenglish"
          }
        ]
      },


      "icuroothindi": {
        says: ["आपको कैसी सहायता चाहिए?"],
        reply: [
          {
            question: "आईसीयू",
            answer: "icufunchindi"
          },
          {
            question: "बेड",
            answer: "bedfunchindi"
          },
          {
            question: "ऑक्सीजन बेड",
            answer: "oxygenbedfunchindi"
          },
          {
            question: "वेंटिलेटर",
            answer: "ventilatorfunchindi"
          },
          {
            question: "होम आईसीयू",
            answer: "homeicufunchindi"
          }
        ]
      },

      "parentOxygenEng": {
        says: ["What do you need help with?"],
        reply: [
          {
            question: "Oxygen",
            answer: "oxygenfuncenglish"
          },
          {
            question: "Oxygen Bed",
            answer: "oxygenbedfuncenglish"
          },
          {
            question: "Oxygen Refill",
            answer: "oxygenrefillfuncenglish"
          },
          {
            question: "Oxygen Concentrator",
            answer: "oxygenconcfuncenglish"
          }
        ]
      },

      "oxygenroothindi": {
        says: ["आपको कैसी सहायता चाहिए?"],
        reply: [
          {
            question: "ऑक्सीजन",
            answer: "oxygenfunchindi"
          },
          {
            question: "ऑक्सीजन बेड",
            answer: "oxygenbedfunchindi"
          },
          {
            question: "ऑक्सीजन रिफिल",
            answer: "oxygenrefillfunchindi"
          },
          {
            question: "ऑक्सीजन concentrator",
            answer: "oxygenconcfunchindi"
          }
        ]
      },

      "helplineenglish": {
        says: ["The helpline numbers are available for the below locations"],
        reply: [
          {
            question: "Bihar",
            answer: "biharhelp"
          },
          {
            question: "Mumbai",
            answer: "mumbaihelp"
          },
          {
            question: "Chennai",
            answer: "chennaihelp"
          },
          {
            question: "Kolkata",
            answer: "kolkatahelp"
          },
          {
            question: "Bengaluru",
            answer: "bengaluruhelp"
          },
          {
            question: "Pune",
            answer: "punehelp"
          },
          {
            question: "Kerala",
            answer: "kerelahelp"
          },
          {
            question: "Punjab",
            answer: "punjabhelp"
          },
          {
            question: "Jharkhand",
            answer: "jharkhandhelp"
          },
          {
            question: "Jammu & Kashmir",
            answer: "jkhelp"
          },
          {
            question: "Surat",
            answer: "surathelp"
          }
        ]
      },

      "helplinehindi": {
        says: ["हेल्पलाइन नंबर नीचे लिखे स्थानों के लिए उपलब्ध हैं"],
        reply: [
          {
            question: "Bihar",
            answer: "biharhelp"
          },
          {
            question: "मुंबई",
            answer: "mumbaihelp"
          },
          {
            question: "चेन्नई",
            answer: "chennaihelp"
          },
          {
            question: "कोलकाता",
            answer: "kolkatahelp"
          },
          {
            question: "बेंगलुरु",
            answer: "bengaluruhelp"
          },
          {
            question: "पुणे",
            answer: "punehelp"
          },
          {
            question: "केरल",
            answer: "keralahelp"
          },
          {
            question: "पंजाब",
            answer: "punjabhelp"
          },
          {
            question: "झारखंड",
            answer: "jharkhandhelp"
          },
          {
            question: "जम्मू & कश्मीर",
            answer: "jkhelp"
          },
          {
            question: "सूरत",
            answer: "surathelp"
          }
        ]
      },

      "biharhelp": {
        says: [bihar_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "jkhelp": {
        says: [jk_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "punjabhelp": {
        says: [punjab_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "keralahelp": {
        says: [kerela_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "punehelp": {
        says: [pune_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "bengaluruhelp": {
        says: [bengaluru_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "kolkatahelp": {
        says: [kolkata_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "chennaihelp": {
        says: [chennai_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "mumbaihelp": {
        says: [mumbai_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "surathelp": {
        says: [surat_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "jharkhandhelp": {
        says: [jharkhand_helpline],
        reply: [
          {
            question: "Start Over",
            answer: "ice"
          }
        ],
      },

      "onlineconcenglish": {
        says: ["You may use these external links to book a consultation online"],
        reply: [
          {
            question: "Tata Health",
            answer: "thfuncenglish"
          },
          {
            question: "1mg",
            answer: "mgfuncenglish"
          },
          {
            question: "mFine",
            answer: "mfinefuncenglish"
          },
          {
            question: "DocOnline",
            answer: "doconlinefuncenglish"
          },
          {
            question: "Lybrate",
            answer: "lyrabatefuncenglish"
          }
        ]
      },

      "onlineconchindi": {
        says: ["आप एक परामर्श ऑनलाइन बुक करने के लिए इन बाहरी लिंक का उपयोग कर सकते हैं"],
        reply: [
          {
            question: "टाटा हेल्थ",
            answer: "thfunchindi"
          },
          {
            question: "1mg",
            answer: "mgfunchindi"
          },
          {
            question: "mFine",
            answer: "mfinefunchindi"
          },
          {
            question: "DocOnline",
            answer: "doconlinefunchindi"
          },
          {
            question: "Lybrate",
            answer: "lyrabatefunchindi"
          }
        ]
      },

      "plasmaenglish": {
        says: ["Please select the source from where you would like to search for plasma"],
        reply: [
          {
            question: "LATEST FROM TWITTER (ALL BLOOD GROUPS)",
            answer: "plasmafuncenglish"
          },
          {
            question: "LATEST FROM TWITTER (Specific Blood Group)",
            answer: "Plasmagroupenglish"
          },
          {
            question: "Search on dhoondh.com",
            answer: "plasmadhoondhenglishfunc"
          },
          {
            question: "Search on plasmadonor.in",
            answer: "plasmadonorenglishfunc"
          },
          {
            question: "Search on pintnetwork.com",
            answer: "plasmapintenglishfunc"
          },
          {
            question: "Search on plasmaline.in",
            answer: "plasmalineenglishfunc"
          },
          {
            question: "Search on givered.in",
            answer: "plasmagiveredenglishfunc"
          }
        ]
      },

      "plasmahindi": {
        says: ["कृपया उस स्रोत का चयन करें जहाँ से आप प्लाज्मा की खोज करना चाहते हैं"],
        reply: [
          {
            question: "ट्विटर से नवीनतम (सभी रक्त समूह)",
            answer: "plasmafunchindi"
          },
          {
            question: "विटर से नवीनतम (विशिष्ट रक्त समूह)",
            answer: "Plasmagrouphindi"
          },
          {
            question: "dhoondh.com पर सर्च करें",
            answer: "plasmadhoondhhindifunc"
          },
          {
            question: "plasmadonor.in पर सर्च करें",
            answer: "plasmadonorhindifunc"
          },
          {
            question: "pintnetwork.com पर सर्च करें",
            answer: "plasmapinthindifunc"
          },
          {
            question: "plasmaline.in पर सर्च करें",
            answer: "plasmalinehindifunc"
          },
          {
            question: "givered.in पर सर्च करें",
            answer: "plasmagiveredhindifunc"
          }
        ]
      },


      "Plasmagroupenglish": {
        says: ["You are looking for plasma for which blood groups?"],
        reply: [
          {
            question: "A+",
            answer: "plasmafuncapenglish"
          },
          {
            question: "A-",
            answer: "plasmafuncanenglish"
          },
          {
            question: "B+",
            answer: "plasmafuncbpenglish"
          },
          {
            question: "B-",
            answer: "plasmafuncbnenglish"
          },
          {
            question: "O+",
            answer: "plasmafuncopenglish"
          },
          {
            question: "O-",
            answer: "plasmafunconenglish"
          },
          {
            question: "AB+",
            answer: "plasmafuncabpenglish"
          },
          {
            question: "AB-",
            answer: "plasmafuncabnenglish"
          }
        ]
      },

      "Plasmagrouphindi": {
        says: ["आप कौन से रक्त समूह के लिए प्लाज्मा की तलाश कर रहे हैं?"],
        reply: [
          {
            question: "A+",
            answer: "plasmafuncaphindi"
          },
          {
            question: "A-",
            answer: "plasmafuncanhindi"
          },
          {
            question: "B+",
            answer: "plasmafuncbphindi"
          },
          {
            question: "B-",
            answer: "plasmafuncbnhindi"
          },
          {
            question: "O+",
            answer: "plasmafuncophindi"
          },
          {
            question: "O-",
            answer: "plasmafunconhindi"
          },
          {
            question: "AB+",
            answer: "plasmafuncabphindi"
          },
          {
            question: "AB-",
            answer: "plasmafuncabnhindi"
          }
        ]
      },

      "medicineenglish": {
        says: ["Which medicine are you looking for?"],
        reply: [
          {
            question: "Remdesivir",
            answer: "remdesivirfuncenglish"
          },
          {
            question: "Tocilizumab",
            answer: "tocilizumabfuncenglish"
          },
          {
            question: "Fabiflu",
            answer: "fabiflufuncenglish"
          },
          {
            question: "Favivir",
            answer: "favivirfuncenglish"
          },
          {
            question: "Favipiravir",
            answer: "favipiravirfuncenglish"
          },
          {
            question: "Other medicines",
            answer: "othermedicinefuncenglish"
          }
        ]
      },

      "medicinehindi": {
        says: ["Which medicine are you looking for? (आप किस दवा की तलाश कर रहे हैं?)"],
        reply: [
          {
            question: "रेमेडीसविर",
            answer: "remdesivirfunchindi"
          },
          {
            question: "टोसिलिज़ुमाब",
            answer: "tocilizumabfunchindi"
          },
          {
            question: "फैबिफ्लू",
            answer: "fabiflufunchindi"
          },
          {
            question: "फैवीवीर",
            answer: "favivirfunchindi"
          },
          {
            question: "Favipiravir",
            answer: "favipiravirfunchindi"
          },
          {
            question: "अन्य दवाएं",
            answer: "othermedicinefunchindi"
          }
        ]
      }


    }

    onSubmitButton = function (queryText) {


      var searchquery = '';
      //var city = window.prompt("Enter the city where you need help:");
      var city = document.getElementById("cityname").value;

      if (!city) {
        city = 'India'
      }
      if (cityTier(city)) {
        searchquery += 'verified '
      }
      searchquery += city + ' (' + queryText + ') ' + '-"not verified" -"un verified" -"urgent" -"unverified" -"needed" -"required" -"need" -"needs" -"requirement" -"Any verified lead"';
      var todayDate = new Date();
      var numberOfDays = 3;
      todayDate.setDate(todayDate.getDate() - numberOfDays);
      var dd = todayDate.getDate();
      var mm = todayDate.getMonth() + 1;
      var y = todayDate.getFullYear();
      var queryDate = y + '-' + mm + '-' + dd;
      twitterquery = "https://twitter.com/search?q=" + searchquery + " since%3A" + queryDate + '&f=live';
      window.open(twitterquery, '_blank');
      /*if (window.confirm("Would you like to go to Twitter to check the relevant posts?\nOnce it redirects to Twitter, please click on the LATEST tab")) {
        window.location.href = twitterquery, '_blank';
      }*/
      chatWindow.talk(convo, "ice")
    }



    function cityTier(city) {
      var majorCity = ["Mumbai", "mumbai", "MUMBAI", "Delhi", "delhi", "DELHI", "Chennai", "chennai", "CHENNAI", "Kolkata", "kolkata", "KOLKATA", "Bangalore", "bangalore", "BANGALORE", "Bengaluru", "bengaluru", "BENGALURU", "Gurugram", "gurugram", "GURUGRAM", "Gurgaon", "gurgaon", "GURGAON"];
      var isMajorCity = majorCity.includes(city);
      return isMajorCity
    }

    icufuncenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'icu'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    icufunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'icu'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    bedfuncenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'bed'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    bedfunchindi = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'bed'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

      /*var searchquery = '';
      var city = window.prompt("आपको किस शहर में मदद की ज़रूरत है?");
      if (!city) {
        city = 'India'
      }
      if (cityTier(city)) {
        searchquery += 'verified '
      }
      searchquery += city + ' (bed) ' + '-"not verified" -"un verified" -"urgent" -"unverified" -"needed" -"required" -"need" -"needs" -"requirement" -"Any verified lead"';
      var todayDate = new Date();
      var numberOfDays = 3;
      todayDate.setDate(todayDate.getDate() - numberOfDays);
      var dd = todayDate.getDate();
      var mm = todayDate.getMonth() + 1;
      var y = todayDate.getFullYear();
      var queryDate = y + '-' + mm + '-' + dd;
      twitterquery = "https://twitter.com/search?q=" + searchquery + " since%3A" + queryDate + '&f=live';
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?\nएक बार जब यह ट्विटर पर पुनर्निर्देशित हो जाता है, तो कृपया LATEST टैब पर क्लिक करें")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")*/
    }


    oxygenbedfuncenglish = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'oxygen bed'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }


      /*if (!city) {
        city = 'India'
      }
      if (cityTier(city)) {
        searchquery += 'verified '
      }
      searchquery += city + ' ("oxygen bed") ' + '-"not verified" -"un verified" -"urgent" -"unverified" -"needed" -"required" -"need" -"needs" -"requirement" -"Any verified lead"';
      var todayDate = new Date();
      var numberOfDays = 3;
      todayDate.setDate(todayDate.getDate() - numberOfDays);
      var dd = todayDate.getDate();
      var mm = todayDate.getMonth() + 1;
      var y = todayDate.getFullYear();
      var queryDate = y + '-' + mm + '-' + dd;
      twitterquery = "https://twitter.com/search?q=" + searchquery + " since%3A" + queryDate + '&f=live';
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?\nOnce it redirects to Twitter, please click on the LATEST tab")) {
        window.location.href = twitterquery, '_blank';
      }*/
      //chatWindow.talk(convo, "ice")
    }

    oxygenbedfunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'oxygen bed'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    oxygenrefillfuncenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action="#"><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'oxygen refill'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    oxygenrefillfunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'oxygen refill'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    oxygenfuncenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'oxygen'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    oxygenfunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'oxygen'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    ventilatorfuncenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'ventilator'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    ventilatorfunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'ventilator'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    remdesivirfuncenglish = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'remdesivir OR remdesevir OR ramdesivir OR ramdesevir'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    remdesivirfunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'remdesivir OR remdesevir OR ramdesivir OR ramdesevir'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    tocilizumabfuncenglish = function () {


      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'tocilizumab'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    tocilizumabfunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'tocilizumab'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    fabiflufuncenglish = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'fabiflu OR faviflu'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    fabiflufunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'fabiflu OR faviflu'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    favivirfuncenglish = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'favivir OR favibir OR fabivir OR fabibir OR faviveer'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    favivirfunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'favivir OR favibir OR fabivir OR fabibir OR faviveer'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    favipiravirfuncenglish = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'favipiravir OR favipirabir OR favipiraveer OR fabipiravir'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    favipiravirfunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'favipiravir OR favipirabir OR favipiraveer OR fabipiravir'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    vaccinefunc = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'vaccine OR vaccination OR covaxin OR covishield'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    oxygenconcfuncenglish = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'oxygen concentrator'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    oxygenconcfunchindi = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'oxygen concentrator'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    plasmafuncapenglish = function () {


      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma A+'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    plasmafuncaphindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma A+'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncanenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma A-'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncanhindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma A-'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncbpenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma B+'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncbphindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma B+'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncbnenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma B-'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncbnhindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma B-'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncopenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma O+'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncophindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma O+'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafunconenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma O-'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafunconhindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma O-'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncabpenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma AB+'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncabphindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma AB+'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncabnenglish = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma AB-'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    plasmafuncabnhindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'plasma AB-'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    foodfuncenglish = function () {
      twitterquery = "https://covidmealsforindia.com";
      if (window.confirm("Would you like to go to the website to find food?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    foodfunchindi = function () {
      twitterquery = "https://covidmealsforindia.com";
      if (window.confirm("क्या आप खाना खोजने के लिए वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    othermedicinefuncenglish = function () {
      var searchquery = '';
      var medicineName = window.prompt("Which medicine are you looking for?");
      if (!medicineName) {
        medicineName = ''
      }
      var city = window.prompt("Enter the city where you need help:");
      if (!city) {
        city = 'India'
      }
      if (cityTier(city)) {
        searchquery += 'verified '
      }
      searchquery += city + ' (' + medicineName + ') -"not verified" -"un verified" -"urgent" -"unverified" -"needed" -"required" -"need" -"needs" -"requirement" -"Any verified lead"';
      var todayDate = new Date();
      var numberOfDays = 3;
      todayDate.setDate(todayDate.getDate() - numberOfDays);
      var dd = todayDate.getDate();
      var mm = todayDate.getMonth() + 1;
      var y = todayDate.getFullYear();
      var queryDate = y + '-' + mm + '-' + dd;
      twitterquery = "https://twitter.com/search?q=" + searchquery + " since%3A" + queryDate + '&f=live';
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?\nOnce it redirects to Twitter, please click on the LATEST tab")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    othermedicinefunchindi = function () {
      var searchquery = '';
      var medicineName = window.prompt("आप किस दवा की तलाश कर रहे हैं?");
      if (!medicineName) {
        medicineName = ''
      }
      var city = window.prompt("आपको किस शहर में मदद की ज़रूरत है?");
      if (!city) {
        city = 'India'
      }
      if (cityTier(city)) {
        searchquery += 'verified '
      }
      searchquery += city + ' (' + medicineName + ') -"not verified" -"un verified" -"urgent" -"unverified" -"needed" -"required" -"need" -"needs" -"requirement" -"Any verified lead"';
      var todayDate = new Date();
      var numberOfDays = 3;
      todayDate.setDate(todayDate.getDate() - numberOfDays);
      var dd = todayDate.getDate();
      var mm = todayDate.getMonth() + 1;
      var y = todayDate.getFullYear();
      var queryDate = y + '-' + mm + '-' + dd;
      twitterquery = "https://twitter.com/search?q=" + searchquery + " since%3A" + queryDate + '&f=live';
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?\nएक बार जब यह ट्विटर पर पुनर्निर्देशित हो जाता है, तो कृपया LATEST टैब पर क्लिक करें")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    ambulanceservicesEng = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'ambulance'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    ambulancefunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'ambulance'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    homeicufuncenglish = function () {

      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'Home ICU'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }

    }

    homeicufunchindi = function () {
      var dynamic = document.createElement("div");
      dynamic.innerHTML = '<br><br><br><span class="bubble-button bubble-pick" style="text-align:right; animation-delay: 200ms;"><form action=""><label for="fname">Enter city name</label>' +
        '<input  style="height:20px;" type = "text" id = "cityname" name = "fname"> <br><br>' +
        '<input onclick="onSubmitButton(' + "'Home ICU'" + ')" type="submit" value="Search"></form></span>';
      var elements = document.getElementsByClassName("bubble-content");
      if (elements.length > 0) {
        // just change the first, as you did in your post
        elements[elements.length - 1].parentNode.insertBefore(dynamic, elements[elements.length - 1].nextSibling);
      }
    }

    helperfunc = function () {
      var city = window.prompt("Enter the city where you need help: (आपको किस शहर में मदद की ज़रूरत है?)");
      if (!city) {
        city = 'India'
      }
      searchquery = "verified " + city + " (Nurse OR 'Domestic help' OR 'househelp' OR 'house help' OR 'personal help' OR 'maid' OR 'servant' OR 'servent') " + "-'not verified' -'un verified' -urgent -unverified -needed -required -need -needs -requirement -'Any verified lead'";
      var todayDate = new Date();
      var numberOfDays = 4;
      todayDate.setDate(todayDate.getDate() - numberOfDays);
      var dd = todayDate.getDate();
      var mm = todayDate.getMonth() + 1;
      var y = todayDate.getFullYear();
      var queryDate = y + '-' + mm + '-' + dd;
      twitterquery = "https://twitter.com/search?q=" + searchquery + " since%3A" + queryDate + '&f=live';
      if (window.confirm("Would you like to go to Twitter to check the relevant posts? (क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?)\nOnce it redirects to Twitter, please click on the LATEST tab")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    thfuncenglish = function () {
      twitterquery = "https://www.tatahealth.com/online-Doctor-consultation/general-physician";
      if (window.confirm("Would you like to go to the website to get the online consultation?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    thfunchindi = function () {
      twitterquery = "https://www.tatahealth.com/online-Doctor-consultation/general-physician";
      if (window.confirm("क्या आप ऑनलाइन परामर्श प्राप्त करने के लिए वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    mgfuncenglish = function () {
      twitterquery = "https://www.1mg.com/online-doctor-consultation/chat";
      if (window.confirm("Would you like to go to the website to get the online consultation?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    mgfunchindi = function () {
      twitterquery = "https://www.1mg.com/online-doctor-consultation/chat";
      if (window.confirm("क्या आप ऑनलाइन परामर्श प्राप्त करने के लिए वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    mfinefuncenglish = function () {
      twitterquery = "https://www.mfine.co/consult/speciality/5a11a908a183a17859a49ed5";
      if (window.confirm("Would you like to go to the website to get the online consultation?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    mfinefunchindi = function () {
      twitterquery = "https://www.mfine.co/consult/speciality/5a11a908a183a17859a49ed5";
      if (window.confirm("क्या आप ऑनलाइन परामर्श प्राप्त करने के लिए वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    doconlinefuncenglish = function () {
      twitterquery = "https://app.doconline.com/unregistered_user#/book-appointment";
      if (window.confirm("Would you like to go to the website to get the online consultation?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    doconlinefunchindi = function () {
      twitterquery = "https://app.doconline.com/unregistered_user#/book-appointment";
      if (window.confirm("क्या आप ऑनलाइन परामर्श प्राप्त करने के लिए वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    lyrabatefuncenglish = function () {
      twitterquery = "https://www.lybrate.com/consult-privately/general-physician#doctorListing";
      if (window.confirm("Would you like to go to the website to get the online consultation?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    lyrabatefunchindi = function () {
      twitterquery = "https://www.lybrate.com/consult-privately/general-physician#doctorListing";
      if (window.confirm("क्या आप ऑनलाइन परामर्श प्राप्त करने के लिए वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmadhoondhenglishfunc = function () {
      twitterquery = "https://dhoondh.com/patient?qoute=a7b2d0fa-680e-435b-bfd6-600b62711bdb";
      if (window.confirm("Would you like to go to the external website to find plasma resources?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmadhoondhhindifunc = function () {
      twitterquery = "https://dhoondh.com/patient?qoute=a7b2d0fa-680e-435b-bfd6-600b62711bdb";
      if (window.confirm("क्या आप प्लाज्मा संसाधनों को खोजने के लिए बाहरी वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmadonorenglishfunc = function () {
      twitterquery = "https://plasmadonor.in/for-patient/";
      if (window.confirm("Would you like to go to the external website to find plasma resources?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmadonorhindifunc = function () {
      twitterquery = "https://plasmadonor.in/for-patient/";
      if (window.confirm("क्या आप प्लाज्मा संसाधनों को खोजने के लिए बाहरी वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmapintenglishfunc = function () {
      twitterquery = "https://pintnetwork.com/patient";
      if (window.confirm("Would you like to go to the external website to find plasma resources?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmapinthindifunc = function () {
      twitterquery = "https://pintnetwork.com/patient";
      if (window.confirm("क्या आप प्लाज्मा संसाधनों को खोजने के लिए बाहरी वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmalineenglishfunc = function () {
      twitterquery = "https://plasmaline.in/patients/";
      if (window.confirm("Would you like to go to the external website to find plasma resources?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmalinehindifunc = function () {
      twitterquery = "https://plasmaline.in/patients/";
      if (window.confirm("क्या आप प्लाज्मा संसाधनों को खोजने के लिए बाहरी वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmagiveredenglishfunc = function () {
      twitterquery = "https://givered.in/user_health_assessment/new?form_id=57&public_req_type=true";
      if (window.confirm("Would you like to go to the external website to find plasma resources?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    plasmagiveredhindifunc = function () {
      twitterquery = "https://givered.in/user_health_assessment/new?form_id=57&public_req_type=true";
      if (window.confirm("क्या आप प्लाज्मा संसाधनों को खोजने के लिए बाहरी वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    hospfuncenglish = function () {
      var city = window.prompt("Enter the pincode or the city or the locality name");
      if (!city) {
        city = 'India'
      }
      twitterquery = "https://www.google.com/search?safe=active&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk00MgnEm_ZHiOprUOCC5R5VeI-9FLA:1619779660987&q=hospital+near+" + city;
      if (window.confirm("Would you like to go to the website to find the nearby hospitals?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    hospfunchindi = function () {
      var city = window.prompt("पिनकोड या शहर या इलाके का नाम दर्ज करें?");
      if (!city) {
        city = 'India'
      }
      twitterquery = "https://www.google.com/search?safe=active&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk00MgnEm_ZHiOprUOCC5R5VeI-9FLA:1619779660987&q=hospital+near+" + city;
      if (window.confirm("क्या आप पास के अस्पतालों को खोजने के लिए वेबसाइट पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    mumbaihelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388116905395847170";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    mumbaihelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388116905395847170";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    chennaihelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388089986046693376";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    chennaihelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388089986046693376";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    kolhelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388093877551210497";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    kolhelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388093877551210497";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    banghelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388093958069243905";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    banghelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388093958069243905";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    punehelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388096238935973888";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    punehelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388096238935973888";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    keralahelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388097878548094977";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    keralahelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388097878548094977";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    gujhelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388094800461660160";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    gujhelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388094800461660160";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    punhelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388191003182452736";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    punhelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1388191003182452736";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    jharkhandhelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1389283556782874626";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    jharkhandhelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1389283556782874626";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    jkhelpfuncenglish = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1389285300166303747";
      if (window.confirm("Would you like to go to Twitter to check the relevant posts?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    jkhelpfunchindi = function () {
      twitterquery = "https://twitter.com/CovidHelpline6/status/1389285300166303747";
      if (window.confirm("क्या आप संबंधित पोस्टों की जांच करने के लिए ट्विटर पर जाना चाहेंगे?")) {
        window.location.href = twitterquery, '_blank';
      }
      chatWindow.talk(convo, "ice")
    }

    function httpGet(theUrl) {
      var xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", theUrl, false);
      xmlHttp.send(null);
      return xmlHttp.responseText;
    }

    var getDates = function (startDate, endDate) {
      var dates = [],
        currentDate = startDate,
        addDays = function (days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
      while (currentDate <= endDate) {
        dates.push(currentDate);
        currentDate = addDays.call(currentDate, 1);
      }
      return dates;
    };


    function validatePIN(pin) {
      return /^(\d{6})$/.test(pin);
    }


    vaccinationfuncu45 = function () {
      var pincode = window.prompt("Enter your pincode: (अपना पिनकोड दर्ज करें)");
      pin = validatePIN(pincode)
      if (!pin) {
        alert('The pincode entered is invalid');
        chatWindow.talk(convo, "ice")
      }
      var print_msg = ""
      if (pin) {
        var age = '25'

        var count = 0
        var todayDate = new Date();

        var dates = getDates(new Date(), todayDate.setDate(todayDate.getDate() + 14));

        dates.forEach(function (date) {
          var dd = date.getDate();
          var mm = date.getMonth() + 1;
          var y = date.getFullYear();
          var queryDate = dd + '-' + mm + '-' + y;

          URL = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" + pincode + "&date='" + queryDate + "'";
          response = httpGet(URL)
          json_response = JSON.parse(response)

          var flag = false

          if (json_response['centers'].length != 0) {
            var vax_msg = "Available on: " + date.toDateString() + "\n"
            for (var i = 0; i < json_response['centers'].length; i++) {
              for (var j = 0; j < json_response['centers'][i]['sessions'].length; j++) {
                if (json_response['centers'][i]['sessions'][j]["min_age_limit"] <= age) {
                  print_msg = print_msg + vax_msg + json_response['centers'][i]["name"] + "\n" + json_response['centers'][i]["block_name"] + "\n" + "Price: " + json_response['centers'][i]["fee_type"] + "\n" //+ "Available Capacity: " + json_response['centers'][i]['sessions'][j]["available_capacity"] + "\n\n"
                  count += 1
                  if (json_response['centers'][i]['sessions'][j]["vaccine"] != '') {
                    print_msg = print_msg + "Vaccine: " + json_response['centers'][i]['sessions'][j]["vaccine"] + "<br><br>"
                  }
                  break
                }
              }
            }
          }
        })
        if (count == 0) {
          print_msg = "No slots available in the next two weeks for your age group."
        }
        convo["vaccineresponse"] = {
          says: [print_msg], reply: [
            {
              question: "Start Over",
              answer: "ice"
            }
          ],
        }
        chatWindow.talk(convo, "vaccineresponse")
      }
    }


    vaccinationfunca45 = function () {
      var pincode = window.prompt("Enter your pincode: (अपना पिनकोड दर्ज करें)");
      pin = validatePIN(pincode)
      if (!pin) {
        alert('The pincode entered is invalid');
        chatWindow.talk(convo, "ice")
      }

      var print_msg = ""
      if (pin) {
        var age = '55'

        var count = 0
        var todayDate = new Date();

        var dates = getDates(new Date(), todayDate.setDate(todayDate.getDate() + 14));

        dates.forEach(function (date) {
          var dd = date.getDate();
          var mm = date.getMonth() + 1;
          var y = date.getFullYear();
          var queryDate = dd + '-' + mm + '-' + y;

          URL = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode=" + pincode + "&date='" + queryDate + "'";
          response = httpGet(URL)
          json_response = JSON.parse(response)

          var flag = false

          if (json_response['centers'].length != 0) {
            var vax_msg = "Available on: " + date.toDateString() + "\n"
            for (var i = 0; i < json_response['centers'].length; i++) {
              for (var j = 0; j < json_response['centers'][i]['sessions'].length; j++) {
                if (json_response['centers'][i]['sessions'][j]["min_age_limit"] <= age) {
                  print_msg = print_msg + vax_msg + json_response['centers'][i]["name"] + "\n" + json_response['centers'][i]["block_name"] + "\n" + "Price: " + json_response['centers'][i]["fee_type"] + "\n" //+ "Available Capacity: " + json_response['centers'][i]['sessions'][j]["available_capacity"] + "\n\n"
                  count += 1
                  if (json_response['centers'][i]['sessions'][j]["vaccine"] != '') {
                    print_msg = print_msg + "Vaccine: " + json_response['centers'][i]['sessions'][j]["vaccine"] + "<br><br>"
                  }
                  break
                }
              }
            }
          }
        })
        if (count == 0) {
          print_msg = "No slots available in the next 2 weeks for your age group."
        }
        convo["vaccineresponse"] = {
          says: [print_msg], reply: [
            {
              question: "Start Over",
              answer: "ice"
            }
          ],
        }
        chatWindow.talk(convo, "vaccineresponse")
      }
    }


    chatWindow.talk(convo)