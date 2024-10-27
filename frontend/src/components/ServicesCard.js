import { 
	Card, 
	CardActionArea, 
	CardContent, 
	CardMedia, 
} from "@mui/material"; 
import * as React from "react"; 
import { useNavigate } from "react-router-dom";

var chitchatlogo = require('../assets/chitchat.png');
var printerlogo = require('../assets/printer.png');

const ServicesCard = () => { 
	const navigate = useNavigate();
	return ( 
		<center> 
			<div> 
			</div> 
			<div style={{ padding:'15px' , width: "70%", display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}> 
				{/* Printer */}
				<Card sx={{ Width: 345 }}> 
					<CardActionArea onClick={e => navigate('/printr')}> 
						<CardMedia 
							component="img"
							height="180"
							image= {printerlogo}
							alt="gfg"
						/> 
						<CardContent> 
							<h1>PrintR</h1> 
							<p style={{ fontSize: 18 }}>Printing in the palm of your hands</p> 
						</CardContent> 
					</CardActionArea> 
				</Card> 
				
				{/* ChitChat */}
				<Card sx={{ maxWidth: 345 }}> 
					<CardActionArea onClick={e => navigate('/chitchat')}> 
						<CardMedia 
							component="img"
							height="180"
							image= {chitchatlogo}
							alt="gfg"
						/> 
						<CardContent> 
							<h1>ChitChat</h1> 
							<p style={{ fontSize: 18 }}>Create your own private chatbox</p> 
						</CardContent> 
					</CardActionArea> 
				</Card> 
				{/* Webstream */}
				<Card sx={{ maxWidth: 345 }}> 
					<CardActionArea> 
						<CardMedia 
							component="img"
							height="180"
							image= 
"https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png"
							alt="gfg"
						/> 
						<CardContent> 
							<h1>HomeStream</h1> 
							<p style={{ fontSize: 18 }}>Create your own private stream</p> 
						</CardContent> 
					</CardActionArea> 
				</Card> 
			</div> 
		</center> 
	); 
} 

export default ServicesCard; 
