module.exports = (function() {

  'use strict';

  const Nodal = require('nodal');
  const Swerve = Nodal.require('app/models/swerve.js');

  class V1SwervesController extends Nodal.Controller {

    index() {

      Swerve.query()
        .where(this.params.query)
        .end((err, models) => {

          this.respond(err || models);

        });

    }

    show() {

      Swerve.find(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

    create() {

      Swerve.create(this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    update() {

      Swerve.update(this.params.route.id, this.params.body, (err, model) => {

        this.respond(err || model);

      });

    }

    destroy() {

      Swerve.destroy(this.params.route.id, (err, model) => {

        this.respond(err || model);

      });

    }

  }

  return V1SwervesController;

})();
