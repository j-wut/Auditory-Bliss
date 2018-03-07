import React, {Component} from 'react';
import Sound from 'react-sound';

import {Songs, Controls, Progress} from '../components';

class Player extends Component{
    constructor(props){
        super(props);
        this.state ={
            track: 0,
            tracks: [],
            status: Sound.status.PAUSED,
            elapsed: '00:00',
            total: '00:00',
            position: 0.0,
            playFromPosition: 0,
            repeat:0,
            shuffle: false,
        }
    }

    componentDidMount(){
        //After Loaded
    }

    formatMilliseconds(ms){
        var hours = Math.floor(milliseconds / 3600000);
        milliseconds = milliseconds % 3600000;
        var minutes = Math.floor(milliseconds / 60000);
        milliseconds = milliseconds % 60000;
        var seconds = Math.floor(milliseconds / 1000);
        milliseconds = Math.floor(milliseconds % 1000);

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
        var next=this.state.track-1;
        if(next<0)
            next=this.state.tracks.length-1;
        if(this.state.position<0.1){
            this.setState({track:this.state.track-1});
        }
        this.setState({playFromPosition:0});

    }
    nextHandler = () =>{
        this.setState({track:this.state.track+1});

    }
    toggleRepeat = () =>{
        this.setState({repeat:(this.state.repeat+1)%3});
    }
    toggleShuffle = () =>{
        this.setState({shuffle:!this.state.shuffle});
    }

    handlePickSong = (index) =>{
        this.setState({track:index,status:Sound.status.PLAYING});
    }

    handleSongPlaying = (audio) =>{
        this.setState({elapsed:this.formatMilliseconds(audio.position),total:this.formatMilliseconds(audio.duration),position:audio.position/audio.duration});
    }

    handleSongFinished =() =>{
        this.nextHandler();
    }


    render() {
        if(this.state.device=="pc"){
            return(
                <div className="app">
                    <div className="list" width="15%">
                        <Songs pickSong={this.handlePickSong} songs={this.state.songs}/>
                    </div>
                    <div className="player">
                        <Sound
                            url={this.prepareUrl(this.state.track.stream_url)}
                            playStatus={this.state.status}
                            onPlaying={this.handleSongPlaying}
                            playFromPosition={this.state.playFromPosition}
                            onFinishedPlaying={this.handleSongFinished}/>
                        <Progress elapsed={this.state.elapsed} total={this.state.total} position={this.state.position}/>
                        <Controls status={[this.state.status,repeat,shuffle]} back={this.lastHandler} playPause={this.togglePlay} next={this.nextHandler} repeat={this.toggleRepeat} shuffle={this.toggleShuffle}/>
                    </div>
                </div>
            );
        }else{

        }
    }
}