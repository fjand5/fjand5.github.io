var socket = io("http://192.168.1.61:3000");
console.log("Client da khoi dong")
function openStream(){
	return navigator.mediaDevices.getUserMedia({
		audio: true, video: true
	});
}
function playStream(idVideoTag, stream){
	var video = document.getElementById(idVideoTag);
	video.srcObject = stream;
	video.play();
}

openStream().then(stm => playStream("localStream",stm))
