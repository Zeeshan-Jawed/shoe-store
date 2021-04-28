import { Card, CardContent, Grid } from "@material-ui/core"
import ShoesDetails from '../../data/ShoesDetails'

const Products = () => {
    return (
        <Grid container spacing={2}>
           
                
                {ShoesDetails.map((shoe)=><Grid item xs={6}
			sm={8}
			md={4}> <Card> <CardContent> {shoe.name}</CardContent></Card></Grid>)}
               
            
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