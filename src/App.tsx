import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';
import { useEffect, useState } from 'react';
import { Skeleton } from './components/Skeleton';
import headerStyle from './components/Header/Header.module.scss'
import cardStyle from './components/ProductsList/ProductsList.module.scss';

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);

  //open shopping Cart

  const openCart = () => {
    setIsCartOpen(true);
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }


  // add itens to shopping cart from list
  const [products, setProducts] = useState<unknown[]>([])

  const handleItem = (item: any) => {

    const { id, name, price, photo, quantity } = item;

    const alreadyInCart = products.find(
      (item: any) => item.id === id
    );


    if (alreadyInCart) {
      const newCart = products.map((item: any) => {
        if (item.id === id) (
          {
            ...item,
            quantity: item.quantity++,
          }
        );
        return item;
      })
      setProducts(newCart);

    } else {
      setProducts([
        ...products,
        { id, name, price, photo, quantity }
      ]);
    }
  }

  // remove one product from shopping cart
  const removeItem = (item: any) => {

    const { id } = item;

    const alreadyInCart = products.find(
      (item: any) => item.id === id
    );

    if (alreadyInCart) {
      const newCart = products.map((item: any) => {
        if (item.id === id) (
          {
            ...item,
            quantity: item.quantity--,
          }
        );
        return item;
      })
      setProducts(newCart);
    }
  }

  //add more itens to cart
  const addMoreItens = (item: any) => {

    const { id } = item;

    const alreadyInCart = products.find(
      (item: any) => item.id === id
    );

    if (alreadyInCart) {
      const newCart = products.map((item: any) => {
        if (item.id === id) (
          {
            ...item,
            quantity: item.quantity++,
          }
        );
        return item;
      })
      setProducts(newCart);
    }
  }

  //delete item from shopping cart 
  // remove itens from shopping cart
  const deleteItem = (item: any) => {

    const { id } = item;

    const alreadyInCart = products.find(
      (item: any) => item.id === id
    );
    if (alreadyInCart) {
      const newCart = products.map((item: any) => {
        if (item.id === id) (
          {
            ...item,
            quantity: item.quantity,
          }
        );
        return item;
      })
      setProducts(newCart);
    }
  }

  //total price
  const totalCart = products.reduce((total: any, current: any) => {
    return total + (current.price) * (current.quantity);
  }, 0)

  //total quantity
  const totalQuantity = products.reduce((total: any, current: any) => {
    return total + (current.quantity);
  }, 0)


  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [])

  if (isLoading) {
    return (
      <>
        <div className={headerStyle.header}>
          <Skeleton width={200} height={84} borderRadius={10} />
          <Skeleton width={100} height={40} borderRadius={10} />
        </div>
        <div className={cardStyle.products}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return (
              <Skeleton width={300} height={300} borderRadius={8} />
            )
          })
          }
        </div>
      </ >
    )
  }
  return (
    <div className='container'>
      <Header handleClick={openCart} totalQuantity={totalQuantity} />
      <ProductsList handleClick={handleItem} />
      <Footer />
      {isCartOpen &&
        <ShoppingCart handleClick={closeCart} productsInCart={products} removeItem={removeItem} addMoreItens={addMoreItens} totalCart={totalCart} deleteItem={deleteItem} />
      }
    </div>
  )
}

export default App;
