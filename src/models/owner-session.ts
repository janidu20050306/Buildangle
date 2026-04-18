import { Schema, model, models } from 'mongoose';

const OwnerSessionSchema = new Schema(
  {
    ownerId: { type: Schema.Types.ObjectId, ref: 'OwnerUser', required: true, index: true },
    tokenHash: { type: String, required: true, unique: true, index: true },
    expiresAt: { type: Date, required: true, index: true },
  },
  { timestamps: true }
);

OwnerSessionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export const OwnerSessionModel = models.OwnerSession || model('OwnerSession', OwnerSessionSchema);
