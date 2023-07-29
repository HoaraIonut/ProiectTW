function submeniu() {
    const meniu = document.getElementById('meniuMic');
    if(meniu.classList.contains('disparitie')) {
        meniu.classList.remove('disparitie');
    }
    else {
        meniu.classList.add('disparitie');
    }
}
