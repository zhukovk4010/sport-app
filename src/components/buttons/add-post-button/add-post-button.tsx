import iconAddPost from 'src/assets/icons/add-post-icon.svg'
import styles from './add-post-button.module.css'

const AddPostButton = () => {
    return (
        <button className={styles.addPostButton}>
            <img src={iconAddPost} alt='' />
        </button>
    )
}

export default AddPostButton
