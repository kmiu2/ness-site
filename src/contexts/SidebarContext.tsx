import { createContext, FC, useState } from 'react'

interface ISidebarContext {
  sidebarToggle: any
  toggleSidebar: () => void
  closeSidebar: () => void
}

export const SidebarContext = createContext<ISidebarContext>(
  {} as ISidebarContext
)

export const SidebarProvider: FC = ({ children }) => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle)
  }
  const closeSidebar = () => {
    setSidebarToggle(false)
  }

  return (
    <SidebarContext.Provider
      value={{ sidebarToggle, toggleSidebar, closeSidebar }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
