import app from '+/api';
import os from 'os';
import cluster from 'cluster';
import { default as swagger } from '../api/swagger/util';
const USE_CLUSERS = false; // Clusters will not work on Heroku unless you purchase more dynos $$$

(async() => {

	try{
		await swagger.init(app);
	} catch(e){
		return console.log(e);
	}

	const numCPUs = os.cpus().length;

	if (cluster.isMaster && USE_CLUSERS === true) {

		console.log(`Starting ${numCPUs} clusters`);
		console.log(`Master ${process.pid} is running`);

		for (let i = 0; i < numCPUs; i++) {
			cluster.fork();
		}

		cluster.on('exit', (worker, code, signal) => {
			console.log(`worker ${worker.process.pid} died`);
		});

		cluster.on('online', (worker, code, signal) => {
			console.log(`worker ${worker.process.pid} online`);
		});

		cluster.on('listening', (worker, code, signal) => {
			console.log(`worker ${worker.process.pid} listening`);
		});
	} else {
		app.server.listen(process.env.PORT || 3000, () => {
			console.log(`Express server started on port ${app.server.address().port}`);
		});
	}
})();
