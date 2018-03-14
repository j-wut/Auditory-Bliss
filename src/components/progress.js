import React, {Component} from 'react';

class Progress extends Component{
    render(){
        let position = this.props.position;
        if(this.props.position==Infinity){
            let cur=0;
            this.props.elapsed.split(":").forEach(t => {
                cur=cur*60+parseFloat(t);
            });
            let tot=0;
            this.props.total.split(":").forEach(t => {
                tot=tot*60+parseFloat(t);
            });
            position=cur/tot;
        }
        return(
            <div className="progress_container">
                <div className="time_current">{this.props.elapsed}</div>
                <div className="time_total">{this.props.total}</div>
                <progress value={position} max="1"></progress>
            </div>
        );
    }
}

export default Progress;