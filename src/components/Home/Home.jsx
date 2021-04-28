import './Home.style.css';
import image from '../../images/home.png'
import { Typography } from '@material-ui/core';
import { Grid, Button } from "@material-ui/core";
import ShoesDetails from '../../data/ShoesDetails'
import ProductCart from '../ProductCard/ProductCard';
import { Link } from 'react-router-dom';

const Home=()=>{
  ShoesDetails.sort(() => Math.random() - 0.5);
    return(
        <div>
            <img src={image} alt="banner" className="home" />
            <div>
            <Typography variant="h4" gutterBottom className="trendingHeading">NOW TRENDING</Typography>
            <Grid container spacing={2}>
            {ShoesDetails.slice(0, 3).map((shoe, index) =>  (
            
              <ProductCart shoe={shoe} key={shoe.id} minimal />
            
          ))}
            </Grid>
            <Link to="/products" className='seeCollection'>
					<Button variant="outlined" color="secondary">
						See Collection
					</Button>
				</Link>
            </div>
        </div>

    )
}
export default Home