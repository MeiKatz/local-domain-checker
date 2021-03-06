(function (window) {
  var ip2dec = function (address) {
    var blocks = address.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);

    if (blocks) {
      var sum;
      // a = 256 = 2^8
      // b = 256^c
      sum  = blocks[1] * (1 << (3 * 8)); // == 16.777.216 == 256^3
      sum += blocks[2] * (1 << (2 * 8)); // ==     65.536 == 256^2
      sum += blocks[3] * (1 << (1 * 8)); // ==        256 == 256^1
      sum += blocks[4] * (1 << (0 * 8)); // ==          1 == 256^0

      return sum;
    }
  }

  var isLocalIPAddressIPv4 = function (address) {
    // ip address space from 127.0.0.1 to 127.255.255.254
    return (
      ip2dec(address) >= ip2dec("127.0.0.1")
      && ip2dec(address) <= ip2dec("127.255.255.254")
    );
  }

  var isLocalIPAddressIPv6 = function (address) {
    return address == "::1";
  }

  var hasLocalTLD = function (address) {
    return /.*\.(localhost|local|test)$/.test(address);
  }

  var isLocalhost = function (address) {
    return address == "localhost";
  }

  window.isLocal = function (address) {
    var fns = [
      isLocalhost,
      hasLocalTLD,
      isLocalIPAddressIPv6,
      isLocalIPAddressIPv4,
    ];

    return fns.some(function (fn) {
      return fn(address || window.location.hostname);
    });
  }
})(window);
