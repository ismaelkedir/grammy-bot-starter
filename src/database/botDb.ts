import { Db } from "mongodb";
import MongoDBClient from "../utils/db";

const collectionName = 'collectionName';

class BotDb {
    private db: Db;

    constructor() {
        this.db = MongoDBClient.getInstance().getDb();
    }

    public async populateDbIfEmpty() {
        const collection = this.db.collection(collectionName);
        const count = await collection.countDocuments();
        if (count === 0) {
        }
    }
}

export default BotDb;