import React, {Component} from 'react';

class Songs extends Component{
    render(){
        var list = [];
        for(var i=0;i<props.songs.length;i++){
            if(props.selected!=i){
                list.push(<li className="songEntry" onClick={this.props.pickSong(i)}>{this.songs[i]}</li>);
            } else{
                list.push(<li className="songCurrent">{this.songs[i]}</li>);
            }
        }
        return(
            <ul className="songs">
                {list}
            </ul>
        );
    }
}

export default Songs;