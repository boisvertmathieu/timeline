let mongoose = require('mongoose');

class Database {
    constructor() {
        this.db_connection_url = 'mongodb+srv://' + process.env.MONGO_DATABASE_USERNAME + ':' + process.env.MONGO_DATABASE_PASSWORD + '@timeline.ge8mr.mongodb.net/timeline?retryWrites=true&w=majority';
        this._connect();
    }

    _connect() {
        mongoose.connect(this.db_connection_url, {useFindAndModify: false})
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error');
                console.error(this.db_connection_url);
            });
    }
}

module.exports = new Database();
