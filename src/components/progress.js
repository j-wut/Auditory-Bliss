import React, {Component} from 'react';

class Progress extends Component{
    render(){
        return(
            <div className="progress">
                <span className="player_time-elapsed">{this.props.elapsed}</span>
                <progress value={this.props.position} max="1"></progress>
                <span className="player_time-total">{this.props.total}</span>
            </div>
        );
    }
}

export default Progress;