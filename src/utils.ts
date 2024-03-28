import type { MouseEventHandler } from 'svelte/elements';
import { bezier as BezierEasing } from './libs/bezierEasing';

export const getRandomElements = <T>(list: T[], count: number): T[] => {
    const shuffled = list.sort(() => .5 - Math.random());
    return shuffled.slice(0, count);
}

export const getRandomRange = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min) + min);
}

export const preloadImage = (url: string): Promise<Event> => {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = resolve;
        image.onerror = reject;
        image.src = url;
    });
}

const keepOnlyAllowedCharacters = (inputString: string): string => {
    if (typeof inputString !== 'string') return;
    return inputString.replace(/[^\w\d\u0400-\u04FF\uD83C-\uD83E\uDC00-\uDEFF]/g, '');
}

export const getAvatarThumb = (): string => {
    return `https://api.dicebear.com/7.x/thumbs/svg?seed=${getRandomRange(1, 1e2)}`;
}

export const getAvatarByName = (name: string): string => {
    name = keepOnlyAllowedCharacters(name)
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(name ? name : "NN")}&color=fff&background=000`;
}

export const animateValue = (() => {
    const lastValues = new WeakMap();
    const currentlyAnimating = new WeakSet();

    return async (obj, end, duration = 12e2, steps = 1) => {
        if (!obj || currentlyAnimating.has(obj) || lastValues.get(obj) === end) return;

        currentlyAnimating.add(obj);
        const start = lastValues.get(obj) || 0;
        const easing = BezierEasing(0, 0, .1, 1);
        const totalSteps = Math.ceil(duration / (1000 / 25) / steps);

        const updateValue = (currentValue) => {
            obj.innerHTML = currentValue.toLocaleString();
            lastValues.set(obj, currentValue);
        };

        let startTimestamp = performance.now();
        await new Promise<void>(resolve => {
            const step = (timestamp, stepCount = 0) => {
                if (!startTimestamp) startTimestamp = timestamp;

                const progress = Math.min(stepCount / totalSteps, 1);
                const currentValue = Math.floor(easing(progress) * (end - start) + start);

                if (currentValue !== lastValues.get(obj)) {
                    updateValue(currentValue);
                }

                if (stepCount < totalSteps) {
                    window.requestAnimationFrame((timestamp) => step(timestamp, stepCount + 1));
                } else {
                    currentlyAnimating.delete(obj);
                    resolve();
                }
            };

            step(startTimestamp);
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
            offset: `${Math.round(Math.random() * 24 + 2)}rem`
        });
    }

    for (let i = 0; i < count; i++) {
        starsLeft.push(randomValues[i]);
        starsRight.push(randomValues[i + count]);
    }

    return { starsLeft, starsRight };
}

export const limitStringLength = (string: string, maxLength: number): string => {
    if (string.length <= maxLength) {
        return string;
    }
    return `${string.slice(0, maxLength - 3)}...`;
}

export const teamLink = (slug: string | undefined): string | undefined => {
    return slug ? "/squad/" + slug : undefined; // undefined for remove href
}

export const goTeam = (slug: string | undefined): MouseEventHandler<HTMLButtonElement> => {
    if (!slug) return;
    window.open(`/squad/${slug}`, "_self");
}

export const goChannel = (): void => {
    window.open(`https://t.me/${ window.location.pathname.split("/").pop() }`, "_blank");
}

export const goHome = (): void => {
    window.open("/", "_self");
}

export const goBack = (): void => {
    history.back();
}

export const formatInt = (value: number): string => {
    if (typeof value === 'string') value = parseInt(value);
    return value.toLocaleString();
}

export const handleImageError = (event: Event): void => {
    const target = event.target as HTMLImageElement;
    if (target) target.src = getAvatarThumb();
}

export const getName = (d: { user?: { firstName: string }, name: string }): string => {
    if (d.user?.firstName) return d.user.firstName;
    if (d.name) return d.name;
    return "";
}

export const getAvatar = (d: { logo?: string, avatar?: string, user?: { firstName: string }, name: string }): string => {
    if (d.logo) return d.logo;
    if (d.avatar) return d.avatar;
    return getAvatarByName(getName(d))
}
