import React, {Component} from 'react';
import Sound from 'react-sound';

import Songs from '../components/songs';
import Progress from '../components/progress';
import Controls from '../components/controls';

class Player extends Component{
    constructor(props){
        super(props);
        this.state ={
            track: 0,
            tracks: [1,2,3,4,5],
            status: Sound.status.PAUSED,
            elapsed: '00:00',
            total: '00:00',
            position: 0.0,
            playFromPosition: 0,
            repeat: false,
            shuffle: false,
            history: []
        }
    }

    componentDidMount(){
        //After Loaded
    }

    formatms(ms){
        var hours = Math.floor(ms / 3600000);
        ms = ms % 3600000;
        var minutes = Math.floor(ms / 60000);
        ms = ms % 60000;
        var seconds = Math.floor(ms / 1000);
        ms = Math.floor(ms % 1000);
        if(hours>0)
            return (hours < 10 ? '0' : '') + hours + ':' + (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
        return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }

    togglePlay = () =>{
        if(this.state.status=== Sound.status.PLAYING){
            this.setState({status:Sound.status.PAUSED});
            return;
        }
        this.setState({status:Sound.status.PLAYING});
    }
    lastHandler = () =>{
        var last=(this.state.track-1+this.state.tracks.length)%this.state.tracks.length;
        if(this.state.position<0.1){
            this.setState({track:last});
        }
        this.setState({playFromPosition:0});

    }
    nextHandler = () =>{
        if(!this.state.shuffle)
            this.setState({track:(this.state.track+1)%this.state.tracks.length});
        else{
            var hist = this.state.history.slice();
            hist.push(this.state.track);
            var next=Math.floor(Math.random()*this.state.tracks.length);
            if(next == this.state.track)
                next++;
            this.setState({track:next%this.state.tracks.length,history:hist});
        }
    }
    toggleRepeat = () =>{
        this.setState({repeat:!this.state.repeat});
    }
    toggleShuffle = () =>{
        if(this.state.shuffle)
            this.setState({history:[]});
        this.setState({shuffle:!this.state.shuffle});
    }
    handlePickSong = (index) =>{
        this.setState({track:index,status:Sound.status.PLAYING});
    }

    handleSongPlaying = (audio) =>{
        this.setState({elapsed:this.formatms(audio.position),total:this.formatms(audio.duration),position:audio.position/audio.duration});
    }

    handleSongFinished =() =>{
        if(this.state.repeat)
            this.setState({playFromPosition:0});
        else
            this.nextHandler();
    }


    render() {
       // if(this.state.device=="pc"){
            return(
                <div className="app">
                    <div className="list" width="15%">
                        <Songs pickSong={this.handlePickSong} songs={this.state.tracks} selected={this.state.track}/>
                    </div>
                    <div className="player">
                        {/* <Sound
                            url={this.prepareUrl(this.state.track.stream_url)}
                            playStatus={this.state.status}
                            onPlaying={this.handleSongPlaying}
                            playFromPosition={this.state.playFromPosition}
                            onFinishedPlaying={this.handleSongFinished}/> */}
                        <Progress elapsed={this.state.elapsed} total={this.state.total} position={this.state.position}/>
                        <Controls status={[this.state.status,this.state.repeat,this.state.shuffle]} back={this.lastHandler} playPause={this.togglePlay} next={this.nextHandler} repeat={this.toggleRepeat} shuffle={this.toggleShuffle}/>
                    </div>
                </div>
            );
       // }else{

       // }
    }
}

export default Player;