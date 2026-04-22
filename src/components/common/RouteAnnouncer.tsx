export function RouteAnnouncer() {
  return (
    <div id="route-announcer" className="sr-only" aria-live="polite" aria-atomic="true" />
  )
}

export function announceRoute(message: string) {
  const el = document.getElementById('route-announcer')
  if (el) el.textContent = message
}
