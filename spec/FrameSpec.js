describe('Bowling game', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });


  it('can roll gutter game', function() {
    rollMany(0, 20);
    expect(frame.score()).toBe(0);
  });

  it('can roll all ones', function() {
    rollMany(1, 20);
    expect(frame.score()).toBe(20);
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++) {
      frame.roll(pins);
    }
  };


});
