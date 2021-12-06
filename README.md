# status-codes-found

HTTP status code constants from mdn and nodejs' http status codes.
Types included.

## Installation

```bash
npm install status-codes-found
```

## Usage

```ES2016
import { StatusCodes } from 'status-codes-found';
// For shorter typing
import { StatusCodes as SC } from 'status-codes-found';

/****info codes****/
const infoCode = StatusCodes.info.CONTINUE;
// => infoCode = 100

/****success codes****/
const successCode = StatusCodes.success.OK;
// => sucessCode = 200

/****redirect codes****/
const redirectCode = StatusCodes.redirect.MOVED_PERMANENTLY;
// => redirectCode = 301

/****client error codes****/
const clientErrorCode = StatusCodes.error.client.BAD_REQUEST;
// => clientErrorCode = 400

/***server error codes****/
const serverErrorCode = StatusCodes.error.server.INTERNAL_SERVER_ERROR;
// => serverErrorCode = 500

const statusText = StatusCodes.statusText(400);
// => statusText = 'Bad Request'
// mapped from nodejs http.STATUS_CODES
