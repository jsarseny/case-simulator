const AudioManager = {
    playAudio(GlobalState, src, volume) {
        const audio = new Audio();
        const masterVolume = GlobalState.settings.masterVolume;

        audio.src = src;
        audio.volume = masterVolume * volume;
        audio.play();
    }
}

export default AudioManager;