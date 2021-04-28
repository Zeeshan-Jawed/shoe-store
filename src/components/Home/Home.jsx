import './Home.style.css';
import image from '../../images/home.png'
import { Typography } from '@material-ui/core';
import { Grid, Button,Paper } from "@material-ui/core";


const Home=()=>{
    return(
        <div>
            <img src={image} alt="banner" className="home" />
            <div>
            <Typography variant="h4" gutterBottom className="trendingHeading">NOW TRENDING</Typography>
            <Grid container spacing={2}>
            {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper style={{height:150,width:250}} />
            </Grid>
          ))}
            </Grid>
            <Button variant="outlined" color="secondary">
						See Collection
					</Button>
            </div>
        </div>

    )
}
export default Home