var Frame = function() {
  this.rolls = [];
};

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Frame.prototype.score = function() {
  var result = 0;
  var rollIndex = 0;
  var frame = this;

  for (var frameIndex = 0; frameIndex < 10; frameIndex++) {
    if (strike()) {
      result += strikeScore();
      rollIndex++;
    } else if (spare()) {
      result += spareScore();
      rollIndex += 2;
    } else {
      result += normalScore();
      rollIndex += 2;
    }

  }
  return result;

  function strike() {
    return frame.rolls[rollIndex] == 10;
  }

  function spare() {
    return frame.rolls[rollIndex] + frame.rolls[rollIndex + 1] === 10;
  }

  function strikeScore() {
    return frame.rolls[rollIndex] + frame.rolls[rollIndex + 1] + frame.rolls[rollIndex + 2];
  }

  function spareScore() {
    return frame.rolls[rollIndex] + frame.rolls[rollIndex + 1] + frame.rolls[rollIndex + 2];
  }

  function normalScore() {
    return frame.rolls[rollIndex] + frame.rolls[rollIndex + 1];
  }


};
