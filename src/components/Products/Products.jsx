import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core"
import ShoesDetails from '../../data/ShoesDetails'
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import './Products.style.css'

const Products = () => {
    const images = require.context("../../", true);
    return (
        <Grid container spacing={2}>


            {ShoesDetails.map((shoe, index) => <Grid key={index}
            item xs={6}
                sm={8}
                md={4}> <Card >
                    <div>
                        <Rating
                            className='rating'
                            name="customized-empty"
                            defaultValue={shoe.rating}
                            precision={0.1}
                            emptyIcon={<StarBorderIcon fontSize="inherit" />}
                            readOnly
                        />
                        <span className='priceTag'>${shoe.price}</span>
                    </div><CardActionArea>
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
                                className='homeCardName'
                            >
                                {shoe.name}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                                className='homecarddesc'
                            >
                                {shoe.desc}
                            </Typography>
                        </CardContent>
                        <div className='shopNow'>
                            <span>See Detail</span>
                        </div>
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