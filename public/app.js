function createKeyboard() {
    const keyboard = document.getElementById('keyboard');
    const keys = [
      ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
      ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
      ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
      ['ShiftLeft', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ShiftRight'],
      ['ControlLeft', 'Win', 'Alt', '', 'Alt', 'Fn', 'ControlRight']
    ];
  
    keys.forEach(row => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
  
      row.forEach(key => {
        const keyElement = document.createElement('div');
        keyElement.classList.add('key');
        if (key === '') {
          keyElement.textContent = ' ';
          keyElement.classList.add('Space');
        } else if (key==('ControlLeft')) {
          keyElement.classList.add('Control');
          keyElement.textContent = 'Ctrl';
        } else if (key==('ControlRight')) {
          keyElement.classList.add('Control');
          keyElement.textContent = 'Ctrl';
        }
         else if (key === 'Backspace') {
          keyElement.classList.add('Backspace');
          keyElement.textContent = key;
        } else if (key==('ShiftRight')) {
          keyElement.classList.add('Shift');
          keyElement.textContent = 'Shift';
          keyElement.id=key;
          
        } else if (key==('ShiftLeft')) {
          keyElement.classList.add('Shift');
          keyElement.textContent = "Shift"; 
          keyElement.id='ShiftLeft';
          
        } else if (key === 'Tab') {
          keyElement.classList.add('Tab');
          keyElement.textContent = key;
        } else if (key === 'CapsLock') {
          keyElement.classList.add('Capslock');
          keyElement.textContent = key;
          
        } else if (key === 'Enter') {
          keyElement.classList.add('enter-key');
          keyElement.textContent = key;
        } else if (/[a-zA-Z]/.test(key) && key.length==1) {
          // keyElement.style.backgroundColor='red';
          keyElement.classList.add('changeoncapshit');
          keyElement.classList.add('changeonshifthit');
          keyElement.textContent = key.toUpperCase();
        }else if(/[!@#$%^&*()\-=_+[\]{};':"\\|,.<>/?~`0-9]/.test(key) && key.length==1 ){
          // keyElement.style.backgroundColor='yellow';
          keyElement.classList.add('changeonshifthit');
          keyElement.textContent = key;
        }
      
  
        keyElement.addEventListener('mousedown', async() => {
          keyElement.classList.add('active');
        });
  
        keyElement.addEventListener('mouseup', async() => {
          keyElement.classList.remove('active');
        });
  
        rowElement.appendChild(keyElement);
      });
      // setTimeout(4400);
      keyboard.appendChild(rowElement);
    });

  }

  function rendertxt(t){
    document.getElementById('txt').innerHTML='';
    for(var i=0;i<t.length;i++){
      var s=document.createElement('span');
      s.id='t'+i;
      s.textContent=t[i];
      s.classList.add('word-txt');
      s.tabIndex=-1;
      document.getElementById('txt').appendChild(s);
    }
  }
 
  var speed=0;
  var accuracy=0;
  var cpslock=true;
  var shift=false;
  var p=0;
  var time=1;
  var intid=0;
  var rgblevel=2;
  var rgbon=true;
  var txt="";
  var currtheme=0;

  const theme = {
    '--kb':       ['#050505'  , '#fff', '#26262a', '#272728', '#CDB4DB', '#bb73e4', '#000000', '#0ad000', '#000003'],
    '--keybg':    ['#13131247', '#131312', '#000000', '#000000', '#FFC8DD', '#bcbbbc', '#000000', '#000fff', '#e0e0e0'],
    '--keyc':     ['#ffffff'  , '#ffffff', '#ffffff', '#ececf6', '#2805db', '#0c0c0e', '#ff0000', '#ffddff', '#111dff'],
    '--keyactbg': ['#62dcb147', '#62dcb147', '#000000', '#292224', '#FFAFCC', '#292224', '#1a237e', '#303f9f', '#000'],
    '--navbg':    ['#b35bee'  , '#b35bee', '#250404', '#250404', '#b35beea3', '#050505', '#1976d2', '#3f51b5', '#1e88e5'],
    '--txtbg':    ['#141414'  , '#141414', '#3c393e', '#BDE0FE', '#BDE0FE', '#BDE0FE', '#e0e0e0', '#f5f5f5', '#fafafa'],
    '--btnb':     ['#251d2d'  , '#251d2d', '#272828', '#171819', '#87929a', '#171819', '#00897b', '#ddff88', '#43a047'],
    '--curc':     ['#20c614dd', '#20c614dd', '#1c6aaa', '#1c6aaa', '#A2D2FF', '#1c6aaa', '#ffeb3b', '#ffcfff', '#ff9'],
    '--txtcolor': ['#b4c888'  , '#b4c888', '#e8f3f0', '#2a2424', '#333333', '#977e7e', '#001000', '#055060', '#001122'],
    // Add more CSS variables and their values as arrays as needed
  };
  

  var curword='';
  var t="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis praesentium qui dignissimos commodi nulla maiores at. Nulla illo asperiores a enim aperiam iure itaque ipsa, eos accusamus quas, debitis quaerat ipsam aliquid dolorum odit impedit necessitatibus quae explicabo dignissimos quibusdam. Dolore eaque expedita ipsa impedit! Quae labore magni nam at! Consequatur, sit quia asperiores sapiente delectus, cupiditate unde consectetur a, minus quisquam nesciunt praesentium molestiae. Nesciunt itaque, ullam deserunt numquam rem placeat ut. A veniam eligendi quidem? Quam ipsam quisquam, et quia deleniti quod asperiores. Laudantium illum qui nobis fugiat dolorum quod asperiores, iste accusantium, rem aspernatur explicabo architecto. A optio expedita totam perferendis atque numquam unde cupiditate excepturi ab alias dignissimos quia dolor natus, delectus laudantium tempora labore iusto. Nobis molestias cumque assumenda dignissimos neque ipsa deserunt in, natus delectus tempora similique, ducimus veniam minima earum eaque accusamus voluptate rerum, error corrupti repellendus officiis iusto esse voluptatum. Rerum saepe inventore provident maxime accusantium repellat facere. Provident aspernatur iure repellat tempore perferendis modi error deserunt doloremque nihil, assumenda illo facere laboriosam adipisci vitae. Aperiam asperiores nulla ut dolore cum rerum qui eveniet. Tempore facilis est ipsum aut. Odio, unde, obcaecati maxime laborum sapiente eligendi quae magni perspiciatis nisi, eaque recusandae?".split(" ");//;

  function generateRandomWords(numWords, minWordLength, maxWordLength) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=[]{};:,.<>?/\\|~`';
    const words = [];
  
    for (let i = 0; i < numWords; i++) {
      const wordLength = Math.floor(Math.random() * (maxWordLength - minWordLength + 1)) + minWordLength;
      let word = '';
      for (let j = 0; j < wordLength; j++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        word += chars.charAt(randomIndex);
      }
      words.push(word);
    }
  
    return words;
  }

  async function fetchHipsterText(paragraphs) {
    const response = await fetch(`https://hipsum.co/api/?paras=${paragraphs}&type=hipster-centric`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const text = await response.json();
    // alert(text);
    return text;
  }
  
  // // Example usage
  // const randomWords = generateRandomWords(10, 5, 10); // Generate 10 words with lengths between 5 and 
  

function toggleShiftCharacter(char) {
  const mapping = {'!': '1','1': '!','@': '2','2': '@','#': '3','3': '#',
    '$': '4','4': '$','%': '5','5': '%','^': '6','6': '^','&': '7',
    '7': '&','*': '8','8': '*','(': '9','9': '(',')': '0','0': ')',
    '_': '-','-': '_','+': '=','=': '+','{': '[','[': '{','}': ']',
    ']': '}',':': ';',';': ':','"': '\'','\'': '"','|': '\\','\\': '|',
    '<': ',',',': '<','>': '.','.': '>','?': '/','/': '?',
  };

  const toggledChar = mapping[char] || char;
  return toggledChar;
}
function toggleAlphabetCharacter(char) {
  const isUppercase = /[A-Z]/.test(char); // Check if the character is uppercase
  const toggledChar = isUppercase ? char.toLowerCase() : char.toUpperCase(); // Toggle the case of the character
  return toggledChar;
}

//show msg on theme change and the
function showntf(p){
  var q= document.getElementById('msg');
 q.className=('showmsg');
  q.innerHTML=p;
  setTimeout(() => {
    q.className=('hidemsg');
    q.innerHTML="";
  
  }, 1000);

}


// changeTheme();
function changeTheme(){
  let a=  Object.keys(theme);
  currtheme++;
  if(currtheme>theme[a[0]].length - 1){
    currtheme=0;
  }

  a.forEach((key) => {
    const value = theme[key][currtheme];
    console.log(key,value);

    document.documentElement.style.setProperty(key, value);
  });
  console.log(currtheme);
  showntf("Theme Changed:"+currtheme);
}

function setRGB(v){

  if(v){
    if(rgbon){
      return;
    }
    rgblevel=1;
    rgbon=true;
    increaseRGBlevel();
    return;
  }
  rgblevel=2;
  increaseRGBlevel();
  rgbon=false;
}

function increaseRGBlevel(){
  if(rgbon){
    showntf("RGB level Changed:"+(rgblevel==2?0:rgblevel+1));
  }
 
  if(!rgbon){
    showntf("Turn on the RGB from Setting");
    return;
  }  
  if(rgblevel>=2){
    rgblevel=0;

    var a=Array.from(document.getElementsByClassName('key')).forEach((x)=>{
      x.style.animationName='none';
    })
    var a=Array.from(document.getElementsByClassName('row')).forEach((x)=>{
      x.style.animationName='none';
    })

  }else{
    rgblevel++;
    if(rgblevel==1){
      var a=Array.from(document.getElementsByClassName('key')).forEach((x)=>{
        x.style.animationName='keyanim';
      })
    }else if(rgblevel==2){
      var a=Array.from(document.getElementsByClassName('key'));
      var b=Array.from(document.getElementsByClassName('row'));
      a.forEach((x)=>{
        x.style.animationName='keyanim';
      })
      
      b.forEach((x)=>{
        x.style.animationName='kbplate';
      })
    }

  }
  
  
}
  


function changergb(event){
 
    if(event.ctrlKey==true){
      if(event.key=="Shift"){
      // 'use strict'
      increaseRGBlevel();
      }
      if(event.key=='b' || event.key=='B'){
        changeTheme();
      }
    }

}
function focusoncurrent(){
  if(p!=0){
    document.getElementById('txt').children[p-1].classList.remove('current-word');
  }

  var e=document.getElementById('txt').children[p];
  console.log(e);
  e.scrollIntoView({ behavior: 'smooth' });
  e.classList.add('current-word');

}
  
function resetRGBspeed(){
  var tem=document.getElementById('i');
  tem.value=55;
  changeRGBspeed(tem);
}
function changeRGBspeed(n){
  var e=11-(n.value/10);
  console.log(e);
  var a=Array.from(document.getElementsByClassName('key'));
  var b=Array.from(document.getElementsByClassName('row'));
  a.forEach((x)=>{
    x.style.animationDuration=e+'s';
  })
  
  b.forEach((x)=>{
    x.style.animationDuration=e+'s';
  })
  document.getElementById('mpos').style.animationDuration=e+'s';


  console.log(e);
}
  function keydown(event)  {
    if(event.key==' '){
      event.preventDefault();
      
      if(p<=txt.length-1){
        console.log(curword+":"+txt[p]);
        if(curword==txt[p]){
          document.getElementById('t'+(p)).classList.add('right-word');
      
        }else{
          document.getElementById('t'+(p)).classList.add('wrong-word');
        }
        // validateword();
        p++;
        curword='';
        focusoncurrent();
        if(p==txt.length-1){
          endgame(5);
          return;
        }
        document.getElementById('accuracy').innerHTML=(100*document.getElementsByClassName('right-word').length/p).toFixed(2) +'%';
      }
      }else if(event.key=='Backspace'){
        if(event.ctrlKey){
          curword='';
        }
        else{
          curword=curword.substring(0,curword.length-1);
        }
      }else if(event.key.length==1){
        curword=curword+event.key;
      }

     
    
    document.getElementById('current-word').textContent=curword;
    // if(!shift){
      // if(event.key=='Shift'){
      //   setCapsLock(event.getModifierState('CapsLock'));
      //   setShift(true);
      // }else{if(!shift){
      //   setCapsLock(event.getModifierState('CapsLock'));
      // }  
    //   }
      // document.getElementById(event.code).classList.add('active');
    //   // alert(event.code);
    // }
    if(event.key=='CapsLock'){
      console.log(event.getModifierState('CapsLock'))
      setCapsLock(event.getModifierState('CapsLock'));
    }else if(event.key=='Shift'){
    

      if(!shift){
        setCapsLock(event.getModifierState('CapsLock'));
        setShift(true);
      }
      document.getElementById(event.code).classList.add('active');
    }else{
      if(!shift){
        setCapsLock(event.getModifierState('CapsLock'));
      }  
      const key = event.key.toLowerCase();
      const keyElement = [...document.querySelectorAll('.key')].find((element) => element.textContent.toLowerCase() === key);
      if (keyElement) {
        keyElement.classList.add('active');
      }
    }
    
  }

  function keyup(event) {
    // console.log(event);
    if(event.key=='Shift'){
        setShift(false);
        document.getElementById(event.code).classList.remove('active');

    }
  
    const key = event.key.toLowerCase();
    console.log(event);
    const keyElement = [...document.querySelectorAll('.key')].find((element) => element.textContent.toLowerCase() === key);
    if (keyElement) {
      keyElement.classList.remove('active');
    }
  }


  function setCapsLock(v) {
    var elements = document.getElementsByClassName('changeoncapshit');
    var elementsArray = Array.from(elements);
    // if(shift){
    //   shift=false;
    //   setShift(true);
    // }
    if(shift){
      v=!v;
    }

  
    elementsArray.forEach((x) => {
      if (v === true) {
        x.textContent = x.textContent.toUpperCase();
      } else if (v === false) {
        x.textContent = x.textContent.toLowerCase();
      }
  
      cpslock=v;
    });
  }
  
  function setShift(v) {
    if(v==shift){
      return;
    }
    console.log("called"+v+shift);
    if(shift!=v){
      
    const elements = document.getElementsByClassName('changeoncapshit');
    const elementsArray = Array.from(elements);
  
    elementsArray.forEach((x) => {
      x.textContent=toggleAlphabetCharacter(x.textContent);
      console.log("alfabet togged")
    });
   

    const e=document.getElementsByClassName('changeonshifthit');
    const ae=Array.from(e);
    ae.forEach((x)=>{
      x.textContent=toggleShiftCharacter(x.textContent);
    });
    shift = v;
    }
     // Update the Shift key status
  }

  createKeyboard();
  document.addEventListener('keydown',changergb);
  document.getElementById('mpos').style.animationName='kbplate';

var isstart=false;
  async function  startgame(button) {
 
    isstart=true;
    const b=document.getElementById('fkeboard');
    document.getElementById('setting').style.display='none';
    b.style.display='flex';
    button.style.display = 'none';
    document.getElementById('end').style.display='inline-block';
    if(document.getElementById('text-mode').selectedIndex==1){
      txt=(generateRandomWords(50,1,8));
    }else if(document.getElementById('text-mode').selectedIndex==2){
      txt=t;
    }
    else{
      // txt=t;
      rendertxt("Loading....");
      const p=document.getElementById('lop').value;
      const res=await fetchHipsterText(p);
      console.log(res);
      txt=res.join("").replace(/\s+/g, ' ').trim().split(' ');
      console.log(txt);
      
    }
    if(isstart){
      rendertxt(txt);
      intid=setInterval(() => {
        time++;
        document.getElementById('speed').innerHTML=(60*p/time).toFixed(0);
    
      }, 950);
    
      focusoncurrent();
    document.addEventListener('keydown',keydown );
    
    document.addEventListener('keyup',keyup);
    }
  
  }



  
  function endgame(btn){
    isstart=false;
    document.getElementById('setting').style.display='block';
    const b=document.getElementById('fkeboard');
    // document.getElementById('txt').innerHTML="Completed";
    rendertxt("completed");
    // b.style.display='none';
    document.getElementById('end').style.display='none';
    document.getElementById('start').style.display='inline-block';
    document.removeEventListener('keydown',keydown );
    document.removeEventListener('keyup',keyup);
    clearInterval(intid);
     speed=0;
     accuracy=0;
     cpslock=true;
     shift=false;
     p=0;
     time=1;

    
  }
  

  // function randomizeAnimation() {
  //   const element = document.getElementsByClassName('row')[0];
  //   const duration = Math.random() * 1 + 1; // Random duration between 1 and 6 seconds
    
  //   element.style.animationDuration = `${duration}s`;
  // }
  // setInterval(randomizeAnimation, 3000);

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
    document.getElementById("myNav").style.width = "0%";
  }
  openNav();

