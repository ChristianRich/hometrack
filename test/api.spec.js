import test from 'ava';
import request from 'supertest';
import app from '../api';
import is from 'is_js';
import { default as swagger } from '../api/swagger/util';
const HOST = 'http://localhost:';
const PORT = 3000;

test.before(async() => {
    await swagger.init(app);
	await app.listen(PORT);
});

test('/GET ping', async(t) => {
	t.plan(2);

	const results = await request(HOST + PORT)
		.get('/ping')
		.expect(200);

	t.true(is.object(results.body));
	t.true(results.text === 'pong');
});

test('/POST properties', async(t) => {
    t.plan(2);

    const mockRequest = require('./mock/hometrack-sample-request.json'),
        mockResponse = require('./mock/hometrack-sample-response.json');

    const results = await request(HOST + PORT)
        .post('/filter')
        .send(mockRequest)
        .expect(200);

    t.true(is.object(results.body), 'Result should be an object');
    t.true(results.body.response.length === 7, 'Expected exactly 7 records')
});

test('/POST properties', async(t) => {

    t.plan(1);

    const results = await request(HOST + PORT)
		.post('/filter')
        .send({})
        .expect(400);

    t.true(results.statusCode === 400, 'Expect 400 Bad Request');
});