import * as mongoose from 'mongoose';

export const NewsSchema = new mongoose.Schema(
  {
    title: String,
    author: String,
    description: String,
  },
  {
    timestamps: true,
  },
);
