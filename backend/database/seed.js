import artistModel from '../resources/artists/artistModel';
import albumModel from '../resources/albums/albumModel';
import trackModel from '../resources/tracks/trackModel';
import mongoose from 'mongoose';

const env = process.env.NODE_ENV || 'dev';

if (env == 'dev') {
    mongoose.connect('mongodb://localhost:27017/mystify', { useNewUrlParser: true });
}
else {
    mongoose.connect('mongodb://heroku_3rtfnd25:clrnenj47a1plb0hp7e4ta1tgp@ds113825.mlab.com:13825/heroku_3rtfnd25', { useNewUrlParser: true });
}

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
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/BeatlesWhiteAlbum.png",
        artist: "The Beatles"
    },
    {
        title: "Seargent Pepper\'s Lonely Hearts Club Band",
        releaseDate: "1967",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/Seargent+Pepper's+Lonely+Hearts+Club+Band/The+Beatles+-+Sgt.+Pepper's+Lonely+Hearts+Club+Band+(50th+Anniversary+Super+Deluxe+Edition)+(2017).jpg",
        artist: "The Beatles"
    },
    {
        title: "Ye",
        releaseDate: "2018",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Kanye+West/Ye/Cover.jpg",
        artist: "Kanye West"
    },
    {
        title: "Perception",
        releaseDate: "2017",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/Cover.jpg",
        artist: "NF"
    },
    {
        title: "Requiem",
        releaseDate: "1791",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/Mozart-Requiem.jpg",
        artist: "Mozart"
    },
    {
        title: "Revelations",
        releaseDate: "2019",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/BenAlbumCover1.jpg",
        artist: "Benji Rothman"
    },
    {
        title: "Blonde on Blonde",
        releaseDate: "1966",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/BlondeOnBlonde.jpg",
        artist: "Bob Dylan"
    },
    {
        title: "Trip",
        releaseDate: "2017",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/Cover.jpg",
        artist: "Jhene Aiko"
    },
    {
        title: "Graceland",
        releaseDate: "1986",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Paul+Simon/Graceland/front.jpg",
        artist: "Paul Simon"
    },
    {
        title: "The Very Best of Cat Stevens",
        releaseDate: "1990",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/The+Very+Best+Of+Cat+Stevens+Front.jpg",
        artist: "Cat Stevens"
    },
    {
        title: "Songs of Love and Hate",
        releaseDate: "1971",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Leonard+Cohen/Songs+of+Love+and+Hate/Songs+of+Love+and+Hate+%5BFRONT%5D.jpg",
        artist: "Leonard Cohen"
    },
    {
        title: "Friday Night Lights",
        releaseDate: "2004",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Explosions+in+the+Sky/Friday+Night+Lights/Cover.jpg",
        artist: "Explosions in the Sky"
    },
    {
        title: "Roads",
        releaseDate: "2004",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mark+Eliyahu/MarkEliyahuRoads.jpg",
        artist: "Mark Eliyahu"
    },
    {
        title: "Room 25",
        releaseDate: "2018",
        imageURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Noname/Room25.jpeg",
        artist: "Noname"
    },


];

const tracks = [
    {
        title: "Birthday",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/01+-+Birthday.mp3",
        albumTitle: "The White Album",
        trackLength: "2:43"
    },
    {
        title: "Yer Blues",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/02+-+Yer+Blues.mp3",
        albumTitle: "The White Album",
        trackLength: "4:00"
    },
    {
        title: "Mother Nature\'s Son",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/03+-+Mother+Nautre's+Son.mp3",
        albumTitle: "The White Album",
        trackLength: "2:43"
    },
    {
        title: "Everyone\'s Got Something to Hide Except Me And Mr. Monkey",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/04+-+Everybody's+Got+Something+to+Hide+Except+Me+and+My+Monkey.mp3",
        albumTitle: "The White Album",
        trackLength: "2:24"
    },
    {
        title: "Sexy Sadie",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/05+-+Sexy+Sadie.mp3",
        albumTitle: "The White Album",
        trackLength: "3:15"
    },
    {
        title: "Helter Skelter",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/06+-+Helter+Skelter.mp3",
        albumTitle: "The White Album",
        trackLength: "4:29"
    },
    {
        title: "Long Long Long",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/07+-+Long%2C+Long%2C+Long.mp3",
        albumTitle: "The White Album",
        trackLength: "3:06"
    },
    {
        title: "Revolution",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/The+White+Album/08+-+Revolution+I.mp3",
        albumTitle: "The White Album",
        trackLength: "4:15"
    },
    {
        title: "Seargent Pepper\'s Lonely Hearts Club Band",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/Seargent+Pepper's+Lonely+Hearts+Club+Band/01+-+Sgt+Pepper's+Lonely+Hearts+Club+Band.flac",
        albumTitle: "Seargent Pepper\'s Lonely Hearts Club Band",
        trackLength: "2:02"
    },
    {
        title: "With A Little Help From My Friends",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/Seargent+Pepper's+Lonely+Hearts+Club+Band/02+-+With+A+Little+Help+From+My+Friends.flac",
        albumTitle: "Seargent Pepper\'s Lonely Hearts Club Band",
        trackLength: "2:45"
    },
    {
        title: "Lucy in the Sky with Diamonds",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/Seargent+Pepper's+Lonely+Hearts+Club+Band/03+-+Lucy+In+The+Sky+With+Diamonds.flac",
        albumTitle: "Seargent Pepper\'s Lonely Hearts Club Band",
        trackLength: "3:27"
    },
    {
        title: "Getting Better",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/Seargent+Pepper's+Lonely+Hearts+Club+Band/04+-+Getting+Better.flac",
        albumTitle: "Seargent Pepper\'s Lonely Hearts Club Band",
        trackLength: "2:47"
    },
    {
        title: "When I\'m Sixty Four",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/Seargent+Pepper's+Lonely+Hearts+Club+Band/09+-+When+I'm+Sixty-Four.flac",
        albumTitle: "Seargent Pepper\'s Lonely Hearts Club Band",
        trackLength: "2:40"
    },
    {
        title: "Lovely Rita",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/Seargent+Pepper's+Lonely+Hearts+Club+Band/10+-+Lovely+Rita.flac",
        albumTitle: "Seargent Pepper\'s Lonely Hearts Club Band",
        trackLength: "2:45"
    },
    {
        title: "Good Morning Good Morning",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/The+Beatles/Seargent+Pepper's+Lonely+Hearts+Club+Band/11+-+Good+Morning+Good+Morning.flac",
        albumTitle: "Seargent Pepper\'s Lonely Hearts Club Band",
        trackLength: "2:34"
    },
    {
        title: "I Thought About Killing You",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Kanye+West/Ye/01.+I+Thought+About+Killing+You.mp3",
        albumTitle: "Ye",
        trackLength: "4:34"
    },
    {
        title: "Yikes",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Kanye+West/Ye/02.+Yikes.mp3",
        albumTitle: "Ye",
        trackLength: "3:08"
    },
    {
        title: "All Mine",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Kanye+West/Ye/03.+All+Mine.mp3",
        albumTitle: "Ye",
        trackLength: "2:25"
    },
    {
        title: "Wouldn\'t Leave",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Kanye+West/Ye/04.+Wouldn't+Leave.mp3",
        albumTitle: "Ye",
        trackLength: "3:25"
    },
    {
        title: "No Mistakes",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Kanye+West/Ye/05.+No+Mistakes.mp3",
        albumTitle: "Ye",
        trackLength: "2:03"
    },
    {
        title: "Ghost Town",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Kanye+West/Ye/06.+Ghost+Town.mp3",
        albumTitle: "Ye",
        trackLength: "4:31"
    },
    {
        title: "Violent Crimes",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Kanye+West/Ye/07.+Violent+Crimes.mp3",
        albumTitle: "Ye",
        trackLength: "3:35"
    },
    {
        title: "Intro III",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/1+-+Intro+III.mp3",
        albumTitle: "Perception",
        trackLength: "4:28"
    },
    {
        title: "Outcast",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/2+-+Outcast.mp3",
        albumTitle: "Perception",
        trackLength: "5:25"
    },
    {
        title: "10 Feet Down",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/3+-+10+Feet+Down.mp3",
        albumTitle: "Perception",
        trackLength: "3:37"
    },
    {
        title: "Green Lights",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/4+-+Green+Lights.mp3",
        albumTitle: "Perception",
        trackLength: "3:01"
    },
    {
        title: "Dreams",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/5+-+Dreams.mp3",
        albumTitle: "Perception",
        trackLength: "3:41"
    },
    {
        title: "Remember This",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/11+-+Remember+This.mp3",
        albumTitle: "Perception",
        trackLength: "4:00"
    },
    {
        title: "Know",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/12+-+Know.mp3",
        albumTitle: "Perception",
        trackLength: "3:58"
    },
    {
        title: "Outro",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/NF/16+-+Outro.mp3",
        albumTitle: "Perception",
        trackLength: "3:32"
    },
    {
        title: "Introitus",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/Mozart+-+01+-+Introitus%3B++Requiem+Aeterna.mp3",
        albumTitle: "Requiem",
        trackLength: "5:02"
    },
    {
        title: "Kyrie",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/Mozart+-+02+-+Kyrie+(Eleison).mp3",
        albumTitle: "Requiem",
        trackLength: "2:44"
    },
    {
        title: "Dies Irae",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/Mozart+-+03+-+Dies+Irae.mp3",
        albumTitle: "Requiem",
        trackLength: "1:45"
    },
    {
        title: "Tuba Mirum",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/Mozart+-+04+-+Tuba+Mirum.mp3",
        albumTitle: "Requiem",
        trackLength: "4:17"
    },
    {
        title: "Rex Tremendae",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/Mozart+-+05+-+Rex+Tremendae+(Majestitas).mp3",
        albumTitle: "Requiem",
        trackLength: "2:19"
    },
    {
        title: "Recordare",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/Mozart+-+06+-+Recordare.mp3",
        albumTitle: "Requiem",
        trackLength: "6:26"
    },
    {
        title: "Lacrimosa",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/Mozart+-+08+-+Lacrimosa+(Dies+Illa).mp3",
        albumTitle: "Requiem",
        trackLength: "3:19"
    },
    {
        title: "Agnus Dei",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/'Mozart'+-+13+-+Agnus+Dei.mp3",
        albumTitle: "Requiem",
        trackLength: "3:45"
    },
    {
        title: "Communio",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mozart/Requiem/'Mozart'+-+14+-+Communio%3B+Lux+Aeterna.mp3",
        albumTitle: "Requiem",
        trackLength: "5:50"
    },
    {
        title: "Talk Like A Robot",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Benji/Talk+Like+A+Robot+V1.mp3",
        albumTitle: "Revelations",
        trackLength: "2:56"
    },
    {
        title: "Ghost Drum",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Benji/Ghost+Drum.mp3",
        albumTitle: "Revelations",
        trackLength: "2:53"
    },
    {
        title: "Rainy Day Women 12 and 35",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/01+Rainy+Day+Women+12+%26+35.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "4:36"
    },
    {
        title: "Pledging My Time",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/02+Pledging+My+Time.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "3:49"
    },
    {
        title: "Visions of Johanna",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/03+Visions+Of+Johanna.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "4:36"
    },
    {
        title: "One of Us Must Know (Sooner or Later)",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/04+One+Of+Us+Must+Know+%5BSooner+Or+Later%5D.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "4:57"
    },
    {
        title: "I Want You",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/05+I+Want+You.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "3:07"
    },
    {
        title: "Just Like A Woman",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/08+Just+Like+A+Woman.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "4:54"
    },
    {
        title: "Most Likely You Go Your Way And I Go Mine",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/09+Most+Likely+You+Go+Your+Way+And+I'll+Go+Mine.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "3:30"
    },
    {
        title: "Temporary Like Achilles",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/10+Temporary+Like+Achilles.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "5:02"
    },
    {
        title: "4th Time Around",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/12+4th+Time+Around.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "4:34"
    },
    {
        title: "Sad Eyed Lady of the Lowlands",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Bob+Dylan/Blonde+on+Blonde/14+Sad+Eyed+Lady+Of+The+Lowlands.mp3",
        albumTitle: "Blonde on Blonde",
        trackLength: "11:19"
    },
    {
        title: "LSD",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/01+Lsd.mp3",
        albumTitle: "Trip",
        trackLength: "1:45"
    },
    {
        title: "Jukai",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/02+Jukai.mp3",
        albumTitle: "Trip",
        trackLength: "4:16"
    },
    {
        title: "While We\'re Young",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/03+While+We're+Young.mp3",
        albumTitle: "Trip",
        trackLength: "3:56"
    },
    {
        title: "Moments",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/04+Moments+(feat.+Big+Sean).mp3",
        albumTitle: "Trip",
        trackLength: "2:59"
    },
    {
        title: "You Are Here",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/10+You+Are+Here.mp3",
        albumTitle: "Trip",
        trackLength: "3:39"
    },
    {
        title: "Nobody",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/12+Nobody.mp3",
        albumTitle: "Trip",
        trackLength: "4:16"
    },
    {
        title: "Sing To Me",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/19+Sing+to+Me+(feat.+Namiko+Love).mp3",
        albumTitle: "Trip",
        trackLength: "2:27"
    },
    {
        title: "Ascension",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/21+Ascension+(feat.+Brandy).mp3",
        albumTitle: "Trip",
        trackLength: "3:33"
    },
    {
        title: "Trip",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Jhene+Aiko/Trip/22+Trip+(feat.+Mali+Music).mp3",
        albumTitle: "Trip",
        trackLength: "3:36"
    },
    {
        title: "Homeless",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Paul+Simon/Graceland/12+Homeless+(Demo).flac",
        albumTitle: "Graceland",
        trackLength: "2:30"
    },
    {
        title: "All Around The World (Or the Myth of Fingerprints)",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Paul+Simon/Graceland/14+All+Around+The+World+Or+The+Myth+Of+Fingerprints+(Early+Version).flac",
        albumTitle: "Graceland",
        trackLength: "3:17"
    },
    {
        title: "Hard Headed Woman",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/%5B10%5D+Hard+headed+woman+-+Cat+Stevens.flac",
        albumTitle: "The Very Best of Cat Stevens",
        trackLength: "3:49"
    },
    {
        title: "Don\'t Be Shy",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/%5B13%5D+Don't+be+shy+-+Cat+Stevens.flac",
        albumTitle: "The Very Best of Cat Stevens",
        trackLength: "2:51"
    },
    {
        title: "(Remember the Days of the) Old School Yard",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/%5B17%5D+(Remember+the+days+of+the)+Old+school+yard+-+Cat+Stevens.flac",
        albumTitle: "The Very Best of Cat Stevens",
        trackLength: "2:43"
    },
    {
        title: "Where Do The Children Play",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/%5B18%5D+Where+do+the+children+play+-+Cat+Stevens.flac",
        albumTitle: "The Very Best of Cat Stevens",
        trackLength: "3:52"
    },
    {
        title: "Sad Lisa",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/%5B21%5D+Sad+lisa+-+Cat+Stevens.flac",
        albumTitle: "The Very Best of Cat Stevens",
        trackLength: "3:42"
    },
    {
        title: "Oh Very Young",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/%5B7%5D+Oh+very+young+-+Cat+Stevens.flac",
        albumTitle: "The Very Best of Cat Stevens",
        trackLength: "2:36"
    },
    {
        title: "Morning has Broken",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/%5B3%5D+Morning+has+broken+-+Cat+Stevens.flac",
        albumTitle: "The Very Best of Cat Stevens",
        trackLength: "3:20"
    },
    {
        title: "If You Want To Sing Out, Sing Out",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Cat+Stevens/The+Very+Best/%5B24%5D+If+you+want+to+sing+out%2C+sing+out+-+Cat+Stevens.flac",
        albumTitle: "The Very Best of Cat Stevens",
        trackLength: "2:46"
    },
    {
        title: "Avalanche",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Leonard+Cohen/Songs+of+Love+and+Hate/01)+Leonard+Cohen+-+Avalanche.mp3",
        albumTitle: "Songs of Love and Hate",
        trackLength: "5:06"
    },
    {
        title: "Last Year\'s Man",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Leonard+Cohen/Songs+of+Love+and+Hate/02)+Leonard+Cohen+-+Last+Year's+Man.mp3",
        albumTitle: "Songs of Love and Hate",
        trackLength: "6:02"
    },
    {
        title: "Dress Rehearsal Rag",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Leonard+Cohen/Songs+of+Love+and+Hate/03)+Leonard+Cohen+-+Dress+Rehearsal+Rag.mp3",
        albumTitle: "Songs of Love and Hate",
        trackLength: "6:12"
    },
    {
        title: "Famous Blue Raincoat",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Leonard+Cohen/Songs+of+Love+and+Hate/06)+Leonard+Cohen+-+Famous+Blue+Raincoat.mp3",
        albumTitle: "Songs of Love and Hate",
        trackLength: "5:15"
    },
    {
        title: "Sing Another Song Boys",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Leonard+Cohen/Songs+of+Love+and+Hate/07)+Leonard+Cohen+-+Sing+Another+Song%2C+Boys.mp3",
        albumTitle: "Songs of Love and Hate",
        trackLength: "6:17"
    },
    {
        title: "Joan of Arc",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Leonard+Cohen/Songs+of+Love+and+Hate/08)+Leonard+Cohen+-+Joan+Of+Arc.mp3",
        albumTitle: "Songs of Love and Hate",
        trackLength: "6:29"
    },
    {
        title: "From West Texas",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Explosions+in+the+Sky/Friday+Night+Lights/01+-+From+West+Texas.flac",
        albumTitle: "Friday Night Lights",
        trackLength: "2:41"
    },
    {
        title: "Your Hand in Mine",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Explosions+in+the+Sky/Friday+Night+Lights/02+-+Your+Hand+In+Mine+(w%2C+Strings).flac",
        albumTitle: "Friday Night Lights",
        trackLength: "4:08"
    },
    {
        title: 'Our Last Days As Children',
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Explosions+in+the+Sky/Friday+Night+Lights/03+-+Our+Last+Days+As+Children.flac",
        albumTitle: "Friday Night Lights",
        trackLength: "2:41"
    },
    {
        title: "An Ugly Fact of Life",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Explosions+in+the+Sky/Friday+Night+Lights/04+-+An+Ugly+Fact+of+Life.flac",
        albumTitle: "Friday Night Lights",
        trackLength: "2:55"
    },
    {
        title: "Home",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Explosions+in+the+Sky/Friday+Night+Lights/05+-+Home.flac",
        albumTitle: "Friday Night Lights",
        trackLength: "2:38"
    },
    {
        title: "Lonely Train",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Explosions+in+the+Sky/Friday+Night+Lights/11+-+Lonely+Train.flac",
        albumTitle: "Friday Night Lights",
        trackLength: "6:51"
    },
    {
        title: "A Slow Dance",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Explosions+in+the+Sky/Friday+Night+Lights/14+-+A+Slow+Dance.flac",
        albumTitle: "Friday Night Lights",
        trackLength: "3:53"
    },
    {
        title: "Drops",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mark+Eliyahu/mark-eliyahu-drops.mp3",
        albumTitle: "Roads",
        trackLength: "3:37"
    },
    {
        title: "Tribe",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mark+Eliyahu/mark-eliyahu-tribe.mp3",
        albumTitle: "Roads",
        trackLength: "3:34"
    },
    {
        title: "Nana",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mark+Eliyahu/mark-eliyahu-nana.mp3",
        albumTitle: "Roads",
        trackLength: "4:04"
    },
    {
        title: "Through Me",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mark+Eliyahu/mark-eliyahu-through-me.mp3",
        albumTitle: "Roads",
        trackLength: "3:09"
    },
    {
        title: "Temptation",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Mark+Eliyahu/mark-eliyahu-temptation.mp3",
        albumTitle: "Roads",
        trackLength: "3:13"
    },
    {
        title: "Don\'t Forget About Me",
        trackURL: "https://s3.us-east-2.amazonaws.com/mystify-images/Audio/Noname/noname-dont-forget-about-me.mp3",
        albumTitle: "Room 25",
        trackLength: "3:39"
    },

];

const saveTracks = async (album) => {
    for (let i = 0; i < tracks.length; i++) {
        try {
            const track = tracks[i];
            if (album.title == track.albumTitle) {
                track.album = album._id;
                track.artist = album.artist;
                const newTrack = new trackModel(track);
                const savedTrack = await newTrack.save();
            }
        }
        catch(e) {
            console.log(e);
        }
    }
}

const saveAlbums = async (artist) => {
    for (let i = 0; i < albums.length; i++) {
        try {
            const album = albums[i];
            if (artist.name == album.artist) {
                album.artist = artist._id;
                const newAlbum = new albumModel(album);
                const savedAlbum = await newAlbum.save();
                saveTracks(savedAlbum);
                // const savedAlbumDocument = albumModel.findById(savedAlbum._id);
                // const populatedAlbum = await savedAlbumDocument.populate('artist').exec((err, albm) => console.log(albm.artist));
                // console.log(populatedAlbum.artist.name);
            }
        }
        catch(e) {
            console.log(e);
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
}

saveArtists();

//close the database after 3000 ms
// a hack to make sure everything seeds correctly
setTimeout(() => mongoose.connection.close(), 4000);




