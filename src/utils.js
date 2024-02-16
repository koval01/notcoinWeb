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
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${ getRandomRange(1, 1e2) }`;
}

export const getAvatarByName = (name) => {
    return `https://ui-avatars.com/api/?name=${ encodeURIComponent(name) }&background=000&color=fff`;
}

export const animateValue = (() => {
    const lastValues = new WeakMap();
    const currentlyAnimating = new WeakSet();

    return async (obj, end, duration, steps = 1) => {
        if (!obj) return;
        if (currentlyAnimating.has(obj)) return;

        const start = lastValues.get(obj) || 0;
        if (start === end) return;

        currentlyAnimating.add(obj);

        await new Promise(resolve => {
            const easing = BezierEasing(0, 0, .1, 1);
            const totalSteps = Math.ceil(duration / (1000 / 50) / steps);

            const step = (timestamp, stepCount = 0) => {
                if (!startTimestamp) startTimestamp = timestamp;

                const progress = Math.min(stepCount / totalSteps, 1);
                const currentValue = Math.floor(easing(progress) * (end - start) + start);

                obj.innerHTML = currentValue.toLocaleString();
                if (stepCount < totalSteps) {
                    window.requestAnimationFrame((timestamp) => step(timestamp, stepCount + 1));
                } else {
                    lastValues.set(obj, currentValue);
                    currentlyAnimating.delete(obj);
                    resolve();
                }
            };

            let startTimestamp = performance.now();
            window.requestAnimationFrame(step);
        });
    };
})();

export const generateStars = (count=4) => {
    const starsLeft = [];
    const starsRight = [];

    const randPos = (offset = 2) => {
        let x = Math.round(Math.random() * 24 + offset);
        return Math.random() < .5 ? x : -(x);
    };

    for (let i = 0; i < count; i++) {
        const size =
            Math.random() < .8
                ? "small"
                : ["medium", "large", "xlarge"][
                      Math.floor(Math.random() * 3)
                  ];
        starsLeft.push({
            size,
            top: `${ randPos(8) }rem`,
            left: `${ randPos() }rem`,
        });
        starsRight.push({
            size,
            top: `${ randPos(8) }rem`,
            right: `${ randPos() }rem`,
        });
    }

    return { starsLeft, starsRight };
}

export const limitStringLength = (string, maxLength) => {
    if (string.length <= maxLength) {
        return string;
    }
    return `${ string.slice(0, maxLength-3) }...`;
}

export const teamLink = (slug) => {
    return slug ? "/squad/" + slug : undefined; // undefined for remove href
}

export const goTeam = (slug) => {
    if (!slug) return;
    window.open(`/squad/${ slug }`, "_self");
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
