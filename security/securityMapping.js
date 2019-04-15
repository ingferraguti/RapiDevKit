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
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

exports.authMapping = {
    //STATIC SECURITY
    'POST - /api/changePassword$': [],
    'POST - /api/users/$': ["ADMIN"],
    'POST - /api/users/([^/])+$': ["ADMIN"],
    'GET - /api/users/$': ["ADMIN"],
    'GET - /api/users/([^/])+$': ["ADMIN"],
    'POST - /api/users/([^/])+/changePassword': ["ADMIN"],

    //YOUR SECURITY MAPPING
	'POST - /api/blocks/*$' : [],
	'DELETE - /api/blocks/([^/])+$' : [],
	'GET - /api/blocks/([^/])+$' : [],
	'GET - /api/blocks/*$' : [],
	'POST - /api/blocks/([^/])+$' : [],
	'POST - /api/blocktypes/*$' : [],
	'DELETE - /api/blocktypes/([^/])+$' : [],
	'GET - /api/blocktypes/findByName/([^/])+$' : [],
	'GET - /api/blocktypes/([^/])+$' : [],
	'GET - /api/blocktypes/*$' : [],
	'POST - /api/blocktypes/([^/])+$' : [],
	'POST - /api/items/*$' : [],
	'DELETE - /api/items/([^/])+$' : [],
	'GET - /api/items/findByType/([^/])+$' : [],
	'GET - /api/items/([^/])+$' : [],
	'GET - /api/items/([^/])+/getLink$' : [],
	'GET - /api/items/([^/])+/getLink$' : [],
	'GET - /api/items/*$' : [],
	'POST - /api/items/([^/])+$' : [],
	'POST - /api/roles/*$' : [],
	'DELETE - /api/roles/([^/])+$' : [],
	'GET - /api/roles/([^/])+$' : [],
	'GET - /api/roles/*$' : [],
	'POST - /api/roles/([^/])+$' : [],
	'POST - /api/types/*$' : [],
	'DELETE - /api/types/([^/])+$' : [],
	'GET - /api/types/findByName/([^/])+$' : [],
	'GET - /api/types/([^/])+$' : [],
	'GET - /api/types/*$' : [],
	'POST - /api/types/([^/])+$' : [],
	'POST - /api/Users/([^/])+/changePassword$' : ["ADMIN"],
	'POST - /api/Users/*$' : [],
	'DELETE - /api/Users/([^/])+$' : [],
	'GET - /api/Users/([^/])+$' : [],
	'GET - /api/Users/*$' : [],
	'POST - /api/Users/([^/])+$' : [],
	

}
