import { IPost } from 'src/redux/slices/postsSlice'
import styles from './event-post.module.pcss'

type IProps = {
    post: IPost
}

const EventPost = ({ post }: IProps) => {
    return (
        <section className={styles.eventPost}>
            <h3>{post.title}</h3>
            <div className={styles.eventPost__body}>
                <div>{post.city}</div>
                <div
                    className={styles.eventPost__body__peopleCounter}
                >{`${post.activeNumberOfPerson}/${post.numberOfPersons}`}</div>
                <div>{post.time}</div>
                <div className={styles.eventPost__body__author}>
                    {post.author}
                </div>
            </div>
        </section>
    )
}

export default EventPost
