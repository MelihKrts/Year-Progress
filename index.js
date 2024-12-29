const calculateYearProgress = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    const yearProgress = ((now - startOfYear) / (endOfYear - startOfYear)) * 100;

    return yearProgress.toFixed(2);
};

const updateProgressBar = () => {
    const progress = calculateYearProgress();
    const progressBar = document.querySelector('.progress');
    const progressText = document.getElementById('progress-text');

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `Year is ${progress}% completed.`;
};

updateProgressBar();
