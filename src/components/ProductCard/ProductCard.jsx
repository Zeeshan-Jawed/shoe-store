import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from "@material-ui/icons/StarBorder";
import './ProductCard.style.css'
import { Link } from "react-router-dom";
const ProductCart=({shoe,minimal})=>{
    const images = require.context("../../", true);
    return(
        <Grid 
            item xs={12}
                sm={12}
                md={4}> 
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
                    </div>
                    <Link to={`/products/${shoe.id}`} className='gridLink'>
                    <Card >

                    <CardActionArea>
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
                        <span>{ minimal ? 'Shop Now' : 'See Details' }</span>
                        </div>
                    </CardActionArea>
                </Card>
                </Link></Grid>
    )

}

export default ProductCart