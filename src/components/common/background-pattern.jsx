import colors from 'common/colors'

const BackgroundPattern = () => (
    <div style={{
        width: '100%',
        height: '100%',
        position: 'fixed',
        overflow: 'hidden',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: `radial-gradient(circle at top left, ${colors.orange} 10%, ${colors.turquoise} 60%, transparent), `
                    + `\radial-gradient(circle at bottom right, ${colors.orange} 50%,${colors.turquoise} 70%, transparent 100%)`,
        zIndex: -1,
    }}
    />
)

export default BackgroundPattern
