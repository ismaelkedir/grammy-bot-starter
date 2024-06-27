import { Db } from 'mongodb';
import MongoDBClient from './db';

let db: Db;

const initializeDatabase = async () => {
    try {
        const dbClient = MongoDBClient.getInstance();
        db = dbClient.getDb();
    } catch (error) {
        console.error('Error occurred while communicating with database:', error);
    }
}

export const getDb = async (): Promise<Db> => {
    if (!db) {
        await initializeDatabase();
    }

    return db;
}

export const incrementUserCount = async (userId: number): Promise<void> => {
    const db = await getDb();
    const usersCollection = db.collection('users');
    const user = await usersCollection.findOne({ id: userId });

    if (!user) {
        await usersCollection.insertOne({ id: userId });
    }
}

export const getUserCount = async (): Promise<number> => {
    try {
        const db = await getDb();
        const usersCollection = db.collection('users');
        const count = await usersCollection.countDocuments();

        return count;
    } catch (error) {
        console.error('Error occurred while getting user count:', error);
        throw error;
    }
}