import {css} from '@/styled-system/css'
import { container } from '@/styled-system/patterns'

export default function Home() {
  return <main className={container()}>
    <p className={css({ fontSize: '2xl', fontWeight: 'bold'})}>
      Next.js testing
    </p>
  </main>
}