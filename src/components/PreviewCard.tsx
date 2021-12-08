import React from 'react';
import { Card, CardContent, CardMedia, Button, Typography, Container, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function PreviewCard(props: any) {

    return (
        <Card sx={{ maxWidth: 450, minHeight: 450, }} style={{ margin: 15, boxShadow: "5px 4px 4px gray, -3px 4px 4px gray", }}>
            <CardMedia
                component="img"
                height="250"
                image={props.image}
                alt={props.title}
            />
            <CardContent>
                <Typography variant="body1" gutterBottom color="text.primary">
                    By {props.author}
                </Typography>
                <Typography gutterBottom variant="h5" component="div" style={{ textAlign: "center" }}>
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.text} <Button size="small">read all</Button>
                </Typography>
                <Container style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <Box style={{ display: 'flex' }}>
                        <FavoriteIcon />
                        <Typography style={{ marginLeft: 10 }}>{props.likes}</Typography>
                    </Box>

                    <Typography>{props.date}</Typography>
                </Container>
            </CardContent>
        </Card>
    );
}

export default PreviewCard;