// Local shim for the customer app's "../../components" module that the supplied
// theme's MuiDataGridTheme references. Only the symbols used by the theme are
// provided. These render only inside a DataGrid "no rows" overlay.
import * as React from 'react'

export function Icon({ icon }) {
  return <span className="enc-icon">{icon}</span>
}

export function EmptyState({ icon, message }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: 24 }}>
      {icon}
      <span>{message}</span>
    </div>
  )
}
