const quotes = [
	{
		"quote" : "It is in changing that we find purpose.",
		"author" : "Heraclitus"
	},
	{
		"quote" : "Not all those who wander are lost.",
		"author" : "J. R. R. Tolkien"
	},
	{
		"quote" : "All we have to decide is what to do with the time that is given to us.",
		"author" : "J. R. R. Tolkien"
	},
	{
		"quote" : "Anyone who has never made a mistake has never tried anything new.",
		"author" : "Albert Einstein"
	},
	{
		"quote" : "The future rewards those who press on. I don't have time to feel sorry for myself. I don't have time to complain. I'm going to press on.",
		"author" : "Barack Obama"
	},
	{
		"quote" : "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
		"author" : "Thomas Edison"
	},
	{
		"quote" : "I have not failed. I've just found 10,000 ways that won't work.",
		"author" : "Thomas Edison"
	},
	{
		"quote" : "Do. Or do not. There is no try.",
		"author" : "Yoda"
	},
	{
		"quote" : "In my experience there is no such thing as luck.",
		"author" : "Obi-Wan Kenobi"
	},
	{
		"quote" : "I've got a bad feeling about this.",
		"author" : "basically everyone"
	},
	{
		"quote" : "So what, It's better than eleven percent!",
		"author" : "Rocket Raccoon"
	},
	{
		"quote" : "I wasn't listening. I was thinking of something else...",
		"author" : "Drax"
	},
	{
		"quote" : "I come from a planet of outlaws: Billie the Kid, Bonnie & Clyde, John Stamos.",
		"author" : "Peter Quill"
	},
	{
		"quote" : "I am Groot.",
		"author" : "Groot"
	},
	{
		"quote" : "Books! The best weapons in the world!",
		"author" : "Tenth Doctor"
	},
	{
		"quote" : "We are all stories, in the end, just make it a good one, eh?",
		"author" : "Eleventh Doctor"
	},
	{
		"quote" : "In 900 years of time and space, I've never met anyone who wasn't important.",
		"author" : "Eleventh Doctor"
	},
	{
		"quote" : "It's the possibility of having a dream come true that makes life interesting.",
		"author" : "Paulo Coelho, The Alchemist"
	},
	{
		"quote" : "All you need is love. But a little chocolate now and then doesn't hurt.",
		"author" : "Charles M. Schulz"
	},
	{
		"quote" : "Love all, trust a few, do wrong to none.",
		"author" : "William Shakespeare, All's Well That Ends Well"
	},
	{
		"quote" : "I solemnly swear that I am up to no good.",
		"author" : "J.K. Rowling, Harry Potter and the Prisoner of Azkaban"
	},
	{
		"quote" : "Good friends, good books, and a sleepy conscience: this is the ideal life.",
		"author" : "Mark Twain"
	},
	{
		"quote" : "In three words I can sum up everything I've learned about life: it goes on.",
		"author" : "Robert Frost"
	},
	{
		"quote" : "Be the change that you wish to see in the world.",
		"author" : "Mahatma Gandhi"
	},
	{
		"quote" : "History admits no rules; only outcomes.",
		"author" : "David Mitchell, Cloud Atlas"
	},
	{
		"quote" : "Travel far enough, you meet yourself.",
		"author" : "David Mitchell, Cloud Atlas"
	},
	{
		"quote" : "Our lives are not our own. We are bound to others, past and present, and by each crime and every kindness, we birth our future.",
		"author" : "David Mitchell, Cloud Atlas"
	},
	{
		"quote" : "It's the choosing that's important, isn't it?",
		"author" : "Lois Lowry, The Giver"
	},
	{
		"quote" : "Every language teaches you something, so learning a language is never wasted, especially if it's different in more than just syntactic trivia.",
		"author" : "Brian Kernighan"
	},
	{
		"quote" : "Price is what you pay. Value is what you get.",
		"author" : "Warren Buffett"
	},
	{
		"quote" : "Life is what happens to us while we are making other plans.",
		"author" : "Allen Saunders"
	},
	{
		"quote" : "Time you enjoy wasting, was not wasted.",
		"author" : "John Lennon"
	}

];
import React, {Component} from 'react';
import { Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import './App.css';

class Body extends Component{
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);		
		this.state = {
			arrayIndex: 0,
		};
	}
	componentWillMount(){
		this.handleClick();
	}
	handleClick(event){
		let newIndex;
		this.setState(()=>{
			do {
				newIndex = Math.floor(Math.random() * quotes.length);
				console.log(newIndex);
			} while (newIndex === this.state.arrayIndex);
			return {arrayIndex: newIndex};
		});
	}
	render(){
		const wellStyles = {maxWidth: 600, margin: '0 auto 10px'};
		const twitter_quotes = encodeURIComponent('"' + quotes[this.state.arrayIndex].quote + '" ' + quotes[this.state.arrayIndex].author);
		const twitter_link = `https://twitter.com/intent/tweet?hashtags=quotes&text=` + twitter_quotes;

		return (
			<div className="flex-item">
				<Jumbotron>
				<div className="well" style={wellStyles}>
					<blockquote className="App-blockquote">{quotes[this.state.arrayIndex].quote + ' -- ' + quotes[this.state.arrayIndex].author}
					</blockquote>
				</div>
				<div className="well" style={wellStyles}>
				<ButtonToolbar>
				<Button
					bsStyle="info pull-right"
					bsSize="large"
					onClick={this.handleClick}
					pullRight
					active>
					Next Quote
				</Button>
				<Button
					bsStyle="info pull-right"
					bsSize="large"
					href={twitter_link}
					target="_blank">
					Twitter
				</Button>
				</ButtonToolbar>
				</div>
				</Jumbotron>
			</div>
		);
	}
}

export default Body;