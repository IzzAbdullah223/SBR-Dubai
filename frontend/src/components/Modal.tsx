import { useEffect, useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    const modal = modalRef.current
    if (!modal) return

    const focusableSelectors = [
      'a[href]',
      'button:not(:disabled)',
      'input:not(:disabled)',
      'select:not(:disabled)',
      'textarea:not(:disabled)',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ')

    const getFocusable = () =>
      Array.from(modal.querySelectorAll<HTMLElement>(focusableSelectors))

    getFocusable()[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return

      const focusable = getFocusable()
      if (!focusable.length) return

      const first = focusable[0]!
      const last  = focusable[focusable.length - 1]!

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] animate-fadeIn"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        onClick={e => e.stopPropagation()}
        className="bg-white dark:bg-gray-900 rounded-2xl p-8 w-full max-w-[480px] relative animate-slideUp max-h-[90vh] overflow-y-auto mx-4"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-sm text-gray-500 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  )
}