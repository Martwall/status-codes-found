import { expect } from 'chai';
import { describe } from 'mocha';
import { StatusCodes } from '../dist/index'

describe('statusText', () => {
  it('should return undefined when code not found', () => {
    const statusText = StatusCodes.statusText('800');
    expect(statusText).to.be.undefined;
  });

  it('should return status text when code is found', () => {
    const statusText = StatusCodes.statusText(400);
    expect(statusText).to.be.equal('Bad Request');
  });

});

describe('Status codes', () => {
  it('should return codes as numbers', () => {
    let statusCode = StatusCodes.info.CONTINUE;
    expect(statusCode).to.be.equal(100);
    statusCode = StatusCodes.success.CREATED;
    expect(statusCode).to.be.equal(201);
    statusCode = StatusCodes.redirect.MOVED_PERMANENTLY;
    expect(statusCode).to.be.equal(301);
    statusCode = StatusCodes.error.client.CONFLICT;
    expect(statusCode).to.be.equal(409);
    statusCode = StatusCodes.error.server.INTERNAL_SERVER_ERROR;
    expect(statusCode).to.be.equal(500);
  });
});
