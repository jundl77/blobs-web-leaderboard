import React from "react";


var GameIDTextField = React.createClass({
    handleChange: function () {
        this.props.onUserInput(
            this.refs.gameIdInput.value
        );
    },

    render() {
        return (
            <div className="gameIdtextFieldDiv">
                <input className="gameIdtextField"
                       type="text"
                       placeholder="Game ID"
                       value={this.props.gameId}
                       ref="gameIdInput"
                       onChange={this.handleChange}/>
            </div>
        )
    }
})

export default GameIDTextField