export const getRandomElements = (list, count) => {
    const shuffled = list.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export const getRandomRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const preloadImage = (url) => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
    });
}

export const animateValue = (() => {
    const lastValues = {};

    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    return (obj, end, duration) => {
        const start = lastValues[obj] || 0;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const easedProgress = easeInOutQuad(progress); // Apply easing function
            const currentValue = Math.floor(easedProgress * (end - start) + start);
            obj.innerHTML = currentValue.toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            } else {
                lastValues[obj] = currentValue;
            }
        };
        window.requestAnimationFrame(step);
    };
})();
