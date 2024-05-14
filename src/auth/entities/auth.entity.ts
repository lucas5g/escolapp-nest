import { Profile } from '@prisma/client';

export class AuthEntity {
  id: number;
  email: string;
  profile: Profile;
  unityId: number;
}
