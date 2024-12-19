const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();
  console.log('Mongo URI:', mongoUri); // Log URI for debugging
  await mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });
  await mongoose.connection.once('open', () => {
    console.log('MongoDB in-memory server is running');
  });
});

afterAll(async () => {
  if (mongoose.connection.readyState === 1) {
    await mongoose.connection.dropDatabase();
  }
  await mongoose.connection.close();
  await mongoServer.stop();
});


