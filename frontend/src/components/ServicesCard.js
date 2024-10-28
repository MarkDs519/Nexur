import { 
	Card, 
	CardActionArea, 
	CardContent, 
	CardMedia, 
} from "@mui/material"; 
import * as React from "react"; 
import { useNavigate } from "react-router-dom";

var printerlogo = require('../assets/printer.png');
var tictactoelogo = require('../assets/tictac.webp');

const ServicesCard = () => { 
	const navigate = useNavigate();
	return ( 
		<center> 
			<div> 
			</div> 
			<div className="home"> 
				{/* Tic Tac Toe */}
				<Card sx={{ Width: 345 }}> 
					<CardActionArea onClick={e => navigate('/tictactoe')}> 
						<CardMedia 
							component="img"
							height="180"
							image= {tictactoelogo}
							alt="gfg"
						/> 
						<CardContent> 
							<h1>Tic Tac Toe</h1> 
							<p style={{ fontSize: 18 }}>Play Tic Tac Toe</p> 
						</CardContent> 
					</CardActionArea> 
				</Card> 				
				
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
			</div> 
		</center> 
	); 
} 

export default ServicesCard; 
