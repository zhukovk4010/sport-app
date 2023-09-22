import AddPostButton from 'src/components/buttons/add-post-button/add-post-button'
import styles from './community-page.module.css'

import EventPost from 'src/components/event-post/event-post'

const CommunityPage = () => {
    return (
        <div className={styles.communityPage}>
            <EventPost />
            <EventPost />
            <EventPost />
            <EventPost />
            <EventPost />
            <EventPost />
            <EventPost />
            <EventPost />
            <EventPost />
            <EventPost />
            <EventPost />
            <div className={styles.communityPage__addPostButtonContainer}>
                <AddPostButton />
            </div>
        </div>
    )
}

export default CommunityPage
