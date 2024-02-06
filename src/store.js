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
