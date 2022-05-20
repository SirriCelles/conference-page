const speakers = [
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/Rebecca-Enonchong-780x780.jpg',
    header: 'Rebecca-Enonchong',
    qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum laboriosam exercitationem dolorem cupiditate voluptate'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/estelle.jpeg',
    header: 'Estelle Youmba',
    qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum laboriosam exercitationem dolorem cupiditate voluptate'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/Faith.webp',
    header: 'Mpara Faith',
    qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum laboriosam exercitationem dolorem cupiditate voluptate'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/jihu.jpeg',
    header: 'Rebecca-Enonchong',
    qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum laboriosam exercitationem dolorem cupiditate voluptate'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/mihan.jpeg',
    header: 'Rebecca-Enonchong',
    qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum laboriosam exercitationem dolorem cupiditate voluptate'
  },
  {
    imageIcon: './assets/img/chess.jpg',
    imageUser: './assets/img/user.jpg',
    header: 'Rebecca-Enonchong',
    qoute: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore?',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum laboriosam exercitationem dolorem cupiditate voluptate'
  }
];

let speakerWrapper = document.querySelector('.speakers-wrapper');
let count = speakers.length;

window.onload = (event) => {
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