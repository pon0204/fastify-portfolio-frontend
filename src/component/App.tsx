import axios from 'axios'
import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './Layout'
import Room from './Room/Room'
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
  useEffect(() => {
    axios.get('http://localhost:3333/product').then((res) => {
      console.log(res.data)
    })
  }, [])

  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path='/'>
                <Top />
              </Route>
              <Route exact path='/room'>
                <Room />
              </Route>
            </Switch>
          </Layout>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </div>
  )
}

export default App
