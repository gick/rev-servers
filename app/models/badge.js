var mongoose = require('mongoose');

var badgeSchema = mongoose.Schema({ label:String,
	badgeText:String,
	readonly:String,
	owner:String,
	status:String,
	type:{type:String,default:'badge'},
	badgePageId: String, 
	mediaId: String, })

module.exports = mongoose.model('Badge', badgeSchema);
