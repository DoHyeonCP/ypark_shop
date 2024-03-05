/* eslint-disable no-unused-vars */
import { useQuery } from "react-query";
import Cookies from "js-cookie";
import { axiosInstance } from "../api/axiosInstance";


const getOrders = async (param) => {
  const token = Cookies.get("access");
  try {
    const res = await axiosInstance.get('/api/purchase/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // 여기서 응답 로깅

    return res.data;
  } catch (error) {
    console.error('Error fetching user items', 
    {
      message: error.message,
      response: error.response,
      request: error.request,
    });
    // 여기서 에러 로깅
    throw error;
  }
};

export default function useGetOrderList(params, setFunction) {
  const { data, isLoading, isSuccess, isError, refetch } = useQuery(
    ["getOrders", params],
    () => getOrders(params),
    {
      retry: 2,
      staleTime: 1000 * 60 * 30,
      onSuccess: () => {
      if (typeof setFunction === 'function'){
          setFunction(true);
          setTimeout(() => {
            setFunction(false);
          }, 1200);
        }
      },
        
      onError: (error) => {
        console.error('Error in useQuery:', {
          message: error.message,
          response: error.response,
          request: error.request,
        });
      }
    }
  );

  return { data, isLoading, isSuccess, isError, refetch };
}
