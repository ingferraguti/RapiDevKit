/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5cadd42d3e3a57575017471b
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE Block.js PLEASE EDIT ../custom/BlockCustom.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
const app = require('../../app.js');
const db_RapiDevKit_db = require('../../db/RapiDevKit_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/BlockCustom.js');

/*
 * SCHEMA DB Block
 * 
	{
		Actyve: {
			type: 'Boolean', 
			required : true
		},
		FontendAPIHook: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		BlockType: {
			type: Schema.ObjectId,
			ref : "Block"
		},
		ItemType: {
			type: Schema.ObjectId,
			ref : "Block"
		},
		
	}
 * 
 */



//CRUD METHODS


/**
 * BlockService.create
 *   @description CRUD ACTION create
 *
 */
app.post(properties.api + '/blocks', function (req, res) {
	obj = new db_RapiDevKit_db.Block(req.body);
	obj.save(function (err) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * BlockService.delete
 *   @description CRUD ACTION delete
 *   @param ObjectId id Id
 *
 */
app['delete'](properties.api + '/blocks/:id', function (req, res) {
	db_RapiDevKit_db.Block.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

/**
 * BlockService.get
 *   @description CRUD ACTION get
 *   @param ObjectId id Id 
 *
 */
app.get(properties.api + '/blocks/:id', function (req, res) {
	db_RapiDevKit_db.Block.findOne({_id:req.params.id}).exec(function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * BlockService.list
 *   @description CRUD ACTION list
 *
 */
app.get(properties.api + '/blocks', function (req, res) {
	db_RapiDevKit_db.Block.find().exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
});

/**
 * BlockService.update
 *   @description CRUD ACTION update
 *   @param ObjectId id Id
 *
 */
app.post(properties.api + '/blocks/:id', function (req, res) {
	db_RapiDevKit_db.Block.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

