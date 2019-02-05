import artistModel from '../resources/artists/artistModel';
import albumModel from '../resources/albums/albumModel';
import trackModel from '../resources/tracks/trackModel';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/mystify', { useNewUrlParser: true });

const artists = [
    { 
        name: "NF",
        bio: "Nathan John Feuerstein, known professionally as NF, is an American rapper, singer and songwriter. NF has credited Eminem as his prime influence in hip-hop, claiming that at one point that was all he listened to.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/NF_photo_2016.jpg",
    },
    {
        name: "Leonard Cohen",
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
    {
        name: "Bob Dylan",
        bio: "Bob Dylan is an American singer-songwriter, author, and visual artist who has been a major figure in popular culture for more than six decades. His lyrics incorporated a wide range of political, social, philosophical, and literary influences, defied existing conventions of popular music, and appealed to the burgeoning counterculture.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/BobDylan1.jpg",
    },
    {
        name: "Jhene Aiko",
        bio: "Jhene's musical style is associated with a new wave of music called PBR&B, which is described as emerging, stylistic alternative to contemporary R&B. Besides PBR&B Aiko's explores a variety of genres including psychedelic music, classic R&B and hip hop music.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/JheneAiko.jpg",
    },
    {
        name: "The Beatles",
        bio: "The Beatles were an English rock band formed in Liverpool in 1960. With members John Lennon, Paul McCartney, George Harrison and Ringo Starr, they became regarded as the foremost and most influential music band in history. Rooted in skiffle, beat and 1950s rock and roll, the group were integral to pop music's evolution into an art form and to the development of the counterculture of the 1960s. They often incorporated classical elements, older pop forms and unconventional recording techniques in innovative ways, and later experimented with several musical styles ranging from pop ballads and Indian music to psychedelia and hard rock. As the members continued to draw influences from a variety of cultural sources, their musical and lyrical sophistication grew, and they were seen as an embodiment of the era's sociocultural movements.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/The+Beatles.jpg",
    },
    {
        name: "Cat Stevens",
        bio: "Cat Stevens is a British singer-songwriter and multi-instrumentalist. His musical style consists of folk, pop, rock, and Islamic music. 'I get the tune and then I just keep on singing the tune until the words come out from the tune. Its kind of a hypnotic state that you reach after a while when you keep on playing it where words just evolve from it.'  ",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/CatStevens.jpg",
    },
    {
        name: "Paul Simon",
        bio: "Paul Simon is an American singer-songwriter and actor. Simon's musical career has spanned seven decades with his fame and commercial success beginning as half of the duo Simon & Garfunkel (originally known as Tom & Jerry), formed in 1956 with Art Garfunkel. Simon was responsible for writing nearly all of the pair's songs.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/PaulSimon.jpg",
    },
    {
        name: "Kanye West",
        bio: "Kanye West is an American rapper, singer, songwriter, record producer, entrepreneur and fashion designer. His musical career has been marked by dramatic changes in styles, incorporating an eclectic range of influences including soul, baroque pop, electro, indie rock, synth-pop, industrial and gospel. Over the course of his career, West has been responsible for cultural movements and progressions within mainstream hip hop and popular music at large.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/KanyeWest.jpg",
    },
    {
        name: "Explosions in the Sky",
        bio: "Explosions in the Sky is an American post-rock band from Texas. The quartet originally played under the name Breaker Morant, then changed to the current name in 1999. The band has garnered popularity beyond the post-rock scene for their elaborately developed guitar work, narratively styled instrumentals - what they refer to as 'cathartic mini - symphonies' - and their enthusiastic and emotional live shows.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/ExplosionsInTheSky.jpg",
    },
    {
        name: "Noname",
        bio: "Noname is an American rapper and poet. Warner is from the Bronzeville neighborhood of Chicago, Illinois, where she began rapping and performing slam poetry in 2010. In 2013, she gained wider recognition following her appearance on the track 'Lost' from Chance the Rapper's popular mixtape Acid Rap.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/Noname.jpg",
    },
    {
        name: "Mozart",
        bio: "Wolfgang Amadeus Mozart was a prolific and influential composer of the classical era. He composed more than 600 works, many acknowledged as pinnacles of symphonic, concertante, chamber, operatic, and choral music. He is among the most enduringly popular of classical composers, and his influence is profound on subsequent Western art music. Ludwig van Beethoven composed his own early works in the shadow of Mozart, and Joseph Haydn wrote: 'posterity will not see such a talent again in 100 years'.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/Mozart.jpg",
    },
    {
        name: "Mark Eliyahu",
        bio: "Mark Eliyahu is an Israeli musician. He plays the kamancheh.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/MarkEliyahu.jpg",
    },
    {
        name: "Benji Rothman",
        bio: "An up and coming artist from New York City, Benji's music displays the rough and unpolished edges of a future music visionary.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/BenAlbumCover2.jpg",
    },
];

const albums = [
    {
        title: "The White Album",
        releaseDate: "1965",
        imageURL: "a",
        artist: "The Beatles"
    }
]

const saveAlbums = async (artist) => {
    for (let i = 0; i < albums.length; i++) {
        const album = albums[i];
        if (artist.name == album.artist) {
            album.artist = artist._id;
            const newAlbum = new albumModel(album);
            const savedAlbum = await newAlbum.save();
            // const savedAlbumDocument = albumModel.findById(savedAlbum._id);
            // const populatedAlbum = await savedAlbumDocument.populate('artist').exec((err, albm) => console.log(albm.artist));
            // console.log(populatedAlbum.artist.name);
        }
    }
}


const saveArtists = async () => {
    for (const artist of artists) {
        const newArtist = new artistModel(artist);
        try {
         const artist = await newArtist.save();
         saveAlbums(artist);
        }
        catch(e) {
            console.log(e);
        }
    }
    mongoose.connection.close();
}

saveArtists();





