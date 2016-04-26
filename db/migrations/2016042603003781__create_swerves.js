module.exports = (function() {

  "use strict";

  const Nodal = require('nodal');

  class CreateSwerves extends Nodal.Migration {

    constructor(db) {
      super(db);
      this.id = 2016042603003781;
    }

    up() {

      return [
        this.createTable("swerves", [{"name":"user_id","type":"int"},{"name":"body","type":"string"}])
      ];

    }

    down() {

      return [
        this.dropTable("swerves")
      ];

    }

  }

  return CreateSwerves;

})();
