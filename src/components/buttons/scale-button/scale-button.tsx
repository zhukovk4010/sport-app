import styles from './scale-button.module.pcss'

interface IProps {
    type: 'increase' | 'decrease'
    sign: '+' | '&#8211;'
}

const ScaleButton = ({ type, sign }: IProps) => {
    return (
        <button
            className={styles.scaleButton}
            onClick={() => console.log(type)}
        >
            {sign}
        </button>
    )
}

export default ScaleButton
