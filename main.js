function getMedia(config){
	return navigator.mediaDevices.getUserMedia(config);
}
function playMedia(id,stream){
	var video = document.getElementById(id);
	video.srcObject = stream;
	video.play();
}
$("#playVideo").click(()=>{
	getMedia({audio:$('#hasAudio').is(":checked"),video:$('#hasVideo').is(":checked")}).then(stream=>{
		playMedia("localVideo",stream);
	})
})
$("#hasVideo").click(()=>{
	console.log()
})