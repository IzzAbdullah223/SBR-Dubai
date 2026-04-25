import { useState, useCallback, useEffect } from 'react'
import { walletAPI } from '../services/api'
import type { User,Wallet } from '../lib/types'

 

const useWallet = (user: User | null) => {
  const [wallet,        setWallet]        = useState<Wallet | null>(null)
  const [loadingWallet, setLoadingWallet] = useState(false)
  const [recharging,    setRecharging]    = useState(false)
  const [walletError,   setWalletError]   = useState<string | null>(null)

  const fetchWallet = useCallback(async () => {
    if (!user) return
    setLoadingWallet(true)
    try {
      const result = await walletAPI.getWallet()
      if (result?.success) setWallet(result.data)
    } catch {
 
    } finally {
      setLoadingWallet(false)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      fetchWallet()
    } else {
      setWallet(null)
    }
  }, [user])

  const recharge = useCallback(async (amount: number) => {
    setRecharging(true)
    setWalletError(null)
    try {
      const result = await walletAPI.recharge(amount)
      if (result?.success) {
        setWallet(prev => ({ ...prev, ...result.data }))
        return true
      } else {
        setWalletError(result?.message || 'Recharge failed.')
        return false
      }
    } catch (err: any) {
      setWalletError(err.message || 'Recharge failed.')
      return false
    } finally {
      setRecharging(false)
    }
  }, [])

  return {
    wallet,
    loadingWallet,
    recharging,
    walletError,
    setWalletError,
    recharge,
    fetchWallet,
    walletBalance: wallet?.balance ?? null,
  }
}

export default useWallet