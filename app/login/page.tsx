'use client'
import Auth from '@/components/Auth'

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div>
        <h1 className="header">Supabase Auth + Storage</h1>
        <p>
          Experience our Auth and Storage through a simple profile management example. Create a user
          profile and upload an avatar image. Fast, simple, secure.
        </p>
      </div>
      <Auth/>
    </div>
  )
}
