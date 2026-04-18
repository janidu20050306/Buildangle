import { Schema, model, models } from 'mongoose';

export const projectStatusValues = ['ongoing', 'done', 'coming-soon'] as const;
export type ProjectStatus = (typeof projectStatusValues)[number];

const ProjectSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true, index: true },
    title: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ['Luxury Villa', 'Modern Home', 'Renovation', 'Commercial'],
    },
    location: { type: String, required: true, trim: true },
    year: { type: Number, required: true, min: 2000, max: 2100 },
    image: { type: String, required: true, trim: true },
    images: { type: [String], default: [] },
    description: { type: String, required: true, trim: true, maxlength: 280 },
    longDescription: { type: String, default: '', trim: true },
    area: { type: Number, min: 100 },
    featured: { type: Boolean, default: false },
    status: { type: String, enum: projectStatusValues, default: 'ongoing' },
  },
  { timestamps: true }
);

ProjectSchema.index({ featured: -1, year: -1 });

export const ProjectModel = models.Project || model('Project', ProjectSchema);
