var socket = io("http://192.168.1.61:3000");
console.log("Client da khoi dong")
socket.on("ID_MOI", id=>{
	$("#myID").append("<br>"+ id);
});
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

var peer = new Peer({key: 'peerjs', host: "serverpeer92.herokuapp.com", secure: true, port: 443});
peer.on("open", id=>{
	$("#myID").append(id);
	socket.emit("CO_ID_MOI",id);

});

$("#Call").click(() =>{
	var id = $("#yourID").val();
	openStream().then(stm => {
		playStream("localStream",stm);
		var c = peer.call(id,stm);
		c.on("stream",rst => playStream("remoteStream",rst));
	})
	console.log("da click");

})
peer.on("call",c=>{
	openStream().then(stm =>{
		c.answer(stm);
		console.log("co nguoi goi");
	})
})