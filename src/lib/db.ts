import mongoose from 'mongoose';

const mongodbUri = process.env.MONGODB_URI;

declare global {
  // eslint-disable-next-line no-var
  var __mongooseConnection:
    | {
        conn: typeof mongoose | null;
        promise: Promise<typeof mongoose> | null;
      }
    | undefined;
}

const cached = global.__mongooseConnection ?? {
  conn: null,
  promise: null,
};

global.__mongooseConnection = cached;

export async function connectToDatabase() {
  if (!mongodbUri) return null;
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongodbUri!, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
