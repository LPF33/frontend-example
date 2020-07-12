export interface Team {
    id: string;
    label: string;
}

export interface Match {
    id: string;
    begin: number;
    homeTeam: Team;
    awayTeam: Team;
    score?: [number, number];
    country: string;
    league: string;
}
