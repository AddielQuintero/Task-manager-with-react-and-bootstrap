import { useState } from 'react'

export const useStorageListener = (sincronized) => {
  const [storageChange, setStorageChange] = useState(false)

  window.addEventListener('storage', (change) => {
    if (change.key === 'API_1') {
      console.log('Hubo cambios en API_1')
      setStorageChange(true)
    }
  })

  const toggleShow = () => {
    sincronized()
    setStorageChange(false)
  }

  const handleClose = () => setStorageChange(false)

  return { show: storageChange, toggleShow, handleClose }
}
