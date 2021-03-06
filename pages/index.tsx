import type { NextPage } from 'next'
import { BarChart } from '@ncr-design-system/data-viz'
import { Stack } from '@mui/material'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Stack>
        <BarChart hideAxes data={[1, 2, 3] as any} />
      </Stack>
    </div>
  )
}

export default Home
