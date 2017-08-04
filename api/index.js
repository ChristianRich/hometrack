import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// Handling JSON parse errors for POST requests. Should result in a 400 Bad Request.
app.use(function (error, req, res, next) {

	if(error instanceof SyntaxError && req.method === 'POST') {
		return res.status(400).json({
			error: 'Could not decode request: JSON parsing failed'
		})
	}

	next();
});

// Redirect baseurl to Swagger UI
app.get('/', (req, res) => {
	res.redirect('/docs/#/default');
});

export default app;
