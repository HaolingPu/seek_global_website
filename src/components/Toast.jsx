import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { useLang } from '../i18n/LangContext'

export default function Toast() {
  const { toast } = useLang()
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex justify-center px-4">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto inline-flex max-w-md items-center gap-2.5 rounded-full bg-ink-900 px-5 py-3 text-sm font-medium text-white shadow-xl"
          >
            <CheckCircle2 className="h-4 w-4 text-brand-300" />
            <span>{toast}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
