import { MongoClient, Db } from 'mongodb';

class MongoDBClient {
    private static instance: MongoDBClient;
    private client: MongoClient;
    private db: Db;

    private constructor(uri: string = 'mongodb://localhost:27017', dbName: string = '') {
        this.client = new MongoClient(uri);
        this.db = this.client.db(dbName);
    }

    public static getInstance(): MongoDBClient {
        if (!this.instance) {
            this.instance = new MongoDBClient(process.env.DATABASE_URI, process.env.DATABASE_NAME);
        }
        return this.instance;
    }

    public async connect(uri: string, dbName: string): Promise<void> {
        try {
            this.client = new MongoClient(uri);
            await this.client.connect();
            console.log('====================');
            console.log('Connected to MongoDB');
            console.log('====================');
            this.db = this.client.db(dbName);
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

    public getDb(): Db {
        if (!this.db) {
            throw new Error('Database is not connected');
        }
        return this.db;
    }

    public async close(): Promise<void> {
        await this.client?.close();
    }
}

export default MongoDBClient;