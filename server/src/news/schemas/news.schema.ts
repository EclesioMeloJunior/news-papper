import * as mongoose from 'mongoose';

export const NewsSchema = new mongoose.Schema(
  {
    title: String,
    public: Boolean,
    description: String,
    category: String,
  },
  {
    timestamps: true,
  },
);
