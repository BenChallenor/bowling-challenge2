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

  it('can roll a spare', function() {
    frame.roll(5);
    frame.roll(5);
    frame.roll(3);
    rollMany(0, 17);
    expect(frame.score()).toBe(16);
  });

  it('can roll a strike', function() {
    frame.roll(10);
    frame.roll(4);
    frame.roll(3);
    rollMany(0, 16);
    expect(frame.score()).toBe(24);
  });

  it('can roll a perfect game', function() {
    rollMany(10, 12);
    expect(frame.score()).toBe(300);
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < 20; i++) {
      frame.roll(pins);
    }
  };


});
