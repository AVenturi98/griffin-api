//imgs
import peterGriffin from './assets/imgs/peterGriffin.jpg'
import loisGriffin from './assets/imgs/loisGriffin.jpg'
import stewieGriffin from './assets/imgs/stewieGriffin.jpg'
import megGriffin from './assets/imgs/megGriffin.jpg'
import chrisGriffin from './assets/imgs/chrisGriffin.avif'
import brainGriffin from './assets/imgs/brainGriffin.jpg'
import quagmire from './assets/imgs/quagmire.webp'
import clevelandBrown from './assets/imgs/clevelandBrown.webp'
import herbert from './assets/imgs/herbertH.jpg'
import joe from './assets/imgs/joe.jpg'
import carter from "./assets/imgs/carter.jpg"
import hartman from "./assets/imgs/hartman.jpg"
import mort from "./assets/imgs/mort.jpg"
import tucker from "./assets/imgs/tucker.jpg"
import west from "./assets/imgs/west.jpg"
import chicken from "./assets/imgs/chicken.jpg"
//videos-ita
import video from "./assets/videos/video.mp4"
import videoPeter from "./assets/videos/videoPeter.mp4"
import videoStewie from "./assets/videos/videoStewie.mp4"
import videoQuagmire from "./assets/videos/videoQuagmire.mp4"
import videoJoe from "./assets/videos/videoJoe.mp4"
import videoLois from "./assets/videos/videoLois.mp4"
import videoMeg from "./assets/videos/videoMeg.mp4"
import videoCleveland from "./assets/videos/videoCleveland.mp4"
import videoHerbert from "./assets/videos/videoHerbert.mp4"
import videoBrain from "./assets/videos/videoBrain.mp4"
import videoChris from "./assets/videos/videoChris.mp4"
import videoCarter from "./assets/videos/videoCarter.mp4"
import videoMort from "./assets/videos/videoMort.mp4"
import videoTucker from "./assets/videos/videoTucker.mp4"
import videoWest from "./assets/videos/videoWest.mp4"
import videoHartman from "./assets/videos/videoHartman.mp4"
import videoPolloG from "./assets/videos/videoPolloG.mp4"
//videos-eng
import videoEngMeg from "./assets/videos/videos-eng/video-eng-Meg.mp4"

export const persons = [
    {
        id: 1,
        person: 'Peter Griffin',
        image: peterGriffin,
        quote: '"Shut up Meg."',
        quoteITA: '"Stai zitta Meg."',
        video: videoPeter,
        videoEng: undefined
    },
    {
        id: 2,
        person: 'Stewie Griffin',
        image: stewieGriffin,
        quote: '“Aw youre crazy bitch I didnt say that bitch”',
        quoteITA: `"Oh, sei una pazza stronza, non l'ho detto io, stronza"`,
        video: videoStewie,
        videoEng: undefined
    },
    {
        id: 3,
        person: 'Lois Griffin',
        image: loisGriffin,
        quote: '“Yes, Tina Fey, you’re better than Jesus.”',
        quoteITA: '"Sì, Tina Fey, sei meglio di Gesù."',
        video: videoLois,
        videoEng: undefined
    },
    {
        id: 4,
        person: 'Meg Griffin',
        image: megGriffin,
        quote: '“You can’t sell me, you fat son of a bitch!”',
        quoteITA: `Non puoi vendermi, grasso figlio di puttana!`,
        video: videoMeg,
        videoEng: videoEngMeg
    },
    {
        id: 5,
        person: 'Chris Griffin',
        image: chrisGriffin,
        quote: '“I don’t have to listen to you, you’re a dog, you don’t have a soul!”',
        quoteITA: `"Non devo ascoltarti, sei un cane, non hai un'anima!"`,
        video: videoChris,
        videoEng: undefined
    },
    {
        id: 6,
        person: 'Brian Griffin',
        image: brainGriffin,
        quote: '“Hey, how about a little less questions and a little more shut the hell up?”',
        quoteITA: `"Ehi, che ne dici di fare un po' meno domande e di stare un po' più zitto?"`,
        video: undefined,
        videoEng: videoBrain
    },
    {
        id: 7,
        person: 'Glen Quagmire',
        image: quagmire,
        quote: '"Giggity giggity giggity"',
        quoteITA: '"Giggity giggity giggity"',
        video: videoQuagmire,
        videoEng: undefined
    },
    {
        id: 8,
        person: "Cleveland Brown",
        image: clevelandBrown,
        quote: `"Hey guys, there's nothing I can't fix with a little love and a couple of burgers."`,
        quoteITA: `"Ehi ragazzi, non c'è niente che non possa risolvere con un po' di amore e un paio di hamburger."`,
        video: videoCleveland,
        videoEng: undefined
    },
    {
        id: 9,
        person: "Joe Swanson",
        image: joe,
        quote: '"I never stop! Nothing stops me! Except my wheelchair."',
        quoteITA: '"Non mi fermo mai! Niente mi ferma! Tranne la mia sedia a rotelle."',
        video: videoJoe,
        videoEng: undefined
    },
    {
        id: 10,
        person: 'The Giant Chicken',
        image: chicken,
        quote: '',
        quoteITA: '',
        video: videoPolloG,
        videoEng: undefined
    },
    {
        id: 11,
        person: "Herbert",
        image: herbert,
        quote: `"Hey, kiddo, how about some candy...and maybe some company?"`,
        quoteITA: `"Ehi, piccolo, che ne dici di qualche caramella... e magari un po' di compagnia?"`,
        video: videoHerbert,
        videoEng: undefined
    },
    {
        id: 12,
        person: "Carter Pewterschmidt",
        image: carter,
        quote: '"I do it because I can!"',
        quoteITA: '"Lo faccio perché posso!"',
        video: videoCarter,
        videoEng: undefined
    },
    {
        id: 13,
        person: "Mort Goldman",
        image: mort,
        quote: `"Oh no! I can't believe this is happening!"`,
        quoteITA: '"Oh no! Non posso credere che stia succedendo!"',
        video: videoMort,
        videoEng: undefined
    },
    {
        id: 14,
        person: "Tom Tucker",
        image: tucker,
        quote: `"I'm too young to be involved in this stuff!"`,
        quoteITA: '"Sono troppo giovane per essere coinvolto in queste cose!"',
        video: videoTucker,
        videoEng: undefined
    },
    {
        id: 15,
        person: "Mayor West",
        image: west,
        quote: '"I like it when things go according to my plans."',
        quoteITA: '"Mi piace quando le cose vanno secondo i miei piani."',
        video: videoWest,
        videoEng: undefined
    },
    {
        id: 16,
        person: "Dr. Hartman",
        image: hartman,
        quote: `"Alright, Peter, it's nothing serious, but let's try to be careful."`,
        quoteITA: '"Va bene, Peter, non è niente di grave, ma cerchiamo di stare attenti."',
        video: videoHartman,
        videoEng: undefined
    }
]


