import styles from './event-post.module.css'

const EventPost = () => {
    return (
        <section className={styles.eventPost}>
            <h3>Футбол</h3>
            <div className={styles.eventPost__body}>
                <div>Г. Подольск</div>
                <div className={styles.eventPost__body__peopleCounter}>1/8</div>
                <div>ср. 20 сен. 2023 г.</div>
                <div className={styles.eventPost__body__author}>
                    Жуков Кирилл
                </div>
            </div>
        </section>
    )
}

export default EventPost
