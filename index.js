    

function submitSearch(){
    let ip = document.getElementById('ipsearch').value;
    document.getElementById('ipsearch').value='';
    return ip;
}

function getData(){
    let ip = submitSearch();
    let ipAddress = document.getElementById('ip');
    let location = document.getElementById('location');
    let timezone = document.getElementById('timezone');
    let isp = document.getElementById('isp');

        let api= "at_6ZjmmDsINfAKhCfGwkFOczalZ22Ml";
        $(function () {
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api, ipAddress: ip},
            success: function(data) {
                let region = data.location.region;
                let city = data.location.city;
                let zip = data.location.postalCode;
                let zone = data.location.timezone;
                let servicer = data.isp;
                ipAddress.append(data.ip);
                location.append(city+', '+region+' '+zip);
                timezone.append('UTC '+zone);
                isp.append(servicer);
                console.log(data);
                displayMap(data.location.lat, data.location.lng);
            }
        });
        });
}

function displayMap(lat, lng){
    const mymap = L.map('map').setView([lat, lng], 13);
    const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
    const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileURL, {attribution});

    tiles.addTo(mymap);
}
