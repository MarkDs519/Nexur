import React from "react";
import { styled} from "@mui/material";
import Button from "@mui/material/Button";
import { purple, blue } from '@mui/material/colors';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const Styles = () => {
    var style = {
        // start Button Object
        startBtn: styled(Button)(({ theme }) => ({
            color: "white",
            backgroundColor: "#142836",
            '&:hover': {
              backgroundColor: "#047863",
            },
        })),
        // back Button Object
        backBtn: styled(Button)(({ theme }) => ({
            color: theme.palette.getContrastText(purple[500]),
            arrowColor: purple[700],
            '&:hover': {
              backgroundColor: purple[700],
            },
        })),
        // navbar
        navBar: styled(Tab)(({theme}) => ({
            textTransform: 'none',
            fontWeight: theme.typography.fontWeightRegular,
            fontSize: theme.typography.pxToRem(15),
            marginRight: theme.spacing(1),
            color: 'rgba(255, 255, 255, 0.7)',
            '&.Mui-selected': {
              color: '#fff',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'rgba(100, 95, 228, 0.32)',
            },
            display: 'flex',
            justifyContent: 'center',
        }))
    }
    return style;
}

export default Styles;