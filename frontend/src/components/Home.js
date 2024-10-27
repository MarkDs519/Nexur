import React from "react";
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';
import Navbar from "./Navbar";
import Login from "./Login";
import ServicesCard from "./ServicesCard";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ServicesCard></ServicesCard>

        </div>
    )
  }

export default Home;