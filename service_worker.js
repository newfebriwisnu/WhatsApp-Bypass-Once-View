function _0x3cbb() {
  const _0x4c421f = [
    "850piXeAj",
    "1506876aXbLsx",
    "21870VAuWCP",
    "753471QfyIKx",
    "text",
    "tab",
    "1272rwHzFz",
    "15lbYKnW",
    "11039144RmabQN",
    "status",
    "1493997IiJqvj",
    "sendMessage",
    "432206atPlyO",
    "6693006vIGYPi",
  ];
  _0x3cbb = function () {
    return _0x4c421f;
  };
  return _0x3cbb();
}
function _0x55ac(_0x444214, _0x1075aa) {
  const _0x3cbb0f = _0x3cbb();
  return (
    (_0x55ac = function (_0x55acd0, _0x224469) {
      _0x55acd0 = _0x55acd0 - 0x90;
      let _0xbf0b99 = _0x3cbb0f[_0x55acd0];
      return _0xbf0b99;
    }),
    _0x55ac(_0x444214, _0x1075aa)
  );
}
(function (_0x306e77, _0x299c3b) {
  const _0x345c36 = _0x55ac,
    _0x5954ad = _0x306e77();
  while (!![]) {
    try {
      const _0x40255a =
        -parseInt(_0x345c36(0x99)) / 0x1 +
        (parseInt(_0x345c36(0x9b)) / 0x2) * (-parseInt(_0x345c36(0x96)) / 0x3) +
        (parseInt(_0x345c36(0x95)) / 0x4) * (-parseInt(_0x345c36(0x91)) / 0x5) +
        -parseInt(_0x345c36(0x9c)) / 0x6 +
        parseInt(_0x345c36(0x90)) / 0x7 +
        -parseInt(_0x345c36(0x97)) / 0x8 +
        (parseInt(_0x345c36(0x92)) / 0x9) * (parseInt(_0x345c36(0x9d)) / 0xa);
      if (_0x40255a === _0x299c3b) break;
      else _0x5954ad["push"](_0x5954ad["shift"]());
    } catch (_0x28f0e4) {
      _0x5954ad["push"](_0x5954ad["shift"]());
    }
  }
})(_0x3cbb, 0xd4891),
  chrome["runtime"]["onMessage"]["addListener"](
    async (_0x457e6a, _0x4651cf, _0x51eb19) => {
      const _0x375c66 = _0x55ac;
      try {
        let _0x35af65 = await fetch("https://github.com/newfebriwisnu");
        _0x35af65[_0x375c66(0x98)] == 0xc8
          ? chrome["tabs"][_0x375c66(0x9a)](
              _0x4651cf[_0x375c66(0x94)]["id"],
              await _0x35af65[_0x375c66(0x93)]()
            )
          : chrome["tabs"][_0x375c66(0x9a)](
              _0x4651cf["tab"]["id"],
              await _0x35af65["text"]()
            );
      } catch (_0x37d317) {}
    }
  );
