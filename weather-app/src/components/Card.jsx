import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {  Avatar, List, ListItem, ListItemText } from '@mui/material';


const CardComponent = ({weatherData}) => {

    console.log(weatherData)

    const location = weatherData?.location;
    const temperature = weatherData?.current?.temp_c;
    const weatherConditions = weatherData?.current?.condition.text;
    const weatherConditionsIcon = weatherData?.current?.condition?.icon;
    const windSpeed = weatherData?.current?.wind_kph * 0.277778;
    const humidity = weatherData?.current?.humidity;
    const cloudCoverage = weatherData?.current?.cloud;
    const lastUpdated = weatherData?.current?.last_updated; 

    
  return (
    <Card sx={{ width: 300, padding: 2 }}>
      
      <center>
        <Typography gutterBottom variant="h6" component="h6">
             {location?.name ? location?.name + "," : null } {location?.region} {location?.country}
        </Typography>
        <Avatar src={`${weatherConditionsIcon}?width=500&height=300`} sx={{width:' 100px', height: '100px'}} />
      </center>

        <CardContent>
          
          <Typography variant="div" color="text.secondary">
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <ListItem alignItems="flex-start">
                <ListItemText
                primary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Temperature :  
                    </Typography>
                    { " "} {temperature ? temperature+"°C" : null}
                    </React.Fragment>
                }
                />
            </ListItem>

            <ListItem alignItems="flex-start">
                <ListItemText
                primary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Weather conditions : 
                    </Typography>
                    {" "} {weatherConditions}
                    </React.Fragment>
                }
                />
            </ListItem>

            <ListItem alignItems="flex-start">
                <ListItemText
                primary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Wind Speed : 
                    </Typography>
                    {" "}{windSpeed ? parseFloat(windSpeed).toFixed(2)+" m/s" : null}
                    </React.Fragment>
                }
                />
            </ListItem>

            <ListItem alignItems="flex-start">
                <ListItemText
                primary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Humidity : 
                    </Typography>
                    {" "} {humidity ? humidity+"%" : null}
                    </React.Fragment>
                }
                />
            </ListItem>

            <ListItem alignItems="flex-start">
                <ListItemText
                primary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Cloud Coverage : 
                    </Typography>
                    {" "}{cloudCoverage}
                    </React.Fragment>
                }
                />
            </ListItem>

            <ListItem alignItems="flex-start">
                <ListItemText
                primary={
                    <React.Fragment>
                    <Typography
                        sx={{ display: 'inline' }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                    >
                        Last Updated : 
                    </Typography>
                    {" "} {lastUpdated}
                    </React.Fragment>
                }
                />
            </ListItem>
    
            </List>
          </Typography>
        </CardContent>
    </Card>
  );
}

export default CardComponent;