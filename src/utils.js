import BezierEasing from './libs/bezierEasing.js';

export const getRandomElements = (list, count) => {
    const shuffled = list.sort(() => .5 - Math.random());
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
    const easing = BezierEasing(0, 0, .1, 1);

    return async (obj, end, duration = 15e2, steps = 1) => {
        if (!obj || currentlyAnimating.has(obj)) return;
        
        currentlyAnimating.add(obj);

        const start = lastValues.get(obj) || 0;
        if (start === end) {
            currentlyAnimating.delete(obj);
            return;
        }

        const totalSteps = Math.ceil(duration / (1000 / 20) / steps);

        await new Promise(resolve => {
            const step = (stepCount = 0) => {
                const currentValue = Math.floor(easing(stepCount / totalSteps) * (end - start) + start);

                if (currentValue !== lastValues.get(obj)) {
                    obj.textContent = currentValue.toLocaleString();
                    lastValues.set(obj, currentValue);
                }

                if (stepCount < totalSteps) {
                    setTimeout(() => step(stepCount + 1), duration / totalSteps);
                } else {
                    currentlyAnimating.delete(obj);
                    resolve();
                }
            };

            step();
        });
    };
})();

export const generateStars = (count = 4) => {
    const starsLeft = [];
    const starsRight = [];
    
    const randomValues = [];
    for (let i = 0; i < count * 2; i++) {
        randomValues.push({
            size: Math.random() < .8 ? "small" : ["medium", "large", "xlarge"][Math.floor(Math.random() * 3)],
            top: `${Math.round(Math.random() * 24 + 2)}rem`,
            left: `${Math.round(Math.random() * 24 + 2)}rem`,
            right: `${Math.round(Math.random() * 24 + 2)}rem`
        });
    }

    for (let i = 0; i < count; i++) {
        starsLeft.push(randomValues[i]);
        starsRight.push(randomValues[i + count]);
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
    return getAvatarByName(getName(d))
}
