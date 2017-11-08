import Schema from 'mongoose';

let ProjectSchema = new Schema({
	title: {
		type: String,
		required: true
	},
	url: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	photo: {
	},
	list: {
		type: String,
		required: true
	}
});

export default mongoose.model('Project', ProjectSchema);