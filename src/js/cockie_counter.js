function counter() {
    var cockie_name, count;

    cockie_name = "cookie_count";

    count = loadCookie(cockie_name);
    if (count == "") {
        count = 1;
    } else {
        count++;
    }

    document.getElementById("counter").innerHTML = count;

    saveCookie(cockie_name, count, 60);
}

//cookie読込
function loadCookie(cockie_name) {
    var string, name, data, cockie_data;
    // Loading.
    cockie_data = document.cookie;

    cockie_name = cockie_name + "=";
    // Check enabled cockie name.
    name = cockie_data.indexOf(cockie_name, 0);
    if (name > -1) {
        // Sample cockie data.
        data = cockie_data.indexOf(";", name + cockie_name.length);
        if (data == -1) data = cockie_data.length;
        string = cockie_data.substring(name + cockie_name.length, data);
        // Decode.
        return unescape(string);
    } else {
        return "";
    }
}

function saveCookie(cockie_name, cockie_data, cockie_day) {
    var date, cockie_date, cockie_limit;
    // Limit.
    cockie_date = new Date();
    date = cockie_date.getTime() + (1000 * 60 * 60 * 24 * cockie_day);
    cockie_date.setTime(date);
    cockie_limit = cockie_date.toGMTString();
    // Export cockie.
    document.cookie = cockie_name + "=" + escape(cockie_data) + "; expires=" + cockie_limit;
}

counter();