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

let programWrapper = document.querySelector('.items-wrapper');

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
}