const programs = [
  {
    name: 'Talks',
    imageUrl: './assets/img/speaker-icon.png',
    imageAlt: 'Speak_icon',
    text: "Listen to speakers who are Africa's Top Women in Technology from various countries."
  },
  {
    name: 'Labs',
    imageUrl: './assets/img/board-icon.png',
    imageAlt: 'Board_icon',
    text: 'Appreciate hands on implimentaion of recent technologies like VR, Metaverse, AI, IOT and ML'
  },

  {
    name: 'Panel Time',
    imageUrl: './assets/img/message-icon.png',
    imageAlt: 'Board_icon',
    text: 'Open discussions about topics that matter most to Women through their development journey. Some myths, difficulties and how to overcome them'
  },

  {
    name: 'Starters pitch',
    imageUrl: './assets/img/write-icon.png',
    imageAlt: 'Board_icon',
    text: 'Participants get 10mins to pitch projects and share their brilliant startup ideas. Winners of the starter pitch get award a startup package at the end of the conference.'
  },

  {
    name: 'Network',
    imageUrl: './assets/img/setting-icon.png',
    imageAlt: 'Board_icon',
    text: 'Get opportunities to network with other developers from around the globe.'
  }
];

const speakers = [
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/Rebecca-Enonchong-780x780.jpg',
    header: 'Rebecca-Enonchong',
    qoute: 'Founder and Chief Executive Officer of AppsTech, a leading global provider of enterprise application solutions.',
    text: 'The main obstacle to the digital revolution in Africa is the reluctance of political leaders'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/estelle.jpeg',
    header: 'Estelle Yomba',
    qoute: 'Social Entrepreneur with an unquenchable passion for quality Education.',
    text: 'African Top entrepreneurs have the responsibilty to transfer professional know how by identifying, showcasing and moulding young African innovators ready to break records in transforming our rich continent'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/Faith.webp',
    header: 'Mpara Faith',
    qoute: 'Mpara Faith is the co-founder and Operations manager of New Generation Technologies (NGT), ',
    text: 'I am a Product Manager that enjoys empowering students with delightful and consistent learning experiences.'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/jihu.jpeg',
    header: 'Jihan Abass',
    qoute: 'Founder and CEO of Lami,  an insurance as a service platform that aims to increase insurance penetration across Africa.',
    text: 'For us it is really exciting to be able to get insurance companies to start looking at things in a different way, and also to provide [end customers] with products without any friction whatsoever in the process'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/mihan.jpeg',
    header: 'Miishe Addy',
    qoute: ' co-founder and CEO of Jetstream Africa, a technology-enabled logistics company focusing on cross-border trade in Ghana.',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum laboriosam exercitationem dolorem cupiditate voluptate'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/user.jpg',
    header: 'Sirri Celles',
    qoute: 'Aspiring Fullstack developer.',
    text: 'The purpose of our lives is to be happy. As developers apprecaite every step of the journey because you make lot of people happy.'
  }
];

let programWrapper = document.querySelector('.items-wrapper');

let speakerWrapper = document.querySelector('.speakers-wrapper');
let count = speakers.length;

window.onload = (event) => {
  programs.forEach(program => {
    let item = document.createElement('div');
    item.className = "program__items";
    const programItem = `<div class="program__item-icon">
      <img src="${program.imageUrl}" alt="${program.imageAlt}">
    </div>
    <div class="program__item-header">
    ${program.name}
    </div>
    <div class="program__item-text">
    ${program.text}
    </div>`

    item.innerHTML = programItem;
  programWrapper.appendChild(item);
  });

  if(screen.width < 768) {
    count = 2;
  }

  for(let i=0; i < count; i++) {
    let item = document.createElement('div');
    item.className = "speaker__wrapper";
    const newSpeaker = `<div class="speaker__image">
    <img src="${speakers[i].imageIcon}" alt="Chess icon" class="speaker__image-icon">
      <img src="${speakers[i].imageUser}" alt="speaker" class="speaker__image-user">
    </div>
    <div class="speaker__wrapper-text">
      <h2 class="speaker__text-header">
        ${speakers[i].header}
      </h2>
      <p class="speaker__text-qoute">${speakers[i].qoute}</p>
      <hr>
      <p class="speaker__text">
        ${speakers[i].text}
      </p>
    </div>`;

    item.innerHTML = newSpeaker;
    speakerWrapper.appendChild(item);
  }
}

