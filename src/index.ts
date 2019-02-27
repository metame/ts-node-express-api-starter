import express from "express";
import * as routes from "./routes";

const app = express();
const port = 8080;

routes.register(app);

app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );
