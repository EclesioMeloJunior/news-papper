import { Document } from 'mongoose';

export interface News extends Document {
  readonly title: String;
  readonly description: String;
  readonly author: String;
  readonly created_at: Date;
  readonly updated_at: Date;
}
