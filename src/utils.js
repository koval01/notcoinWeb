export const getRandomElements = (list, count) => {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}
export const getRandomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}
export const animateValue = (() => {
    let lastValue = 0;

    return (obj, end, duration) => {
        const start = lastValue;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            obj.innerHTML = currentValue.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                lastValue = currentValue;
            }
        };
        window.requestAnimationFrame(step);
    };
})();
