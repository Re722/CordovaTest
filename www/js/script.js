function somar() {

  let numero1 = document.getElementById("firstnum").value;
  let numero2 = document.getElementById("secundnum").value;
  let res = parseInt(numero1) + parseInt(numero2);


  document.querySelector('#resultado').innerHTML = res;

}

let btnsomar = document.getElementById("btnSomar");
btnsomar.addEventListener('click', somar);


$("#tela").on('click', function () {
  function rede() {
    var network = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';

    alert('Connection type: ' + states[network]);

  }
  rede();

});


document.getElementById("geolocalizacao").addEventListener("click", geolocaliza);

function geolocaliza() { 
  

  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position)
    }, function (error) {
      console.log(error)
    })
    const watcher = navigator.geolocation.watchPosition(function (position) {
      console.log(position)
    }, function (error) {
      console.log(error)
    }, { enableHighAccuracy: true, maximumAge: 3000, timeout: 3000 },
      navigator.geolocation.clearWatch(watcher)
    )
  } else {
    alert('ops.., não foi possivel pegar a localização!!')
  }
}



