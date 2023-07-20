import React, { useRef, useState } from 'react'
import { toast } from 'react-hot-toast'

import useWatchTimeout from '@/root/lib/useWatchTimeout'

import { CopyIcon, CheckIcon } from '../modules/icons'

const CodeBlock = ({ children }: React.ComponentProps<'pre'>) => {
  const ref = useRef<HTMLPreElement>(null)
  const [copied, setCopied] = useState(false)

  useWatchTimeout(copied, 1600, () => {
    setCopied(false)
  })

  const handleCopy = async () => {
    const codeText = ref.current?.querySelector('code')?.innerText
    if (!codeText) return

    try {
      await navigator.clipboard.writeText(codeText)
      setCopied(true)
      toast.success('Code copied successfully.', {
        icon: '📋',
        duration: 1800,
      })
    } catch (e) {
      console.error(e)
      toast.error(
        `Oops, copying code failed. 
      Please try again.`,
        {
          icon: '👀',
        }
      )
    }
  }

  return (
    <div className="code-block">
      <pre className="code" ref={ref}>
        {children}
      </pre>

      <button
        className="code-copy-button"
        type="button"
        aria-label="button to copy this code block"
        onClick={handleCopy}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
      </button>
    </div>
  )
}

export default CodeBlock
