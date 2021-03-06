const monk = require('monk');
const config = require('./config');


const db = monk(config.MONGODB_URI);
const conditionsCollection = db.get('conditions');
const entriesCollection = db.get('entries');
const groupsCollection = db.get('groups');
// @todo: Create unique indexes when impplementing post and update methods
    
class MailpyController {
    constructor(){}

    async getGroups (req, res, next) {
        const data = await groupsCollection.find({});
        return res.json(data);
    };

    async getGroup (req, res, next) {
        res.send("Not impplemented");
    };

    async addGroup (req, res, next){
        res.send("Not impplemented");
    }

    async updateGroup (req, res, next){
        res.send("Not impplemented");
    }

    async removeGroup (req, res, next){
        res.send("Not impplemented");
    }

    async getConditions (req, res, next) {
        const data = await conditionsCollection.find({});
        return res.json(data);
    };

    async getEntries(req, res, next) {
        const data = await entriesCollection.find({});
        return res.json(data);
    };

    async getEntry(req, res, next) {
        res.send("Not impplemented");
    };

    async addEntry(req, res, next) {
        res.send("Not impplemented");
    }

    async updateEntry(req, res, next) {
        res.send("Not impplemented");
    }

    async removeEntry(req, res, next) {
        res.send("Not impplemented");
    }
}

module.exports = new MailpyController();