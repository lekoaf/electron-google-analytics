import chai from 'chai';
import Analytics from '../src/index';

const expect = chai.expect;

describe('Analytics', function() {
  it('should fail sending a pageview request', function() {
    const analytics = new Analytics('', { debug: true });

    return analytics.pageview('http://example.com', 'test', 'test')
    .then((response) => {
      return expect(response).to.be.empty;
    }).catch((err) => {
      return expect(err).to.not.be.empty;
    });
  });

  // it('should send a pageview request', function() {
  //   const analytics = new Analytics('xxx', { debug: true });
  //
  //   return analytics.pageview('http://example.com', 'test', 'test')
  //   .then((response) => {
  //     return expect(response).to.have.property('clientID');
  //   }).catch((err) => {
  //     // console.log(err);
  //     return expect(err).to.be.empty;
  //   });
  // });
});
