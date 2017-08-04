import SwaggerExpress from 'swagger-express-mw';
import SwaggerUi from 'swagger-tools/middleware/swagger-ui';
import promisify from 'es6-promisify';

/**
 * Registers Swagger API middleware and the Swagger UI documentation
 * @param {object} app - Express app instance
 * @returns {Promise}
 */
export default async (app) => {

	const options = {
		appRoot: process.cwd()
	}

	let swaggerExpress;

	try{
		swaggerExpress = await promisify(SwaggerExpress.create)(options);
	} catch(e){
		return Promise.reject(e); // Catches Swagger YAML validation errors
	}

	swaggerExpress.register(app);
	console.log('Registered Swagger middleware');

	app.use(SwaggerUi(swaggerExpress.runner.swagger));
	console.log('Registered Swagger UI at /doc');
};
