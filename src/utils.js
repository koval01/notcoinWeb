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

export const getAvatarThumb = () => {
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${getRandomRange(
        1,
        1e2,
    )}`;
}

export const getAvatarByName = (name) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=000&color=fff`;
}

export const animateValue = (() => {
    const lastValues = new WeakMap();

    const easeInOutQuad = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    return async (obj, end, duration) => {
        if (!obj) {
            return;
        }
        const start = lastValues.get(obj) || 0;

        let startTimestamp = null;

        await new Promise(resolve => {
            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                const easedProgress = easeInOutQuad(progress); // Apply easing function
                const currentValue = Math.floor(easedProgress * (end - start) + start);
                obj.innerHTML = currentValue.toLocaleString();
                if (progress < 1) {
                    window.requestAnimationFrame(step);
                } else {
                    lastValues.set(obj, currentValue);
                    resolve(); // Resolve the promise when animation is complete
                }
            };
            window.requestAnimationFrame(step);
        });
    };
})();

export const generateStars = () => {
    const starsLeft = [];
    const starsRight = [];

    const randPos = (offset = 2) => {
        return Math.round(Math.random() * 18 + offset);
    };

    for (let i = 0; i < 4; i++) {
        const size =
            Math.random() < 0.85
                ? "small"
                : ["medium", "large", "xlarge"][
                      Math.floor(Math.random() * 3)
                  ];
        starsLeft.push({
            size,
            top: `${randPos(4)}rem`,
            left: `${randPos()}rem`,
        });
        starsRight.push({
            size,
            top: `${randPos(4)}rem`,
            right: `${randPos()}rem`,
        });
    }

    return { starsLeft, starsRight };
};
