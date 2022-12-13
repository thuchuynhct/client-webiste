import PictureCard, { pictureItem } from '../general/PictureCard'
function AboutHero() {
    return (
        <section>
            <div className='container'>
                <PictureCard
                    hero
                    pictureList={pictureItem.slice(0, 1)}
                />
            </div>
        </section>
    )
}

export default AboutHero