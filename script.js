document.addEventListener('DOMContentLoaded', function() {
    var audioPlayer = document.getElementById('audio-player');
    var volumeSlider = document.getElementById('volume-slider');
    var soundEffectsCheckbox = document.getElementById('sound-effects-checkbox');

    // 设置音量
    volumeSlider.addEventListener('input', function() {
        audioPlayer.volume = this.value;
    });

    // 切换音效
    soundEffectsCheckbox.addEventListener('change', function() {
        if (this.checked) {
            // 启用音效
            // 这里可以添加启用音效的代码
        } else {
            // 禁用音效
            // 这里可以添加禁用音效的代码
        }
    });
});