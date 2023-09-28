import React from 'react';
/*  bootstrap CSS file, Row and Col */
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap'
/*  import the players value from playersData array object */
import { playersData } from '../player-data/players';
/*  import the player template */
import PlayerCardView from './Player';
function PlayerslistView() {
    return (
        <Row xs={2} md={4} className="g-4">
            {/* etirate for each player in plaerData array */}
            {playersData.map((playerData, idx) => (
                <Col key={idx}>
                    {/* display real data */}
                    <PlayerCardView player={playerData} />
                    {
                        /* display default data 
                        <PlayerCardView/>
                        */
                    }
                </Col>
            ))}
        </Row>
    );
}

export default PlayerslistView;