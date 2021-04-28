import ShoesDetails from '../../data/ShoesDetails'
import './Products.style.css'
import ProductCart from "../ProductCard/ProductCard";
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';

const Products = () => {
    const pageSize = 6;
	// let currentShoes = paginate(ShoesDetails, page, pageSize);
	const pageCount = Math.ceil(ShoesDetails.length / pageSize);

	const paginationHandleChange = (event, value) => {
		// history.push('/products/'+value);
    };
    return (
        <div>
            <Grid container spacing={2}>
            {ShoesDetails.map((shoe, index) =><ProductCart key={index} shoe={shoe} /> )}
        </Grid>
        { pageCount > 1 && <Pagination count={pageCount} onChange={paginationHandleChange} variant="outlined"  color="secondary"/>}
        </div>
    )
}
export default Products