export const showPauseButton = () => {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');

    play.style.display = "none";
    pause.style.display = "inline";
}

export const showPlayButton = () => {
    const play = document.querySelector('.play');
    const pause = document.querySelector('.pause');
    play.style.display = "inline";
    pause.style.display = "none";
};