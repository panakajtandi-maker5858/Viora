import "./App.css"
import { RouterProvider} from 'react-router'
import { routes } from './app.routes'
import { useSelector } from 'react-redux'
import { useAuth } from '../features/auth/hook/useAuth'
import { useEffect } from 'react'
import { useCart } from '../features/cart/hook/useCart'



function App() {
  const { handleGetMe } = useAuth()
  const { handleGetCart } = useCart() 
  const user = useSelector(state => state.auth.user)

  console.log(user)

  useEffect(() => {
    handleGetMe() 
    handleGetCart() 
  }, [])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}


export default App