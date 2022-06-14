window.onload = function () {
    document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);
    document.addEventListener("keydown", function (e) {
        //document.onkeydown = function(e) {
        // "I" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
            disabledEvent(e);
        }
        // "J" key
        if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
            disabledEvent(e);
        }
        // "S" key + macOS
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)) {
            disabledEvent(e);
        }
        // "U" key
        if (e.ctrlKey && e.keyCode == 85) {
            disabledEvent(e);
        }
        // "F12" key
        if (event.keyCode == 123) {
            disabledEvent(e);
        }
    }, false);
    function disabledEvent(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        } else if (window.event) {
            window.event.cancelBubble = true;
        }
        e.preventDefault();
        return false;
    }
}
function clear() {
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";
}
function printer(k) {


    if (k == 'F') {
        document.getElementById('friend').style.display = "none";
        document.getElementById('love').style.display = "none";
        document.getElementById('affec').style.display = "none";
        document.getElementById('marr').style.display = "none";
        document.getElementById('enem').style.display = "none";
        document.getElementById('sib').style.display = "none";
        document.getElementById('friend').style.display = "block";
    }
    else if (k == 'L') {
        document.getElementById('friend').style.display = "none";
        document.getElementById('love').style.display = "none";
        document.getElementById('affec').style.display = "none";
        document.getElementById('marr').style.display = "none";
        document.getElementById('enem').style.display = "none";
        document.getElementById('sib').style.display = "none";
        document.getElementById('love').style.display = "block";
    }
    else if (k == 'A') {
        document.getElementById('friend').style.display = "none";
        document.getElementById('love').style.display = "none";
        document.getElementById('affec').style.display = "none";
        document.getElementById('marr').style.display = "none";
        document.getElementById('enem').style.display = "none";
        document.getElementById('sib').style.display = "none";
        document.getElementById('affec').style.display = "block";
    }
    else if (k == 'M') {
        document.getElementById('friend').style.display = "none";
        document.getElementById('love').style.display = "none";
        document.getElementById('affec').style.display = "none";
        document.getElementById('marr').style.display = "none";
        document.getElementById('enem').style.display = "none";
        document.getElementById('sib').style.display = "none";
        document.getElementById('marr').style.display = "block";
    }
    else if (k == 'E') {
        document.getElementById('friend').style.display = "none";
        document.getElementById('love').style.display = "none";
        document.getElementById('affec').style.display = "none";
        document.getElementById('marr').style.display = "none";
        document.getElementById('enem').style.display = "none";
        document.getElementById('sib').style.display = "none";
        document.getElementById('enem').style.display = "block";
    }
    else {
        document.getElementById('friend').style.display = "none";
        document.getElementById('love').style.display = "none";
        document.getElementById('affec').style.display = "none";
        document.getElementById('marr').style.display = "none";
        document.getElementById('enem').style.display = "none";
        document.getElementById('sib').style.display = "none";
        document.getElementById('sib').style.display = "block";
    }
    if (document.getElementById('btn').innerHTML == "Try Another!"){
        clear();
        document.getElementById('friend').style.display = "none";
        document.getElementById('love').style.display = "none";
        document.getElementById('affec').style.display = "none";
        document.getElementById('marr').style.display = "none";
        document.getElementById('enem').style.display = "none";
        document.getElementById('sib').style.display = "none";
        document.getElementById('btn').innerHTML = "GO!";
    }
    else
        document.getElementById('btn').innerHTML = "Try Another!";
}
function f1(s1, s2) {
    for (var i = 0; i < s1.length; i++) {
        for (var j = 0; j < s2.length; j++) {
            if (s1[i] == s2[j]) {
                s1 = s1.replace(s1[i], '-'); //s1[i] = '-';
                s2 = s2.replace(s2[j], '-'); // s2[j] = '-';
                break;
            }
        }
    }
    var count = 0;
    var s3 = s1 + s2;
    for (var i = 0; i < s3.length; i++) {
        if (s3[i] == '-')
            continue;
        count++;
    }

    var s = "FLAMES";
    var i = 1;
    var k = 0;
    while (true) {
        if (k >= s.length)
            k = 0;
        if (s[k] == '-') {
            k++;
            continue;
        }
        if ((i % count) == 0) {
            if (s[k] == '-') {
                k++;
                continue;
            }
            else {
                s = s.replace(s[k], '-');
            }
            var counter = 0;
            for (var j = 0; j < s.length; j++) {
                if (s[j] == '-')
                    counter++;
            }
            if (counter == 5)
                break;
        }
        k++;
        i++;
    }
    var k = "";
    for (var i = 0; i < s.length; i++) {
        if (s[i] != '-')
            k += s[i];
    }
    printer(k)
}
function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (inputtxt.match(letters)) {
        return true;
    }
    else {
        return false;
    }
}
function about1() {
    if (document.getElementById("description1").style.display === "block") {
        document.getElementById("description1").style.display = "none";
    }
    else {
        document.getElementById("description1").style.display = "block";
    }
}
function about2() {
    if (document.getElementById("description2").style.display === "block") {
        document.getElementById("description2").style.display = "none";
    }
    else {
        document.getElementById("description2").style.display = "block";
    }
}
function errorhandle2() {
    document.getElementById("p1").value = "";
    document.getElementById("p2").value = "";
    document.getElementById('friend').style.display = "none";
    document.getElementById('love').style.display = "none";
    document.getElementById('affec').style.display = "none";
    document.getElementById('marr').style.display = "none";
    document.getElementById('enem').style.display = "none";
    document.getElementById('sib').style.display = "none";
}
function errorhandle_a() {
    document.getElementById("p1").value = "";
    document.getElementById('friend').style.display = "none";
    document.getElementById('love').style.display = "none";
    document.getElementById('affec').style.display = "none";
    document.getElementById('marr').style.display = "none";
    document.getElementById('enem').style.display = "none";
    document.getElementById('sib').style.display = "none";
}
function errorhandle_b() {
    document.getElementById("p2").value = "";
    document.getElementById('friend').style.display = "none";
    document.getElementById('love').style.display = "none";
    document.getElementById('affec').style.display = "none";
    document.getElementById('marr').style.display = "none";
    document.getElementById('enem').style.display = "none";
    document.getElementById('sib').style.display = "none";
}
function main() {
    var a = document.getElementById("p1").value;
    var b = document.getElementById("p2").value;
    if (a.length == 0 || b.length == 0) {
        if (a.length == 0 && b.length == 0) {
            alert("Names can't be blank");
        }
        else if (a.length == 0 && allLetter(b) == false) {
            alert("Name-1 can't be blank and " + b + " is an invalid name!");
            errorhandle_b();
        }
        else if (b.length == 0 && allLetter(a) == false) {
            alert("Name-2 can't be blank and " + a + " is an invalid name!");
            errorhandle_a();
        }
        else if (a.length == 0) {
            alert("Name-1 can't be blank!");
        }
        else if (b.length == 0) {
            alert("Name-2 can't be blank!");
        }
    }
    else if (allLetter(a) == false && allLetter(b) == false) {
        alert(a + " and " + b + " are invalid names!");
        errorhandle2();
    }
    else {
        if (allLetter(a) == false) {
            alert(a + " is an invalid name!");
            errorhandle_a();
        }
        if (allLetter(b) == false) {
            alert(b + " is an invalid name!");
            errorhandle_b();
        }
        if (a == b)
            alert("Both the names can't be same!");
        else if (allLetter(b) == true && allLetter(a) == true)
            f1(a, b);
    }

}