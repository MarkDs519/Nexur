
// Importing files from Material-UI
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {AppBar, Toolbar, Typography, Button} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import {List, ListItem, ListItemText, Collapse} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";


var navbarLogo = require('../assets/favicon-32x32.png')

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
}));

// Exporting Default Navbar to the App.js File
export default function Navbar() {
	const classes = useStyles();
	const small = useMediaQuery("(max-width:600px)");
	const full = useMediaQuery("(min-width:600px)");

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	const navigate = useNavigate();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar variant="dense">
					{small && (
						<>
							<List>
								<ListItem button>
									<Button
										onClick={
											handleClick
										}
									>
										<MenuIcon />
										{open ? (
											<ExpandLess />
										) : (
											<ExpandMore />
										)}
									</Button>
									
								</ListItem>

								<Collapse
									in={open}
									timeout="auto"
									unmountOnExit
								>
									<List
										component="div"
										disablePadding
									>
										<ListItem button>
											<ListItemText primary="Home" />
										</ListItem>
										<ListItem button>
											<ListItemText primary="About" />
										</ListItem>{" "}
										<ListItem button>
											<ListItemText primary="Contact" />
										</ListItem>
									</List>
								</Collapse>
							</List>
						</>
					)}

					{full && (
						<>
							<Button color="inherit" onClick={e => navigate('/home')}>
								Home
							</Button>

							<Button color="inherit">
								About
							</Button>
							<Button color="inherit">
								Contact
							</Button>
						</>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
}
