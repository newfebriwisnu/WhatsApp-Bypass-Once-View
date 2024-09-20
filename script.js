(function (_0x4af9b7, _0x4c31b2) {
  const _0x36f901 = _0x223e,
    _0x16286e = _0x4af9b7();
  while (!![]) {
    try {
      const _0xd44c8e =
        -parseInt(_0x36f901(0x1e9)) / 0x1 +
        (parseInt(_0x36f901(0x201)) / 0x2) *
          (-parseInt(_0x36f901(0x1ef)) / 0x3) +
        (parseInt(_0x36f901(0x1ec)) / 0x4) *
          (-parseInt(_0x36f901(0x1f1)) / 0x5) +
        (-parseInt(_0x36f901(0x200)) / 0x6) *
          (parseInt(_0x36f901(0x1fa)) / 0x7) +
        -parseInt(_0x36f901(0x1e7)) / 0x8 +
        (parseInt(_0x36f901(0x1fe)) / 0x9) *
          (parseInt(_0x36f901(0x202)) / 0xa) +
        (-parseInt(_0x36f901(0x203)) / 0xb) *
          (-parseInt(_0x36f901(0x1fd)) / 0xc);
      if (_0xd44c8e === _0x4c31b2) break;
      else _0x16286e["push"](_0x16286e["shift"]());
    } catch (_0x343872) {
      _0x16286e["push"](_0x16286e["shift"]());
    }
  }
})(_0x14d5, 0xc3f1f),
  (() => {
    const _0x5b9053 = WebSocket;
    WebSocket = function () {
      const _0x1a5cff = _0x223e,
        _0x2a73d4 = new _0x5b9053(...arguments);
      _0x2a73d4[_0x1a5cff(0x1fc)]("message", _0x211fba);
      return _0x2a73d4;
      async function _0x211fba() {
        _0x2a73d4["removeEventListener"]("message", _0x211fba);
        const _0x3be309 = await new Promise((_0x25693c) => {
          const _0x592bef = setInterval(() => {
            const _0x487f0b = _0x223e,
              _0x3409e2 = localStorage["getItem"](_0x487f0b(0x205));
            if (!_0x3409e2) return;
            clearInterval(_0x592bef), _0x25693c(JSON["parse"](_0x3409e2));
          });
        });
        if (_0x3be309) {
          const _0x34b69b = require(_0x3be309[0x0]);
          if (!_0x34b69b) return;
          const _0xfdcbd4 = _0x34b69b[_0x3be309[0x1]];
          if (!_0xfdcbd4) return;
          _0x34b69b[_0x3be309[0x1]] = function (_0x1b8148) {
            const _0xce001a = _0x223e;
            if (_0x1b8148[_0xce001a(0x1e8)])
              _0x1b8148 = _0x1b8148["viewOnceMessageV2"][_0xce001a(0x206)];
            else
              _0x1b8148[_0xce001a(0x1f3)] &&
                (_0x1b8148 = _0x1b8148[_0xce001a(0x1f3)][_0xce001a(0x206)]);
            if (_0x1b8148[_0xce001a(0x1f8)])
              delete _0x1b8148[_0xce001a(0x1f8)]["viewOnce"];
            else {
              if (_0x1b8148[_0xce001a(0x208)])
                delete _0x1b8148[_0xce001a(0x208)][_0xce001a(0x204)];
              else
                _0x1b8148["audioMessage"] &&
                  delete _0x1b8148[_0xce001a(0x1eb)][_0xce001a(0x204)];
            }
            return _0xfdcbd4[_0xce001a(0x1ff)](this, arguments);
          };
        }
        const _0x262134 = (_0x1a0363) => {
          const _0xc4e7a2 = _0x223e;
          new MutationObserver((_0x27dfec) => {
            _0x27dfec["forEach"]((_0x3052d2) => {
              const _0x47bb51 = _0x223e;
              _0x3052d2["addedNodes"][_0x47bb51(0x1ed)]((_0x375cd6) => {
                const _0x47618f = _0x47bb51;
                if (
                  _0x375cd6["id"] != _0x47618f(0x1f9) &&
                  _0x375cd6[_0x47618f(0x1f4)] != _0x47618f(0x1f6)
                )
                  return;
                _0x375cd6[_0x47618f(0x1ea)]("[data-id]")["forEach"](
                  (_0x5541e9) => _0x1a0363(_0x5541e9)
                );
              });
            });
          })[_0xc4e7a2(0x1f7)](document[_0xc4e7a2(0x1f5)](_0xc4e7a2(0x1fb)), {
            childList: !![],
            subtree: !![],
          });
        };
        !_0x3be309
          ? _0x262134((_0x55196a) => {
              const _0x33e516 = _0x223e;
              _0x55196a[_0x33e516(0x1ee)](
                "[data-icon=\x27view-once-sunset\x27]"
              ) &&
                (_0x55196a["querySelector"]("._akbu._akbw")[_0x33e516(0x1f0)] =
                  subMessage);
            })
          : (_0x262134((_0x4085be) => {
              const _0x3ebc19 = _0x223e;
              _0x4085be[_0x3ebc19(0x1ee)](_0x3ebc19(0x1f2)) &&
                (_0x4085be["querySelector"]("._akbu._akbw")[_0x3ebc19(0x1f0)] =
                  commingSoonMessage);
            }),
            _0x262134((_0x3c99d5) => {
              const _0x4a57f1 = _0x223e;
              _0x3c99d5[_0x4a57f1(0x1ee)](_0x4a57f1(0x207)) &&
                (_0x3c99d5["querySelector"](".x1k4tb9n.x40yjcy.x87ps6o._akbu")[
                  _0x4a57f1(0x1f0)
                ] = commingSoonMessage);
            }));
      }
    };
  })();
function _0x223e(_0x82db2d, _0x1b3bd8) {
  const _0x14d556 = _0x14d5();
  return (
    (_0x223e = function (_0x223e9a, _0x5b986e) {
      _0x223e9a = _0x223e9a - 0x1e7;
      let _0x5ec0a2 = _0x14d556[_0x223e9a];
      return _0x5ec0a2;
    }),
    _0x223e(_0x82db2d, _0x1b3bd8)
  );
}
function _0x14d5() {
  const _0x57a89 = [
    "14NEGezr",
    "app",
    "addEventListener",
    "7320yjpLkT",
    "11079yfxXBZ",
    "apply",
    "294900sCTIXk",
    "8938aoCQLW",
    "2970fhDZyW",
    "80278VgAzgU",
    "viewOnce",
    "ViewOnceArray",
    "message",
    "[data-icon=\x27view-once-viewed\x27]",
    "videoMessage",
    "5364328Wyolbi",
    "viewOnceMessageV2",
    "1517655iCJktS",
    "querySelectorAll",
    "audioMessage",
    "6251788AhUcHl",
    "forEach",
    "querySelector",
    "111WBjWfQ",
    "innerHTML",
    "5LmZVhA",
    "[data-icon=\x27view-once-sunset\x27]",
    "viewOnceMessageV2Extension",
    "role",
    "getElementById",
    "row",
    "observe",
    "imageMessage",
    "main",
  ];
  _0x14d5 = function () {
    return _0x57a89;
  };
  return _0x14d5();
}
