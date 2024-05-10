import { useQuery } from '@tanstack/react-query'
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { Footer } from './components/Footer';
import { ShoppingCart } from './components/ShoppingCart';

async function buscaProduto() {
  const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC');
  return response.json;
}

function App() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['produto'],
    queryFn: buscaProduto
  });

  console.log(data, isError, isLoading)



  return (
    <div className='container'>
      <Header />
      <ProductsList />
      <Footer />
      <ShoppingCart />
    </div>
  )
}

export default App
