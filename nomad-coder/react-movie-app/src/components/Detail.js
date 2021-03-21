import React from 'react';

class Detail extends React.Component{
    componentDidMount() {
        const {location, history} = this.props;
        if(location.state === undefined) { //only way to go to movie-detail is by clicking movie
            history.push("/");
        }
    }
    render(){
        const {location} = this.props;
        if (location.state){
            return <div>{location.state.title}</div>
        } else {
            return null;
        }
    }
}

export default Detail;