document.addEventListener('DOMContentLoaded', function() {
    // 定义全局变量
var audioPlayer = document.getElementById('audio-player'); // 背景音乐
var clickSound = document.getElementById('click-sound'); // 点击音效

// 音量控制
var volumeSlider = document.getElementById('volume-slider');
volumeSlider.addEventListener('input', function() {
    audioPlayer.volume = this.value;
});

// 音效开关
var soundEffectsCheckbox = document.getElementById('sound-effects-checkbox');
soundEffectsCheckbox.addEventListener('change', function() {
    if(this.checked) {
        // 启用音效
    } else {
        // 禁用音效
    }
});

// 点击事件，播放点击音效
function dian() {
    if(soundEffectsCheckbox.checked) {
        clickSound.play();
    } else {
        return;
    }
}

// 为所有需要播放点击音效的元素添加事件监听器
document.querySelectorAll('.clickable').forEach(function(element) {
    element.addEventListener('click', dian);
});




    // 创建Audio对象
    audioPlayer.play().catch(function(error) {
        // 自动播放失败，可能是因为浏览器政策
        console.log("Auto-play was prevented by the browser.");
    });
    document.body.addEventListener('click', function() {
        audioPlayer.play().catch(function(error) {
            console.log("Play was prevented by the browser.");
        });
    });
});

