import { reactive } from 'vue'
import { setTimeout } from 'timers'
/**
 * useToast — composable for programmatic toast dispatch.
 *
 * Usage:
 *   const { toasts, add, remove } = useToast()
 *
 *   add({ message: 'Booking confirmed', variant: 'success' })
 *
 * Mount <ToastContainer :toasts="toasts" @remove="remove" /> once at the app root.
 *
 * A singleton store is used so any component can call add() without prop-drilling.
 */

const toasts = reactive([])
let nextId = 0

/**
 * @param {{ message: string, title?: string, variant?: 'info'|'success'|'warning'|'danger', duration?: number }} options
 */
function add({ message, title, variant = 'info', duration = 4000 }) {
  const id = ++nextId
  toasts.push({ id, message, title, variant })

  if (duration > 0) {
    setTimeout(() => remove(id), duration)
  }

  return id
}

function remove(id) {
  const index = toasts.findIndex((t) => t.id === id)
  if (index !== -1) toasts.splice(index, 1)
}

function clear() {
  toasts.splice(0, toasts.length)
}

export function useToast() {
  return { toasts, add, remove, clear }
}
