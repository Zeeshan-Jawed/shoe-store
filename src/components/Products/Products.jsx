import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core"
import ShoesDetails from '../../data/ShoesDetails'

const Products = () => {
    const images = require.context("../../", true);
    return (
        <Grid container spacing={2}>
           
                
                {ShoesDetails.map((shoe)=><Grid item xs={6}
			sm={8}
			md={4}> <Card> <CardActionArea>
            <CardMedia
                component="img"
                alt={shoe.name}
                height="300"
                image={
                    images(`.${shoe.images[0]}`).default
                }
                title={shoe.name}
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    // className={classes.homeCardName}
                >
                    {shoe.name}
                </Typography>
                </CardContent>
                </CardActionArea>
                </Card></Grid>)}
               
            
            {/* <Grid item xs={12}
			sm={6}
			md={4}>
                <Card>
                    <CardContent> Hello</CardContent>
                </Card>
            </Grid> */}
        </Grid>
    )
}
export default Products