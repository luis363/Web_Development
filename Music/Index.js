var Flooded_The_Face = "https://audmak.icu/wp-content/uploads/2023/06/01.%20Flooded%20The%20Face%20-%20%28Hiphopde.com%29.mp3",
    Suicide_Doors = "https://audmak.icu/wp-content/uploads/2023/06/02.%20Suicide%20Doors%20-%20%28Hiphopde.com%29.mp3",
    Aye = "https://audmak.icu/wp-content/uploads/2023/06/03.%20Aye%20%28feat.%20Travis%20Scott%29%20-%20%28Hiphopde.com%29.mp3",
    Crush_Em = "https://audmak.icu/wp-content/uploads/2023/06/04.%20Crush%20Em%20-%20%28Hiphopde.com%29.mp3",
    Amped = "https://audmak.icu/wp-content/uploads/2023/06/05.%20Amped%20-%20%28Hiphopde.com%29.mp3",
    x2 = "https://audmak.icu/wp-content/uploads/2023/06/06.%20x2%20-%20%28Hiphopde.com%29.mp3",
    Died_and_Came_Back = "https://audmak.icu/wp-content/uploads/2023/06/07.%20Died%20and%20Came%20Back%20-%20%28Hiphopde.com%29.mp3",
    Spin_Again = "https://audmak.icu/wp-content/uploads/2023/06/08.%20Spin%20Again%20-%20%28Hiphopde.com%29.mp3",
    That_Fiya = "https://audmak.icu/wp-content/uploads/2023/06/09.%20That%20Fiya%20-%20%28Hiphopde.com%29.mp3",
    I_Gotta_Mp3 = "https://audmak.icu/wp-content/uploads/2023/06/10.%20I%20Gotta%20-%20%28Hiphopde.com%29.mp3",
    Mama_Im_SorryMama_Im_Sorry = "https://audmak.icu/wp-content/uploads/2023/06/12.%20Mama%2C%20I%D1%82%D0%90%D0%A9m%20Sorry%20-%20%28Hiphopde.com%29.mp3",
    Endless_Fashion = "https://audmak.icu/wp-content/uploads/2023/06/11.%20Endless%20Fashion%20%28feat.%20Nicki%20Minaj%29%20-%20%28Hiphopde.com%29.mp3",
    Fire_Alarm = "https://audmak.icu/wp-content/uploads/2023/06/16.%20Fire%20Alarm%20-%20%28Hiphopde.com%29.mp3",
    Nakamura = "https://audmak.icu/wp-content/uploads/2023/06/14.%20Nakamura%20-%20%28Hiphopde.com%29.mp3",
    All_Alone = "https://audmak.icu/wp-content/uploads/2023/06/13.%20All%20Alone%20-%20%28Hiphopde.com%29.mp3",
    Pluto_to_Mars = "https://audmak.icu/wp-content/uploads/2023/06/19.%20Pluto%20to%20Mars%20-%20%28Hiphopde.com%29.mp3",
    Werewolf = "https://audmak.icu/wp-content/uploads/2023/06/18.%20Werewolf%20%28feat.%20Bring%20Me%20The%20Horizon%29%20-%20%28Hiphopde.com%29.mp3",
    CS = "https://audmak.icu/wp-content/uploads/2023/06/17.%20CS%20-%20%28Hiphopde.com%29.mp3",
    The_End = "https://audmak.icu/wp-content/uploads/2023/06/23.%20The%20End%20%28feat.%20BABYMETAL%29%20-%20%28Hiphopde.com%29.mp3",
    Rehab = "https://audmak.icu/wp-content/uploads/2023/06/22.%20Rehab%20-%20%28Hiphopde.com%29.mp3",
    Patience = "https://audmak.icu/wp-content/uploads/2023/06/20.%20Patience%20%28feat.%20Don%20Toliver%29%20-%20%28Hiphopde.com%29.mp3",
    Of_Course = "https://audmak.icu/wp-content/uploads/2023/06/25.%20Of%20Course%20%28Bonus%20Track%29%20-%20%28Hiphopde.com%29.mp3",
    Zoom = "https://audmak.icu/wp-content/uploads/2023/06/24.%20Zoom%20%28Bonus%20Track%29%20-%20%28Hiphopde.com%29.mp3";

var index = 0;
var songs = [The_End,CS,Werewolf,Flooded_The_Face,Suicide_Doors,
            Aye,Crush_Em,Amped,x2,Died_and_Came_Back,Spin_Again,
            That_Fiya,I_Gotta_Mp3,Mama_Im_SorryMama_Im_Sorry,
            Endless_Fashion, Fire_Alarm,Nakamura,All_Alone,
            Pluto_to_Mars,Rehab,Patience,Of_Course,Zoom];
const audio = new Audio(songs[index]);

function PLAY() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
    console.log(index);
}

function PAUSE() {
    audio.pause();
}

function NEXT() {
    index++;
    audio.src = songs[index];
    audio.load();
    audio.play();
    console.log(index);
}

function PREVIOUS() {
    index --;
    audio.src = songs[index];
    audio.load();
    audio.play();
    console.log(index);
}