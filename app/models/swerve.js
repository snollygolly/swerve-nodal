module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');

  class Swerve extends Nodal.Model {}

  Swerve.setDatabase(Nodal.require('db/main.js'));
  Swerve.setSchema(Nodal.my.Schema.models.Swerve);

	Swerve.validates('body', 'must not use more than 3 emojis', (v) => {
		console.log(v.length);
		if (v && v.length <= 6){
			return true;
		}
		return false;
	});

  return Swerve;

})();
