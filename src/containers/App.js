import React,{Component} from 'react';
import CardList from '../components/CardList';
// import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import './App.css';

// STATE required for searchobox to cmmunicate with cardlist
import ErrorBoundry from '../components/ErrorBoundry';
class App extends Component{
	constructor(){
		super()
		this.state ={
		robots: [],
		searchfield:''
		}
		
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots :users}));
		
	}
	onSearchChange= (event) => {
		this.setState({searchfield : event.target.value})
	}

	render() {
	const {robots, searchfield} = this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
   
    return  !robots.length ? <h1>Loading</h1> :
    (
	<div className="tc">
		<div>
			<h1 className="title">RoboFriends</h1>
			<SearchBox className="search" searchChange={this.onSearchChange}/>
		</div>
		<ErrorBoundry>
			<CardList robots ={filteredRobots}/>
		</ErrorBoundry>
		
	</div>
	);
	
	}
}

export default App;