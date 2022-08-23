import { useEffect, useState } from "react";
import axios from "axios";
import {url} from '../constants/constants'


export function useRequestData(receivedUrl) {
    const [data, setData] = useState(undefined)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState("")
    const [updateData, setUpdateData] = useState(false)
    const [request, setRequest] = useState(true)

    useEffect(() => {
        axios.get(receivedUrl).then (response => {
            if(response.data.profile === null) {
                axios.put(`${url}clear`).then(() => {
                    setIsLoading(false)
                    alert('Atenção: Você vizualisou todos os perfis disponíveis e por isso seus matches serão resetados.')
                }).catch(err => {
                    setIsLoading(false)
                    setError(err)
                })
            } else {
                setIsLoading(false)
                setData(response.data)
            }
        }).catch(err => {
            setIsLoading(false)
            setError(err)
        })
    }, [url, updateData, request])

    return [data, isLoading, setIsLoading, error, updateData, setUpdateData, request, setRequest]
}