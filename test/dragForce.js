var test = require('tap').test,
    createDragForce = require('../lib/dragForce'),
    physics = require('ngraph.physics.primitives');

test('reduces force value', function (t) {
  var body = new physics.Body();
  body.force.x = 1; body.force.y = 1;
  body.velocity.x = 1; body.velocity.y = 1;

  debugger;
  var dragForce = createDragForce({ coeff: 0.1 });
  dragForce.update(body);

  t.ok(body.force.x < 1 && body.force.y < 1, 'Force value is reduced');
  t.end();
});

test('Initialized with default value', function (t) {
  var dragForce = createDragForce();
  var defaults = dragForce.options();
  t.ok(defaults && typeof defaults.coeff === 'number', 'Default value is present');

  t.end();
});

test('Can update default value', function (t) {
  var dragForce = createDragForce();
  var options = dragForce.options({ coeff: 0.0 }).options();

  t.ok(options.coeff === 0.0, 'Default value is updated');
  t.end();
});