import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "../imgs/D&D.png"


export default function BasicCard() {

const styles = {
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  }
};

  return (
    <Card style={{backgroundColor: "black"}} className = "dnd" sx={{ minWidth: 50, maxWidth: 500}}>
      <CardMedia
        component="img"
        height="200"
        image={require('../imgs/D&D.png')}
      />
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="white" align = "center" gutterBottom>
          D&D 3rd Edition
        </Typography>
        <Typography color="white" align = "center">
          <p>
            Dungeons and Dragons contains such races as Humans, Elves, Half-Elves, Half-Orcs, Dwarves, Gnomes, Tieflings, Aasimar and many others.   
          </p>
        </Typography>

      </CardContent>
    </Card>
  );
}