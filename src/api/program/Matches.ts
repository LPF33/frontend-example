import * as ProgramTypes from './Types';
import * as Teams from './Teams';

const OFFSET = 30 * 60 * 1000;

export const DortmundVSBayern: ProgramTypes.Match = {
    id: 'm1',
    begin: Date.now() - OFFSET,
    homeTeam: Teams.Dortmund,
    awayTeam: Teams.Bayern,
    score: [3, 0],
    country: 'Germany',
    league: 'Bundesliga'
};

export const MadridVSBarcelona: ProgramTypes.Match = {
    id: 'm2',
    begin: Date.now() + OFFSET,
    homeTeam: Teams.Madrid,
    awayTeam: Teams.Barcelona,
    country: 'Spain',
    league: 'Primera Division'
};
