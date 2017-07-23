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


var peer = new Peer({key: 'lwjd5qra8257b9'});
peer.on("open",id=>console.log(id))
peer.on("call",stream =>
{
	playMedia(remoteVideo,stream);
})
$("#call").click(()=>{
	getMedia({audio:$('#hasAudio').is(":checked"),video:$('#hasVideo').is(":checked")}).then(stream=>{
		Peer.call($("#remoteId").val(),stream)
	})
})