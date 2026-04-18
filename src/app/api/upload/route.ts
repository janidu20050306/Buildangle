import { NextResponse } from 'next/server';
import { requireOwnerApi } from '@/lib/auth/guards';
import { uploadProjectImage } from '@/lib/storage';

export async function POST(request: Request) {
  const access = await requireOwnerApi();
  if (!access.ok) return access.response;

  const formData = await request.formData();
  const file = formData.get('file') as File;

  if (!file || !file.type.startsWith('image/')) {
    return NextResponse.json({ error: 'Invalid file. Please upload an image.' }, { status: 400 });
  }

  const imageUrl = await uploadProjectImage(file);
  if (!imageUrl) {
    return NextResponse.json({ error: 'Failed to upload image.' }, { status: 500 });
  }

  return NextResponse.json({ url: imageUrl });
}