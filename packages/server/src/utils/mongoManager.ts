import mongoose from 'mongoose';

import { MONGO_URI } from '../config/config';

class mongoManger {
  static connect() {
    mongoose.connect(MONGO_URI);
  }
}

export default mongoManger;
