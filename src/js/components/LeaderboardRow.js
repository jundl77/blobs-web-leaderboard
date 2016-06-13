import React from "react";

var LeaderboardRow = React.createClass({

    render: function () {
        return (
            <tr>
                <td className="tableEntry">{this.props.score}</td>
                <td className="tableEntry">{this.props.name}</td>
            </tr>
        )
    }
})

export default LeaderboardRow
