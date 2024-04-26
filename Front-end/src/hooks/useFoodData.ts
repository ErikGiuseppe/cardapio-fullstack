import axios , { AxiosPromise} from "axios"
import { FoodData } from "../interface/FoodData"
import { useQuery } from "@tanstack/react-query"

const API_URL = 'http://localhost:8080'

const fethData = async():  AxiosPromise<FoodData[]>=>{
    const response= axios.get(API_URL+'/food')
    return response
}


export function useFoodData(){
    const query = useQuery({
        queryFn: fethData,
        queryKey: ['food-data'],
        retry: 2
    })
    return{
        ...query,
        data: query.data?.data
    }
}