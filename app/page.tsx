'use client';

import { redirect } from 'next/navigation';
import { useSession } from 'next-auth/react';
import ProfileHeader from '@/app/components/profile/profile-header';
import ProfileTabs from '@/app/components/profile/profile-tabs';

export default function Home() {
  const session = useSession();

  if (!(session.status === 'authenticated')) {
    redirect('/login');
  }

  return (
    <div className="container min-w-fit">
      <ProfileHeader />
      <ProfileTabs />
    </div>
  );
}
