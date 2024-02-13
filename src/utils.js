import BezierEasing from './libs/bezierEasing.js';

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
    const currentlyAnimating = new WeakSet();

    return async (obj, end, duration) => {
        if (!obj) return;
        if (currentlyAnimating.has(obj)) return;

        const start = lastValues.get(obj) || 0;

        currentlyAnimating.add(obj);

        await new Promise(resolve => {
            const easing = BezierEasing(0, 0, .1, 1);

            const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const elapsed = timestamp - startTimestamp;
                const progress = Math.min(elapsed / duration, 1);
                const currentValue = Math.floor(easing(progress) * (end - start) + start); // Applying the easing function
                obj.innerHTML = currentValue.toLocaleString();
                if (elapsed < duration) {
                    window.requestAnimationFrame(step);
                } else {
                    lastValues.set(obj, currentValue);
                    currentlyAnimating.delete(obj);
                    resolve(); // Resolve the promise when animation is complete
                }
            };

            let startTimestamp = performance.now();
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
}

export const limitStringLength = (string, maxLength) => {
    if (string.length <= maxLength) {
        return string;
    }
    return `${string.slice(0, maxLength-3)}...`;
}

export const teamLink = (slug) => {
    return slug ? "/squad/" + slug : undefined; // undefined for remove href
}

export const goTeam = (slug) => {
    if (!slug) return;
    window.open(`/squad/${slug}`, "_self");
}

export const goHome = () => {
    window.open("/", "_self");
}

export const goBack = () => {
    history.back();
}

export const handleImageError = (event) => {
    event.target.src = getAvatarThumb();
}

export const getName = (d) => {
    if (d.user?.firstName) return d.user.firstName;
    if (d.name) return d.name;
    return "";
}

export const getAvatar = (d) => {
    if (d.logo) return d.logo;
    if (d.avatar) return d.avatar;
    return  getAvatarByName(getName(d))
}
