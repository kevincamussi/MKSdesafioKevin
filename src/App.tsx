import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';
import { useState } from 'react';
// import { useQuery } from '@tanstack/react-query'


function App() {
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ['produto'],
  //   queryFn: buscaProduto
  // });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }



  return (
    <div className='container'>
      <Header handleClick={openCart} event={undefined} target={undefined} MouseEvent={undefined} />
      <ProductsList />
      <Footer />
      {isCartOpen &&
        <ShoppingCart handleClick={closeCart} event={undefined} target={undefined} MouseEvent={undefined} />
      }
    </div>
  )
}

export default App
