import Mongoose from 'mongoose';
import nconf from 'nconf';

nconf.argv().env().file({ file: './config.json' });
Mongoose.connect(nconf.get('MONGO_URL'), { useMongoClient: true }, (err) => {
  if (err) throw console.log('connectDB ERROR!');// eslint-disable-line no-console
  else console.log('ConnectDB Susscess!');// eslint-disable-line no-console
});

const db = Mongoose.connection;

export default db;
