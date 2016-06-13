import React from "react";
import LeaderboardRow from "./LeaderboardRow";
import $ from "jquery";

var updateRankings;
export default class LeaderboardTable extends React.Component {
    constructor() {
        super();
        this.state = {
            rankings: []
        }

        updateRankings = this;
    }

    componentWillMount() {
        function fetchRankings(reactComponent) {

            function updateRankings(jsonRankings) {
                let rankings = []

                for (var key in jsonRankings) {
                    rankings.push(new Ranking(jsonRankings[key].Name,
                        jsonRankings[key].Score, jsonRankings[key].game_id))
                }

                reactComponent.setState({
                    rankings: rankings
                })
            }

            var url = "http://blobs-swing.azurewebsites.net/tables/highscore?zumo-api-version=2.0.0"
            $.ajax({
                url: url,
                type: 'GET',
                dataType: 'html',
                success: function (response) {
                    let jsonResponse = JSON.parse(response)
                    updateRankings(jsonResponse)

                    // Update data continuously
                    setTimeout(function() {
                        fetchRankings(reactComponent)
                    }, 500)
                },
                error: function (response) {
                    console.log("error: " + response)

                    // Update data continuously
                    setTimeout(function() {
                        fetchRankings(reactComponent)
                    }, 500)
                }
            })
        }

        fetchRankings(this)
    }

    render() {
        var entries = [];
        this.state.rankings.sort((ranking1, ranking2) => {
            if (ranking1.score === ranking2.score) {
                return 0;
            }
            else {
                return (ranking1.score > ranking2.score) ? -1 : 1;
            }
        });

        this.state.rankings.forEach(function (ranking) {
            if (this.props.gameId === null
                || this.props.gameId === '' || this.props.gameId === ranking.gameId + '') {
                entries.push(<LeaderboardRow score={ranking.score} name={ranking.name}/>);
            }
        }.bind(this));

        return (
            <table className="leaderboardTable">
                <thead>
                <tr>
                    <th>Score</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody>{entries}</tbody>
            </table>
        )
    }
}

var Ranking = function (name, score, gameId) {
    this.name = name
    this.score = score
    this.gameId = gameId
}