import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dateNow: '',
      newYear: new Date("1 Jan 2022"),
      times: {
        'seconds': '0',
        'minutes': '0',
        'hours' : '0',
        'days' : '0'
      }
    }
    this.handleTime = this.handleTime.bind(this);
    this.handleTimeWithInterval = this.handleTimeWithInterval.bind(this)
  }

  componentDidMount(){
    this.handleTimeWithInterval()
  };

  handleTime(){
    this.setState({
      dateNow: new Date()
    });

    const diff = this.state.newYear-this.state.dateNow;
    
    let secondsTotal = Math.floor(diff / 1000);
    let seconds = Math.floor(secondsTotal) % 60;
    let days    = Math.floor(secondsTotal / 3600 / 24);
    let hours   = Math.floor(secondsTotal / 3600) % 24; 
    let minutes = Math.floor(secondsTotal / 60) % 60;

    this.setState({
      times: {
        'hours' : hours,
        'days' : days,
        'minutes': minutes,
        'seconds': seconds
      }
    })
  }

  handleTimeWithInterval(){
    setInterval(() => {
      this.handleTime()
    }, 1000);
  }
  timerElement(el){
    if(el<10){
      return '0'+ el;
    } else {
      return el;
    } 
  }
  render(){
    return (
      <div className='container'>
          <h1>New Years Eve</h1>
        <div className='countdown-container'>
          <div className="countdown-el">
            <p className="big-text">{this.timerElement(this.state.times.days)}</p>
            <span>Days</span>
          </div>
          <div className="countdown-el">
            <p className="big-text">{this.timerElement(this.state.times.hours)}</p>
            <span>Hours</span>
          </div>
          <div className="countdown-el">
            <p className="big-text">{this.timerElement(this.state.times.minutes)}</p>
            <span>Minutes</span>
          </div>
          <div className="countdown-el">
            <p className="big-text">{this.timerElement(this.state.times.seconds)}</p>
            <span>Seconds</span>
          </div>
        </div>
      </div>
    )
  }
}

export default App;