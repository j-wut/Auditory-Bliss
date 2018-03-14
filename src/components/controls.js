import React, {Component} from 'react';

class Controls extends Component{
    render(){
        return(
            <div>
            <div className="controls-div">
                <div>
                    <button className="control" onClick={this.props.back}>Back</button>
                    <button className="control" onClick={this.props.playPause}>Play</button>
                    <button className="control" onClick={this.props.next}>Next</button>
                </div>
                <div>
                    <button className="control" onClick={this.props.repeat}>R</button>
                    <button className="control" onClick={this.props.shuffle}>S</button>
                </div>    
            </div>
            </div>
        );
    }
}

export default Controls;