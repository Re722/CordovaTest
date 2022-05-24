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

view.prototype.loadBottomBar = function()
{
    const bottomBar = CE('div','bottom-bar');

    const btnInfo = CE('a','btn-info');
    btnInfo.append(CE('img').attr({ 'src' : '/home/renaldo/Área de trabalho/Meuapp/www/img/logo.png'}));
    //btnInfo.attr({'href' : '#/applider/ead_tutorial/stage'});
    bottomBar.append(btnInfo);

    this.container.append(bottomBar);
}



