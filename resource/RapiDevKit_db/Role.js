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
 *  TO CUSTOMIZE Role.js PLEASE EDIT ../custom/RoleCustom.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
const app = require('../../app.js');
const db_RapiDevKit_db = require('../../db/RapiDevKit_db_schema.js')
const properties = require('../../properties.js');
const handleError = require('../../security/util.js').handleError;
require('./custom/RoleCustom.js');

/*
 * SCHEMA DB Role
 * 
	{
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		Role: {
			type: Schema.ObjectId,
			ref : "User"
		},
		
	}
 * 
 */



//CRUD METHODS


/**
 * RoleService.create
 *   @description CRUD ACTION create
 *
 */
app.post(properties.api + '/roles', function (req, res) {
	obj = new db_RapiDevKit_db.Role(req.body);
	obj.save(function (err) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * RoleService.delete
 *   @description CRUD ACTION delete
 *   @param ObjectId id Id
 *
 */
app['delete'](properties.api + '/roles/:id', function (req, res) {
	db_RapiDevKit_db.Role.findByIdAndRemove(req.params.id, function (err) {
		  if (err) return handleError(err, res);
		  res.send(err);
	});
});

/**
 * RoleService.get
 *   @description CRUD ACTION get
 *   @param ObjectId id Id 
 *
 */
app.get(properties.api + '/roles/:id', function (req, res) {
	db_RapiDevKit_db.Role.findOne({_id:req.params.id}).exec(function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});

/**
 * RoleService.list
 *   @description CRUD ACTION list
 *
 */
app.get(properties.api + '/roles', function (req, res) {
	db_RapiDevKit_db.Role.find().exec(function (err, list) {
		if (err) return handleError(err, res);
		res.send(list);
	});
});

/**
 * RoleService.update
 *   @description CRUD ACTION update
 *   @param ObjectId id Id
 *
 */
app.post(properties.api + '/roles/:id', function (req, res) {
	db_RapiDevKit_db.Role.findByIdAndUpdate(req.params.id, req.body, {'new': true}, function (err, obj) {
		if (err) return handleError(err, res);
		res.send(obj);
	});
});


/*
 * CUSTOM SERVICES
 * 
 *	These services will be overwritten and implemented in  Custom.js
 */

