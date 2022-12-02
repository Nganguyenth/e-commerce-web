import React, { useState } from 'react'
import './style.scss'

export type TabPanel = {
  name: string
  title: string
}

export type TabContent = Record<string, React.ReactNode>

export const Tab = (props: {
  tabPanels: TabPanel[]
  tabContent: TabContent
  classNameActive?: string
  className?: string
}) => {
  const { tabPanels, tabContent, className, classNameActive } = props

  const [activeTab, setActiveTab] = useState<string>(tabPanels[0].name)

  return (
    <div className='cloth-review'>
      <div className='nav-tabs'>
        {tabPanels.map((tab) => (
          <button
            onClick={() => setActiveTab(tab.name)}
            className={tab.name === activeTab ? classNameActive : className}
            type='button'>
            {tab.title}
          </button>
        ))}
      </div>
      <div className='tab-content'>{tabContent[activeTab]}</div>
    </div>
  )
}
