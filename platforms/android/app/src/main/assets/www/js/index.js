$.login = false;
$.apiURL = "https://couth.app/api";
$.apiKey = "34f3h7hfech3c8i7fhc83efh87ewhf87wehf8e7fh87edh8";
$.apiOATH = "EDN2ZFSMTBOFH22M";
$.apiRes = "";
$.totp = new TOTP($.apiOATH, "Couth App");

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        
        if (!$.login)
        {
            $("#vp-main").load("html/login.html");
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
    }
};

function initMain()
{

}

function dump(arr, level) {
    var dumped_text = "";
    if (!level) level = 0;

    //The padding given at the beginning of the line.
    var level_padding = "";
    for (var j = 0; j < level + 1; j++) level_padding += "    ";

    if (typeof (arr) == 'object') { //Array/Hashes/Objects
        for (var item in arr) {
            var value = arr[item];

            if (typeof (value) == 'object') { //If it is an array,
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += dump(value, level + 1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>" + arr + "<===(" + typeof (arr) + ")";
    }
    console.log(dumped_text);
    $("#log").text(dumped_text);
    return dumped_text;
}