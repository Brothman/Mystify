import artistModel from '../resources/artists/artistModel';
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
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
    {
        name: "Paul Simon",
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
    {
        name: "Kanye West",
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
    {
        name: "Explosions in the Sky",
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
    {
        name: "Noname",
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
    {
        name: "Mozart",
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
    {
        name: "Mark Eliyahu",
        bio: "Leonard Cohen was a Canadian singer-songwriter, poet and novelist. His work explored religion, politics, isolation, sexuality and romantic relationships.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
    {
        name: "Benji Rothman",
        bio: "An up and coming artist from New York City, Benji's music displays the rough and unpolished edges of a future music visionary.",
        imageUrl: "https://s3.us-east-2.amazonaws.com/mystify-images/LeonardCohen.jpg",
    },
];

const saveArtists = async () => {
    for (const artist of artists) {
        const newArtist = new artistModel(artist);
        try {
         await newArtist.save();
        }
        catch(e) {
            console.log(e);
        }
    }
    mongoose.connection.close();
}

saveArtists();
