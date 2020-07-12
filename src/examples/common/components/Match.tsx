import * as React from 'react';
import styled from 'styled-components';
import * as ProgramTypes from '../../../api/program/Types';
import * as DateFormat from '../../../utils/DateFormat';

export const MINUTE_SYMBOL = String.fromCharCode(8242);

interface Props {
    match: ProgramTypes.Match;
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
`;

const Row = styled.div`
    display: flex;
`;

const Time = styled.div`
    margin-right: 10px;
`;

const Team = styled.div`
    margin-right: 10px;
`;

const Score = styled.div``;

const League = styled.div`
    background-color: grey;
    font-size: 1.5em;
    padding: 2px;
    margin-right: 10px;
`;

const Country = styled.div`
    padding: 2px;
    line-height: 2em;
    border: 2px solid black;
`;

const MatchTime: React.FC<Props> = ({match}) => {
    const now = Date.now();
    if (match.begin < now) {
        return <Time>{`${DateFormat.milliSecondsToFullinutes(now - match.begin)}${MINUTE_SYMBOL}`}</Time>;
    } else {
        return (
            <Time>{`${DateFormat.timestampToWeekday(match.begin)} ${DateFormat.timestampToTime(match.begin)}`}</Time>
        );
    }
};

const Match: React.FC<Props> = ({match}) => {
    return (
        <Container>
            <Row>
                <League>{match.league}</League>
                <Country>{match.country}</Country>
            </Row>

            <Row>
                <MatchTime match={match} />
                {match.score && <Score>{match.score.join(':')}</Score>}
            </Row>
            <Row>
                <Team>{match.homeTeam.label}</Team>
                <Team>{match.awayTeam.label}</Team>
            </Row>
        </Container>
    );
};

export default Match;
