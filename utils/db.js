import mongoose from 'mongoose';

class DB {
    constructor(){
	this.client = mongoose.createConnection('mongodb://127.0.0.1:27017/campground');
	this.client.on('connected', () => console.log("DB is set"));
	this.client.on('error', () => console.log("Something Went Wrong"));
    }

    async getStatus(){
	return this.client.readyState === 1;
    }

    createSchema(schema){
	return new mongoose.Schema(schema);
    }

    createModel(modelName, modelSchema){
	return this.client.model(modelName, modelSchema);
    }

    async close(){
        await this.client.close();
    }

}

export default new DB();
