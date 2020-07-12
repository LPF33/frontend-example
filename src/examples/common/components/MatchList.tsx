import React, {useEffect, useRef} from 'react';
import * as ProgramTypes from '../../../api/program/Types';
import Match from '../../common/components/Match';
import styled from 'styled-components';

const Container = styled.div``;

const NoMatches = styled.div``;

interface Props {
    matches: ProgramTypes.Match[];
    getMatches: () => void;
}

const MatchList: React.FC<Props> = ({matches, getMatches}) => {
    let intervalId = useRef<number>(0);

    useEffect(() => {
        intervalId.current = setInterval(getMatches, 60000);
        return () => {
            clearInterval(intervalId.current);
        };
    }, []);

    return (
        <Container>
            {matches.length === 0 ? (
                <NoMatches>No matches available</NoMatches>
            ) : (
                matches.map((match: ProgramTypes.Match) => <Match key={match.id} match={match} />)
            )}

            <button onClick={getMatches}>Get/Update Matches</button>
        </Container>
    );
};

export default MatchList;
