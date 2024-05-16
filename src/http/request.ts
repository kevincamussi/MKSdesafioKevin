// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';
// import { useState, useEffect } from 'react';



// export const useFetch = <T = unknown>(url: string) => {

//     const [data, setData] = useState<T | null>(null)
//     useEffect(() => {
//         axios.get(url)
//             .then(response => {
//                 setData(response.data)
//             })
//     }, [])

//     return { data }


// }

// export const useFetch = () => {

//     const { data, isLoading } = useQuery('produto', () => {
//         return axios
//             .get('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC')
//             .then((response) => response.data);
//     })
//     console.log(data, isLoading)
// }
