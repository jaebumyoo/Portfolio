const express = require( 'express' );

const app = express();
const port = process.env.PORT ? process.env.PORT : 9000;

app.use( express.static( `${ __dirname }/public` ) );

app.listen( port, () => `Listening on port${ port }.` );
