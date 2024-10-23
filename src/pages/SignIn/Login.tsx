import { SignIn } from '@clerk/clerk-react'



export const Login = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <SignIn/>
    </div>
  )
}


