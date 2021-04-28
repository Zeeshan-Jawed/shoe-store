import { CardContent, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import './contact.style.css'




const Contact=()=>{
    return (
        <Card className='root' >
			<CardContent>
				<Typography variant="h4" className='heading' gutterBottom>Contact</Typography>
				<TextField label="Name" className='field' />
				<TextField label="Email" className='field' />
				<TextField label="Contact" className='field' />
				<TextField
					className='field textarea'
					label="Message"
					multiline
					rows={4}
					variant="outlined"
				/>
				<Button variant="contained" color="primary"  className='field button' >
					Contact
				</Button>
			</CardContent>
		</Card>
      );
}

export default Contact