import * as _ from 'lodash';

module.exports = {

	post: (req, res) => {

		if(!_.isArray(req.body.payload)){
			return res.status(400).send();
		}

		res
			.status(200)
			.send(filter(req.body.payload))

	}
};

const filter = (properties = []) => {

    const result = {
        response: []
    };

    properties.forEach((property) => {
        result.response.push({
			concataddress: concatAddress(property.address),
			type: property.type,
			workflow: property.workflow,
		})
    });

    return result;
};

const concatAddress = (address = {}) => {

	let result = '';

	if(address.buildingNumber) result += `${address.buildingNumber}`;
    if(address.street) result += ` ${address.street}`;
    if(address.suburb) result += ` ${address.suburb}`;
    if(address.state) result += ` ${address.state}`;
    if(address.postcode) result += ` ${address.postcode}`;
    return result;
};
