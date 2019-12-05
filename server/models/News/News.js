import mongoose from 'mongoose';

const newsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: String,
  category: String,
  country: String,
  description: String,
  language: String,
  name: String,
  url: String,
});

export const News = mongoose.model('News', newsSchema);
