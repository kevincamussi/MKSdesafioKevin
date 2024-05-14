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


  //open shopping Cart
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }


  const [products, setProducts] = useState<unknown[]>([])


  // add itens to shopping cart from list
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
  const totalCart = products.reduce((total: number, current) => {
    return total + (current.price) * (current.quantity);
  }, 0)

  //total quantity
  const totalQuantity = products.reduce((total: number, current) => {
    return total + (current.quantity);
  }, 0)
  console.log(products)
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
