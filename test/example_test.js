var client = require('webdriverio')
var assert = require('assert')
var should = require('should');

var branchUrl = 'http://myurl.com'
    
describe('Home page tests', function() {
    it('Header is correct', function() {
        browser.url(branchUrl)
        browser.getText('h1').should.equal('My Site')
    });
});
