import { useEffect, useState } from 'react'

export const useClientMounted = () => {
  const [clientMounted, setClientMounted] = useState(false)

  useEffect(() => {
    setClientMounted(true)
  }, [])

  return clientMounted
}
