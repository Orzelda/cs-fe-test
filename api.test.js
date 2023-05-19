const axios = require('axios').default; //api automation
// const expect = mocha.expect;
const chai = require('chai');
const expect = chai.expect;

describe('API Tests', () => {
  it('should fetch user data', async () => {
    const response = await axios.get('https://reqres.in/api/users/1');
    expect(response.status).to.equal(200);
    expect(response.data).to.have.property('data');
    // Add more assertions as needed
  });

  // Add more test cases for other API endpoints
});