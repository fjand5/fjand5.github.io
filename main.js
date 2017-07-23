var socket = io("https://svsocket.herokuapp.com/");
var img = new Image()

function getMedia(config){
	return navigator.mediaDevices.getUserMedia(config);
}
function playMedia(id,str)
{
	var video = document.getElementById(id);
	video.srcObject = str;
	video.play();
}
$("#playVideo").click(()=>{
	getMedia({audio:true,video:true}).then(stream =>{
		setInterval(()=>{
	var c=document.getElementById("displayVideo");
	var ctx=c.getContext("2d");
	ctx.drawImage(stream.src,10,10);
},20)
	})




})



