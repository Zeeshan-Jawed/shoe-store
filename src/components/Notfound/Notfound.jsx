import { Typography } from '@material-ui/core'


const Notfound=()=>{
    return(
        <div className='container'>
			<div>
				<img src={require('../../images/404.png').default} alt="404" />
				<Typography variant="h4" gutterBottom>404 - Page Not Found</Typography>
				<p>The page you are looking for might have been removed <br /> had its name changed or is temporarily unavailable</p>
			</div>
		</div>
    )
}
export default Notfound