const Civic = (function(url, request, assign) {

  function _Civic (key) {
    if (!key) throw new Error('missing API Key for google civic.')

    this.__url = {
      protocol: "https",
      host: "www.googleapis.com",
      pathname: "civicinfo/v2/",
      query: {
        key: key
      }
    }
  }

  _Civic.prototype.proxy = function get (resource, opts) {
    const _url = (str) =>  url.resolve(this.__url.pathname, str);

    var opts = opts || Object.create(null);
    var urlObj = assign(this.__url, { query: opts }, { pathname: _url(resource) });

    return request(url.format(urlObj));
  }

  return _Civic;

}(require('url'), require('request'), require('object-assign-deep')));

module.exports = Civic;