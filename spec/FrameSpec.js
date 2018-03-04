describe('Bowling game', function() {


  it('can roll gutter game', function() {
    var frame = new Frame();
    for (var i = 0; i < 20; i++) {
      frame.roll(0);
    }
    expect(frame.score()).toBe(0);
  });

  it('can roll all ones', function() {
    var frame = new Frame();
    for (var i = 0; i < 20; i++) {
      frame.roll(1);
    }
    expect(frame.score()).toBe(20);
  });
});
