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

