function mostrarONoMenu(cuadrito){
	var opcion = document.getElementById(cuadrito)
	if (opcion.style.display == "none"){
		opcion.style.display = "block";
	}else if (opcion.style.display == "block") {
		opcion.style.display = "none";
	}
}
//Video
var videoC=document.getElementById('videoCom');
var Boton_stop=document.getElementById('Parar');
var Boton_rewind=document.getElementById('Reversa');
var Boton_Play=document.getElementById('Reproducir');
var Boton_foward=document.getElementById('ReAvanzar');

function Reproduccion(){
	if (videoC.paused) {
		videoC.play()
		Boton_Play.innerHTML='<span class="icon-pause"></span>'
	}
	else{
		videoC.pause()
		Boton_Play.innerHTML='<span class="icon-play2">'
	}
}

function resetVideo(){
	videoC.currentTime=0
	videoC.pause()
	Boton_Play.innerHTML='<span class="icon-play2">'
}

function Avanzar(){
	videoC.currentTime+=5;
}

function Retroceder(){
	videoC.currentTime-=5;
}




//ValidarFormulario
	
	var nombre=document.querySelector('#nombre');
	var apellido=document.querySelector('#apellido');
	var email=document.querySelector('#email');
	var edad=document.querySelector('#Edad');
	var consul=document.querySelector('#Consulta');


function validarFormu(){

		nombre.addEventListener("input", corroborarNombre)
		apellido.addEventListener("input", corroborarApellido)
		email.addEventListener("input", corroborarEmail)
		edad.addEventListener("input", corroborarEdad)
		consul.addEventListener("input", corroborarConsul)
		

		corroborarNombre()
		corroborarApellido()
		corroborarEdad()
		corroborarEmail()
		corroborarConsul()
		
}




function corroborarNombre(){


		if (nombre.length<1){
		        nombre.setCustomValidity('El campo Nombre es requerido')
		        
		}       
}
function corroborarApellido(){
		 if (apellido.value=='')
		{
		        apellido.setCustomValidity('El campo Apellido es requerido')
		}
}
function corroborarEdad(){
		 if ( edad.length <1 )
		{
		        edad.setCustomValidity('Ingrese un edad válida')
		}
}
function corroborarEmail(){
		 if (email.value== '')

		{
		        email.setCustomValidity('Ingrese un email válido')
		}
}
function corroborarConsul(){

		if (consul.value == '') 

		{
		        consul.setCustomValidity('El campo consulta es Requerido')

		}
}
window.addEventListener('load',validarFormu)	


//-------guardardatos

function SaveInicio(){
	var Boton1=document.getElementById('grabar');
	Boton1.addEventListener('click',NuevoItem,false);
	mostrarDato();
}
function NuevoItem (){
	var clave=document.getElementById('CLAVE').value;
	var valor=document.getElementById('TEXTO').value;
	if (clave=='') {
		alert('clave invalida')
	}else{
	sessionStorage.setItem(clave,valor);
	mostrarDato();
	document.getElementById('CLAVE').value='';
	document.getElementById('TEXTO').value='';
	}
}
function mostrarDato(){
	var cajaDato = document.getElementById('cajaDato');
	cajaDato.innerHTML='';
	for(var i=0;i<sessionStorage.length;i++){
	var clave =sessionStorage.key(i);
	var valor=sessionStorage.getItem(clave);
	cajaDato.innerHTML+='<div>'+(i+1)+'.'+valor+'</div>';
}
}window.addEventListener('load',SaveInicio,false);

function EliminarTODO(){
	if (confirm('Seguro?')) {
		sessionStorage.clear();
		mostrarDato();
	}
}

function EliminarClave (clave){
	if (clave=='') {
		alert('clave invalida')
	}else
	if (confirm('Seguro?')) {
		sessionStorage.removeItem(clave);
		mostrarDato();
	}
}








//-------UbicacionGeo
function GeoIniciar(){
	var Boton=document.getElementById('obtener');
	Boton.addEventListener('click',obtener,false);

}
function obtener(){

	var GeoConfig={
		enableHighAccuracy:true,
		
	};
	
	navigator.geolocation.getCurrentPosition(mostrarg,errores,GeoConfig);
}
function mostrarg(posicion){
	var ubicacion=document.getElementById('ubicacion');
	var datos='';
	datos+='latitud: '+posicion.coords.latitude+',longitud: '+posicion.coords.longitude
	
	ubicacion.innerHTML=datos;
}
function errores(error){
	//error code me duevuelve el numero de error

	ubicacion.innerHTML='ubicacion actual no disponible';
}

window.addEventListener('load',GeoIniciar,false);
//----
