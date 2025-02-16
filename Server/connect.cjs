const { MongoClient } = require('mongodb');
require('dotenv').config({ path: "./config.env" });

async function main() {
    const Db = process.env.ATLAS_URI;
    const client = new MongoClient(Db);

    try {
        await client.connect();
        console.log("Connected to MongoDB!");

        const db = client.db("possibledecorinventory");

        // Use listCollections() to get collection names
        const collections = await db.listCollections().toArray();

        if (collections.length === 0) {
            console.log("No collections found in the database.");
        } else {
            console.log("Collections:");
            collections.forEach(collection => console.log(collection.name));
        }

    } catch (e) {
        console.error("Error:", e);
    } finally {
        await client.close();
    }
}

main();
