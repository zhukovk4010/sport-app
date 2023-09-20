import styles from './scale-button.module.css'

type PropsType = {
    type: 'increase' | 'decrease'
    sign: '+' | '&#8211;'
}

const ScaleButton = ({ type, sign }: PropsType) => {
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
