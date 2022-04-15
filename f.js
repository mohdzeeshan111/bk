document.getElementById("music").style.display = "none";
var alarmaudio = document.getElementById("music");
var voiceMessage = document.getElementById("voicemessage");
window.onload = voiceMessage.play();

var i = 0;

var txt1 = ["Happy birthday BUSHRA,Allah SWT hamesha apku khush rake, kamiyab banaye,dilse mutmyeen rake. Always keep smiling,your smile is priceless i can do anything for that.",
    " ",
    "Hey BUSHRA,this is for you and only you and I mean it from bottom of my heart.",
    "You already know how much you mean to me. I always thank Allah SWT for sending you in my life. Thanks for coming in my life and making me realise that i too have a heart which loves someone and needs love. You understood me when no one did. You are the best thing happened to me after my parents. Because of you i have found the best version of me. From being careless to being mature, from never listening to anyone to listening to you,from rude to lovable. Always thought money is everything to live in this world but when I met you I cam to know it's not money it's memories with loved ones you can't live happy life with even billion dollars but you can live satisfied life with that one memory of your loved ones. A big big big thanks to you from bottom of my heart for proving me wrong and showing this beautiful view of life. I don't know you will be my best half or not but you are definitely my best person of my life in this world. Ik we fight alot may be cause of understanding but every fight we come back we don't take it to ego or something else isn't it enough to be with someone whole life.When I think about you I become Powerful, become strong, become a man with superpower and my super power is my love for you. I love you cause tum mujhe samjte when no one else did. I was living in the world where I strongly believed love is just in movies it's not real but again thanks for proving me wrong again. Ik we don't have any good memories to remember but looking forward to make infinite memories with you. YOu should know one thing that is we are far away from eachother but no matter what I will be a call away, ek awaz dur hun bus. 'TUM MUJHSE DUR HO MERE DIL SE NAHI.' 'RASTA LAMBA HAI NIYYAT NAHI.'  lots  of  love to you❤️, meri dil se yehi dua hai ke tum dil se khush aur mutmaeen raho ameen🤲❤️🌎💫 ",
    ""
];



var speed = 50;
function typeWriter(val) {

    const textData = txt1[val];
    if (i < textData.length) 
    {
        // console.log(textData.length);

        document.getElementById("demo").innerHTML += textData.charAt(i);
        i++;
        setTimeout(() => {

            typeWriter(val);
       }, speed);
    }
    else
     {
              setTimeout(() =>{
                i = 0;
                document.getElementById("demo").innerHTML += " <br> ";
                val++;
                typeWriter(val);
              },speed);
          }
    }

    document.getElementById("clickme").onclick = function(){
        alarmaudio.currentTime = 15;
        alarmaudio.play();
        typeWriter(0);
        document.getElementById("clickme").style.display ="none";
        document.getElementById("demo").style.marginTop= "-50px";
        document.getElementsByTagName("h3")
        document.getElementById("headingtext").innerText = "Happiest Birthday BUSHRA KHAN ❤️🌎💫";
        setInterval(function(){
            document.getElementById("thank-you").style.display="block";
            alarmaudio.pause();
        },123300);
    }