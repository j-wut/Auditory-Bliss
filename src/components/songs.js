import React, {Component} from 'react';

class Songs extends Component{
    render(){
        var list = [];
        for(var i=0;i<this.props.songs.length;i++){
            const index=i;
            if(this.props.selected!=i){
                list.push(<li className="songEntry" onClick={()=>this.props.pickSong(index)}>{this.props.songs[i]}</li>);
            } else{
                list.push(<li className="songCurrent">{this.props.songs[i]} ---- </li>);
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