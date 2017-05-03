//实现音乐图标的方法
function playPause(img)
{
//找到音乐 设置一个参数记录找到的音乐   
    var player = document.getElementById("musicPlayer");
    //判断音乐的状态 播放/暂停
    //如果音乐暂停
    if(player.paused){
    	//播放音乐 audio自带方法
    	player.play();
    	
    	//替换音乐图片
    	img.src ="1989Polaroid/musicBtn.png"
    }else{
    	//暂停
    	player.pause();
    	img.src ="1989Polaroid/musicBtnOff.png"
    }
}
