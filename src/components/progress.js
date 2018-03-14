import React, {Component} from 'react';

class Progress extends Component{
    render(){
        return(
            <div className="progress_container">
                <div className="time_current">{this.props.elapsed}</div>
                <div className="time_total">{this.props.total}</div>
                <progress value={this.props.position} max="1"></progress>
            </div>
        );
    }
}

export default Progress;