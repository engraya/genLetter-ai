
import { ThemeToggle } from './theme-toggle'
import { IoLogoGithub } from 'react-icons/io5'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
export default function AuthAndTheme() {

  const router = useRouter()

  const redirectToGithub = () => {
    router.push('https://github.com/engraya/genLetter-ai')
  }
  return (
    <div className='flex items-center gap-x-2'>
      <Button
        variant='ghost'
        className='rounded-full'
        size='icon'
        suppressHydrationWarning
        onClick={redirectToGithub}
    >
      <IoLogoGithub className="text-lg" />
    </Button>
      <ThemeToggle />
    </div>
  )
}
