import React, {Component} from 'react';

class Songs extends Component{
    render(){
        var list = [];
        for(var i=0;i<this.props.songs.length;i++){
            const index=i;
            if(this.props.selected!==i){
                list.push(<li className="songEntry" onClick={()=>this.props.pickSong(index)}>{this.props.songs[i].fileName}</li>);
            } else{
                list.push(<li className="songCurrent">{this.props.songs[i].fileName}</li>);
            }
        }
        return(
            <ul className="song-list">
                {list}
            </ul>
        );
    }
}

export default Songs;