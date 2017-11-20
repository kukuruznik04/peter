
//The userprofile Model model

let finalpricedbConn = module.exports.finalpricedbConn = module.parent.exports.finalpricedbConn;
let mongoose = require( 'mongoose' );
let Schema = mongoose.Schema;

let feedbackSchema = new Schema({
	name: String,
	comments: String
},{collection:"feedback"});

let feedback = finalpricedbConn.model("feedback", feedbackSchema);

exports.feedback = feedback;

console.log("Initialized finalpriceFeedback model schema");