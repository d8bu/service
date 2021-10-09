const start = Date.now();

const p = document.getElementsByTagName('p');

// now
let now = new Date();
// console.log(`start ${now.getHours()}:${now.getMinutes()}`);
p[0].textContent = `start ${now.getHours()}:${now.getMinutes()}`;

class AurovineService {

    constructor () {
        this._apiBase = 'https://api.aurovine.com/users';
    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
            
        return await res.json();
    }

    getStatus(artist_id, song_id, user_id) {
        return this.getResource(`/share_reward?artist_id=${artist_id}&song_id=${song_id}&user_id=${user_id}`);
        }
    }

const aurovine = new AurovineService();

Array.prototype.randomItem = function() {
    return this[Math.floor(Math.random()*this.length)];
  }
  
  const myUserId = [
      '14605',
      '14606',
      '14619',
      '14621',
      '14623',
      '14624',
      '14625',
      '14646',
      '14648',
      '14649',
      '14674',
      '14731',
      '14732',
      '14733',
      '14736'
  ];

const myRandomUserId = myUserId.randomItem();

aurovine.getStatus(1847, 11036, myRandomUserId)
    .then(res => console.log(res));

setTimeout(function(){
    window.location.hash = myRandomUserId;
    window.location.reload();

    // timer
    let end = Date.now() - start;
    console.log(`last time: ${Math.floor(end / 1000)} seconds`);

    // timeout max - min
    }, Math.floor(Math.random() * (860000 - 242000)) + 242000);