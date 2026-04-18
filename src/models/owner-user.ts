import { Schema, model, models } from 'mongoose';

const OwnerUserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    passwordHash: { type: String, required: true },
    name: { type: String, required: true, trim: true, default: 'Owner' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

OwnerUserSchema.index({ email: 1 }, { unique: true });

export const OwnerUserModel = models.OwnerUser || model('OwnerUser', OwnerUserSchema);
