import { connect } from 'mongoose';

const connectDB = async() => {
	try{
	 const uri = process.env.MONGODB_URI;
     const con = await connect(uri,{
     	useNewUrlParser:true,
     	useUnifiedTopology:true
     });
     console.log(`database running on ${con.connection.host}`)
	}
	catch(error){
     console.log(error.message)
	}
}
export default connectDB;