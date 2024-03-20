import { writable, type Writable } from 'svelte/store';

interface StatData {
    minedCoins: number;
    burnedCoins: number;
    balanceCoins: number;
    teamCoins: number;
    online: number;
    onlineToday: number;
    users: number;
    teams: number;
    loading: boolean;
}

interface AllStatData {
    leaderboard: any[];
    loading: boolean;
}

interface BattleRoyaleStatData {
    list: any[];
    loading: boolean;
}

export const stat: Writable<StatData> = writable({
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

const allStatTemplate: AllStatData = {
    leaderboard: [],
    loading: true
};
export const allStatUsers: Writable<AllStatData> = writable(allStatTemplate);
export const allStatTeams: Writable<AllStatData> = writable(allStatTemplate);

export const battleRoyaleStat: Writable<BattleRoyaleStatData> = writable({
    list: [],
    loading: true
});

interface SquadData {
    [key: string]: any;
    loading: boolean;
}

export const squadData: Writable<SquadData> = writable({
    loading: true
});
