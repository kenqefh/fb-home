import { contacts } from "./DataContacts";

const getRandom = (max) => Math.floor(Math.random() * Math.floor(max))
const messages = [
    "Y es que al final de nuestras vidas, no importa cuantos años vivimos, sino en cuantos nos sentimos vivos.",
    "Piensa menos y haz mas, porque la vida hay que hacerla, no pensarla.",
    "Vive cada momento lleno de felicidad, como si este fuera a ser el ultimo que tienes.",
    "La primera vez que intentamos algo parece imposible de lograr, pero con dedicación y pasión logramos que vuelva posible.",
    "No vivas en el pasado, porque tu presente es mucho mejor.",
    "Recuerda que si hoy esta lloviendo, eso no define si tu día sera malo o bueno, quien lo define eres tu mismo.",
    "Cada que cierro los ojos, te siento tan cerca, pues tu recuerdo que tengo en mi mente, me hace feliz.",
    "Si el cielo esta nublado, ten la esperanza que detrás de las nubes el sol esta brillando.",
    "Olvida los malos momentos de tu pasado, que no te permiten vivir en el presente.",
    "Si decides algo que sea con todo tu corazón y tu mente.",
    "En la desesperación recuerda que la esperanza puede iluminarte.",
    "Mi amor, tu siempre estarás en mi corazón, pues contigo aprendí lo que era amar.",
    "Resiste, persiste, estas tan cerca de lograr algo increíble, mantente en el camino.",
    "Un sueño que persiste en tu mente, te elevara a las mas altas montañas.",
    "Me encanta tenerte junto a mi, pero lo que mas me gustaría es vivir a tu lado.",
    "Puedes estar conmigo, pues contigo encontré un lugar al que me siento atraído.",
    "Al mirarte trato de ver tus hermosos ojos pero suelo terminar perdido en la belleza de tu mirada.",
    "Hagamos lo que nos dicta el corazón, para poder amar mas y preocuparnos menos.",
    "Si logras ver e imaginar tu objetivo, ten la seguridad de que lo logras.",
    "En nuestra vida existe, amor en nuestros corazones, capaz de impulsarnos a ayudar mas allá de lo que vemos.",
    "El corazón se nutre de palabras y actos sinceros.",
    "Tomar el riesgo de ir por caminos desconocidos, puede ser muy preocupante, pero el hacerlo te hará sentir satisfecho.",
    "Cuando crees que todo esta perdido, los milagros suceden.",
    "Si guardamos en nuestra mente el recuerdo de aquellos que abandonaron este mundo, ellos seguirán vivos, dentro de nosotros, a través de cada acción que hagamos.",
    "No sé que nos depara el camino, solo se que si estoy junto, lucharemos, nos esforzaremos, juntos.",
    "La vida resuena en mi como la música, llena de tranquilidad y momentos en los que me pongo a bailar.",
    "Tienes que seguir hacia adelante, confiando en que tarde o temprano, tus esfuerzos darán frutos.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

const gen_publications = (num = 3) => {
    let data = [];
    let num_contacts = contacts.length
    let num_messages = messages.length
    //contacts
    while (data.length <= num) {
        let { name, profile, story: photo } = contacts[getRandom(num_contacts)]
        let ago = getRandom(48)
        let message = messages[getRandom(num_messages)]

        data.push({
            name,
            profile,
            ago,
            message,
            photo,
            key: data.length + Date.now()
        })
    }
    return data;
}

export {
    gen_publications
}
