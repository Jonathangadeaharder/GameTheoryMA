export type DarkModeToggleProps = {
    readonly className: string
    readonly value: boolean
    readonly onChange: (value: boolean) => void
}

const DarkModeToggle = ({ className, value, onChange }: DarkModeToggleProps) => (
    <div
        className={className}
        onClick={() => onChange(!value)}
    >
        {value ? '🌒 on' : '☀️ off'}
    </div>
)

export default DarkModeToggle
