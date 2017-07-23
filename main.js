var socket = io("https://svsocket.herokuapp.com/");

socket.on("YOUR_ID",id => console.log("id cua client: " + id));
$("#Send").click(()=>{
	console.log("xem ");
	socket.emit("LA_LANG","tao dang click");
});
function getMedia(){
	return navigator.mediaDevices.getUserMedia({audio:true,video:true});
}
function playMedia(id,str)
{
	var video = document.getElementById(id);
	video.srcObject = str;

		video.play();


}
$("#play").click(()=>{
	getMedia().then(str=>{
		playMedia("mediaPlayer",str);
	})
})
