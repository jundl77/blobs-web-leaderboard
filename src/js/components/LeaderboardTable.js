import React from "react";
import LeaderboardRow from "./LeaderboardRow";
import ENV_VARS from "../../../config/ENV_VARS";
import $ from 'jquery'


var updateRankings;
export default class LeaderboardTable extends React.Component {
    constructor() {
        super();
        this.state = {
            rankings: [{}]
        }

        updateRankings = this;
    }

    componentWillMount(){
        window.jsonCallback = function(data) {
            console.log("callback")

            console.log(data);
        };

        function fetchRankings() {
            let rankings

            function parseRankings(jsonRankings) {
                for (var key in jsonRankings) {
                    console.log(key)
                }
            }

            $.ajax({
                url: 'http://query.yahooapis.com/v1/public/yql?q=select * from html where url="'
                        + ENV_VARS.DATA_URL + '"&format=json',
                type: 'GET',
                dataType: 'html',
                success: function(response) {
                    let jsonResponse = JSON.parse(response)
                    let data = JSON.parse(jsonResponse.query.results.body)
                    parseRankings(data)
                },
                error: function(response) {
                    console.log("error: " + response)
                }
            })
        }

        fetchRankings()
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

        this.state.rankings.forEach(function(ranking) {
            entries.push(<LeaderboardRow score={ranking.score} name={ranking.name} />);
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

export default LeaderboardTable