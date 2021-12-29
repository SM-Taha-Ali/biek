var naam = document.getElementById("name");
var dob = document.getElementById("date");
var gender = document.getElementById("gender");
var address = document.getElementById("address");
var contact = document.getElementById("contact");
var f_name = document.getElementById("f_name");
var nationality = document.getElementById("nationality");
var religion = document.getElementById("religion");
var cnic = document.getElementById("cnic");
var ps_code = document.getElementById("ps-code");
var mk_ID = document.getElementById("mk-ID");


var res_name = document.getElementById("res_name");
var res_fname = document.getElementById("res_fname");
var res_dob = document.getElementById("res_dob");
var res_nationality = document.getElementById("res_nationality");
var res_gender = document.getElementById("res_gender");
var res_religion = document.getElementById("res_religion");
var res_ps_code = document.getElementById("res_ps_code");
var res_mk = document.getElementById("res_mk");
var res_contact = document.getElementById("res_contact");
var res_address = document.getElementById("res_address");
var res_cnic = document.getElementById("res_cnic");


var ue = document.getElementById("ue");
var un = document.getElementById("un");
var ug = document.getElementById("ug");
var hc = document.getElementById("hc");
var en = document.getElementById("en");
var ea = document.getElementById("ea");
var accounting = document.getElementById("accounting");
var math = document.getElementById("math");
var commerce = document.getElementById("commerce");
var economics = document.getElementById("economics");

var subject = document.getElementById("subjects");
var subject2 = document.getElementById("subjects2");

var tbodyRef = document.getElementById('subjects').getElementsByTagName('tbody')[0];



function confirm(){
    res_name.value = naam.value;
    res_fname.value = f_name.value;
    res_dob.value = dob.value;
    res_nationality.value = nationality.value;
    res_ps_code.value = ps_code.value;
    res_religion.value = religion.value;
    res_cnic.value = cnic.value;
    res_mk.value = mk_ID.value;
    res_contact.value = contact.value;
    res_address.value = address.value;
    res_gender.value = gender.value;

    if (ue.checked){
        var row = tbodyRef.insertRow(); 
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.innerHTML = row.rowIndex;
        cell2.innerHTML = "Urdu Easy"
    } else if (un.checked){
        var row = tbodyRef.insertRow(); 
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.innerHTML = row.rowIndex;
        cell2.innerHTML = "Urdu Normal"
    } else if (ug.checked){
        var row = tbodyRef.insertRow(); 
        var cell1 = row.insertCell();
        var cell2 = row.insertCell();
        cell1.innerHTML = row.rowIndex;
        cell2.innerHTML = "Urdu Easy"
    }

    if (hc.checked){
        var row2 = tbodyRef.insertRow(); 
        var cell3 = row2.insertCell();
        var cell4 = row2.insertCell();
        cell3.innerHTML = row2.rowIndex;
        cell4.innerHTML = "History & Culture of Pakistan"
    }

    if (en.checked){
        var row3 = tbodyRef.insertRow(); 
        var cell5 = row3.insertCell();
        var cell6 = row3.insertCell();
        cell5.innerHTML = row3.rowIndex;
        cell6.innerHTML = "English Normal"
    } else if (ea.checked){
        var row3 = tbodyRef.insertRow(); 
        var cell5 = row3.insertCell();
        var cell6 = row3.insertCell();
        cell5.innerHTML = row3.rowIndex;
        cell6.innerHTML = "English Advanced"
    }

    if (accounting.checked){
        var row4 = tbodyRef.insertRow(); 
        var cell7 = row4.insertCell();
        var cell8 = row4.insertCell();
        cell7.innerHTML = row4.rowIndex;
        cell8.innerHTML = "Principle of Accounting"
    } if (math.checked){
        var row5 = tbodyRef.insertRow(); 
        var cell9 = row5.insertCell();
        var cell10 = row5.insertCell();
        cell9.innerHTML = row5.rowIndex;
        cell10.innerHTML = "Business Mathematics"
    } if (economics.checked) {
        var row6 = tbodyRef.insertRow(); 
        var cell11 = row6.insertCell();
        var cell12 = row6.insertCell();
        cell11.innerHTML = row6.rowIndex;
        cell12.innerHTML = "Principle of Economics"
    } if (commerce.checked){
        var row7 = tbodyRef.insertRow(); 
        var cell13 = row7.insertCell();
        var cell14 = row7.insertCell();
        cell13.innerHTML = row7.rowIndex;
        cell14.innerHTML = "Principle of Commerce"
    }


}
function callback() {
    document.getElementById("divLoading").style.display = 'none';
    document.getElementById("myalert").style.display = 'block';
    setTimeout(release,2500);
}

function release(){
    window.location.reload();
    document.getElementById("myalert").style.display = 'none';
}

function submit(){
    document.getElementById('divLoading').style.display = 'block'
    setTimeout(callback, 1500);
}



