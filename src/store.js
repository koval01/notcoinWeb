import { writable } from 'svelte/store';

export const stat = writable({
    minedCoins: 0,
    burnedCoins: 0,
    balanceCoins: 0,
    teamCoins: 0,
    online: 0,
    onlineToday: 0,
    users: 0,
    teams: 0,
    loading: true
});

const allStatTemplate = {
    leaderboard: [],
    loading: true
};
export const allStatUsers = writable(allStatTemplate);
export const allStatTeams = writable(allStatTemplate);

export const battleRoyaleStat = writable({
    list: [],
    loading: true
});

export const squadData = writable({
    ...[],
    loading: true
});
