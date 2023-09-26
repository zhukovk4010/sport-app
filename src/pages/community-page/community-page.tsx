import AddPostButton from 'src/components/buttons/add-post-button/add-post-button'
import styles from './community-page.module.css'

import EventPost from 'src/components/event-post/event-post'
import { useAppSelector } from 'src/hooks/store-hooks'

const CommunityPage = () => {
    const posts = useAppSelector((state) => state.posts.postsList)

    return (
        <div className={styles.communityPage}>
            <EventPost post={posts[0]} />
            <div className={styles.communityPage__addPostButtonContainer}>
                <AddPostButton />
            </div>
        </div>
    )
}

export default CommunityPage
