function submitSearch(){
    let ip = document.getElementById('ipsearch').value;
    console.log('ip: '+ip);
    document.getElementById('ipsearch').value='';
    return ip;
}

function getData(){
    var ip = submitSearch();
        var api= "at_6ZjmmDsINfAKhCfGwkFOczalZ22Ml";
        $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api, ipAddress: ip},
            success: function(data) {
                let region = JSON.stringify(data.location.region,"",2);
                let city = JSON.stringify(data.location.city,"",2);
                let zip = JSON.stringify(data.location.postalCode,"",2);
                $("body").append("<pre>"+ JSON.stringify(data.location,"",2)+"</pre>");
                $("body").append("<pre>ip: "+ JSON.stringify(data.ip,"",2)+"</pre>");
                $("body").append("<pre>location: "+ city+', '+region+' '+zip+"</pre>");
                $("body").append("<pre>city: "+ city+"</pre>");
                $("body").append("<pre>zip: "+ zip+"</pre>");
            }
        });
        });
}
