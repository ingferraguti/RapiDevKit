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

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/RapiDevKit_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_RapiDevKit_db_schema = [];
const db_RapiDevKit_db = [];

/**
 * SCHEMA DB RapiDevKit_db
 */



 /**
  * Block
  */
db_RapiDevKit_db_schema.Block = new mongoose.Schema({
	Actyve: {
		type: 'Boolean', 
		required : true
	},
	FontendAPIHook: {
		type: 'String'
	},
	//RELATIONS
	BlockType: {
		type: Schema.ObjectId,
		ref : "BlockType"
	},
	ItemType: {
		type: Schema.ObjectId,
		ref : "Type"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * BlockType
  */
db_RapiDevKit_db_schema.BlockType = new mongoose.Schema({
	Code: {
		type: 'String'
	},
	Name: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	BlockType: {
		type: Schema.ObjectId,
		ref : "Block"
	},
	*/
});


 /**
  * Item
  */
db_RapiDevKit_db_schema.Item = new mongoose.Schema({
	Active: {
		type: 'Boolean', 
		required : true
	},
	Created: {
		type: 'Number'
	},
	Data: {
		type: 'String'
	},
	Modified: {
		type: 'Number'
	},
	Order: {
		type: 'Number'
	},
	Protected: {
		type: 'Boolean'
	},
	Status: {
		type: 'String'
	},
	//RELATIONS
	Creator: {
		type: Schema.ObjectId,
		ref : "User"
	},
	Link: {
		type: Schema.ObjectId,
		ref : "Item"
	},
	Type: {
		type: Schema.ObjectId, 
		required : true,
		ref : "Type"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Role
  */
db_RapiDevKit_db_schema.Role = new mongoose.Schema({
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	Role: {
		type: Schema.ObjectId,
		ref : "User"
	},
	*/
});


 /**
  * Status
  */
db_RapiDevKit_db_schema.Status = new mongoose.Schema({
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Type
  */
db_RapiDevKit_db_schema.Type = new mongoose.Schema({
	Name: {
		type: 'String'
	},
	Schema: {
		type: 'String'
	},
	Validation: {
		type: 'String'
	},
	Visualization: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	ItemType: {
		type: Schema.ObjectId,
		ref : "Block"
	},
	Type: {
		type: Schema.ObjectId, 
		required : true,
		ref : "Item"
	},
	*/
});


 /**
  * User
  */
db_RapiDevKit_db_schema.User = new mongoose.Schema({
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	role: {
		type: 'String'
	},
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	Role: {
		type: Schema.ObjectId,
		ref : "Role"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	Creator: {
		type: Schema.ObjectId,
		ref : "Item"
	},
	*/
});



// Import schema customization
require('./RapiDevKit_db_customSchema.js');
var RapiDevKit_db_model = require('./RapiDevKit_db_crud.js');

// Declare mongoose model

db_RapiDevKit_db.Block = RapiDevKit_db_model.connection.model('Block', db_RapiDevKit_db_schema.Block );
db_RapiDevKit_db.BlockType = RapiDevKit_db_model.connection.model('BlockType', db_RapiDevKit_db_schema.BlockType );
db_RapiDevKit_db.Item = RapiDevKit_db_model.connection.model('Item', db_RapiDevKit_db_schema.Item );
db_RapiDevKit_db.Role = RapiDevKit_db_model.connection.model('Role', db_RapiDevKit_db_schema.Role );
db_RapiDevKit_db.Status = RapiDevKit_db_model.connection.model('Status', db_RapiDevKit_db_schema.Status );
db_RapiDevKit_db.Type = RapiDevKit_db_model.connection.model('Type', db_RapiDevKit_db_schema.Type );
db_RapiDevKit_db.User = RapiDevKit_db_model.connection.model('User', db_RapiDevKit_db_schema.User );

module.exports = db_RapiDevKit_db;

// Create ADMIN user if does not exist
createUser.createUser();
