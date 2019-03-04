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

export const showMuteButton = () => {
    const mutedArr = document.querySelectorAll('.muted');
    const notMutedArr = document.querySelectorAll('.not-muted');
    mutedArr.forEach(muted => muted.style.display = "inline");
    notMutedArr.forEach(notMuted => notMuted.style.display = "none");
};

export const showVolumeButton = () => {
    const mutedArr = document.querySelectorAll('.muted');
    const notMutedArr = document.querySelectorAll('.not-muted');
    mutedArr.forEach(muted => muted.style.display = "none");
    notMutedArr.forEach(notMuted => notMuted.style.display = "inline");
};