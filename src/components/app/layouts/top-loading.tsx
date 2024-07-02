import React from 'react'
import { useRouteLoading } from '@/lib/hooks/use-route-loading'
import useStore from '@/store/store'

const TopLoading = () => {
  const { loading } = useStore() //loading from store, ex: action
  const routeLoading = useRouteLoading() // route loading
  return (
    <React.Fragment>
      {(loading || routeLoading) && (
        <div className='w-full'>
          <div className='h-1 w-full overflow-hidden bg-primary-foreground'>
            <div className='progress left-right h-full w-full bg-primary'></div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default TopLoading
