import React, {Component} from 'react';

class Controls extends Component{
    render(){
        return(
            <div className="controls">
                <div>
                    <button onClick={this.props.back}></button>
                    <button onClick={this.props.playPause}></button>
                    <button onClick={this.props.next}></button>
                </div>
                <div>
                    <button onClick={this.props.repeat}></button>
                    <button onClick={this.props.shuffle}></button>
                </div>    
            </div>
        );
    }
}

export default Controls;