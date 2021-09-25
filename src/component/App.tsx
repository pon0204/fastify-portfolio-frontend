import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Room from './Room/Room'
import RoomSearch from './Room/RoomSearch'
import Top from './Top'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/'>
                <Top />
              </Route>
              <Route exact path='/room/create'>
                <Room />
              </Route>
              <Route exact path='/room/search/:roomId' component={RoomSearch} />
            </Switch>
          </Layout>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default App
