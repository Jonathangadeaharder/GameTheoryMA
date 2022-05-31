import { PropsWithChildren, useState } from 'react'
import DarkModeToggle from '../DarkModeToggle'

const DefaultPageLayout = ({ children }: PropsWithChildren<{}>) => {
    const [darkMode, setDarkMode] = useState<boolean>(true)
    return (
        <div className={`${darkMode ? 'dark' : ''} h-full`}>
            <div className='dark:bg-slate-800 dark:text-amber-50 h-full p-10'>
                <DarkModeToggle
                    value={darkMode}
                    onChange={setDarkMode}
                    className='mb-4'
                />
                {children}
            </div>
        </div>
    )
}

export default DefaultPageLayout
