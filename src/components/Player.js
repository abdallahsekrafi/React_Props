import React from "react";
/* bootstrap CSS file, Card and Badge*/
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

/* inline styling */
const iconstyle = {
    width: "20px",
    height: "20px",
    marginRight: "5px"
};

function PlayerCardView(props) {
    /* internal varibale player */
    const player = props.player;
    return (
        <Card className="text-center shadow" style={{ width: '15rem', margin: "10px 0 0 10px" }}>

            <div class="text-center img-fluid" >
                <img style={{ width: 150, height: 180, paddingTop: "2px", borderRadius: "5px 5px 0 0" }} src={player.imageUrl} alt="" />
            </div>
            <Card.Body >
                <Card.Title >{player.name}</Card.Title>  {/* player name */}
                <h5>
                    <Badge bg="secondary">{player.age} ans</Badge>  {/* player age */}
                </h5>
                <hr class="hr" />
                <span><img style={iconstyle} src="/nationality_flag.svg"></img>{player.nationality}</span>  {/* player nationality */}
                <hr class="hr" />
                <span><img style={iconstyle} src="/team_football.svg"></img>{player.team}</span>{/* player team */}
                <div style={{ /* inline styling for the t_short background */
                    backgroundImage: "url(/t_short.svg)", backgroundRepeat: "no-repeat", backgroundSize: "contain",
                    backgroundPosition: "center",
                    position: "relative", textAlign: "center", marginTop: "5px"
                }}>
                    <span class="fw-bold" style={{
                        fontSize: 10, color: "white"
                    }}>
                        {player.jerseyNumber}
                    </span> {/* player jerseyNumber */}
                </div>
            </Card.Body>
        </Card>
    );
}
/* defaut player value (data) */
PlayerCardView.defaultProps = {
    player: {
        name: "Joueur Tunisien",
        team: "Equipe Tunisien",
        nationality: "Tunisie",
        jerseyNumber: "0",
        age: "24 < age > 40",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
    }
}

export default PlayerCardView;