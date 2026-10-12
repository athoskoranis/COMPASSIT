'use client'
import { useEffect, useRef, useState } from 'react'

/**
 * Two invisible bot checks for every form that posts to /api/contact.
 *
 * 1. A honeypot: a text field no person can see or tab to. Form-filling bots
 *    fill every input they find, so a value here means a bot.
 * 2. A fill time: how long the form was on screen before it was sent. A person
 *    takes longer than a few seconds to type a name and an email; a script that
 *    POSTs straight to the endpoint sends no time at all.
 *
 * The route checks both and answers a failing submission with a normal "sent",
 * so the bot has nothing to learn from. Neither check asks anything of a real
 * visitor, which is why this is used rather than a CAPTCHA.
 */
export function useSpamGuard() {
  const shownAt = useRef<number | null>(null)
  const [trap, setTrap] = useState('')

  useEffect(() => {
    shownAt.current = Date.now()
  }, [])

  const field = (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}
    >
      <label>
        Leave this field empty
        <input
          type="text"
          name="url_confirm"
          tabIndex={-1}
          autoComplete="off"
          value={trap}
          onChange={(e) => setTrap(e.target.value)}
        />
      </label>
    </div>
  )

  const payload = () => ({
    url_confirm: trap,
    elapsedMs: shownAt.current === null ? 0 : Date.now() - shownAt.current,
  })

  return { field, payload }
}
