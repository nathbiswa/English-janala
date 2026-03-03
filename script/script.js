
const dataFetch = () => {
    const fetchLink = 'https://openapi.programming-hero.com/api/levels/all';
    fetch(fetchLink)
        .then((res) => res.json())
        .then((json) => displayData(json.data))
}

dataFetch();

// {id: 101, level_no: 1, lessonName: 'Basic Vocabulary'}
// id
// : 
// 101
// lessonName
// : 
// "Basic Vocabulary"
// level_no
// : 
// 1
const removeActive = ()=>{
    const lessonButton = document.querySelectorAll('.lesson-btn');
    // console.log(lessonButton);
    lessonButton.forEach((btn)=>{
        btn.classList.remove('active');
    })
}

const loadLevelword = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
             removeActive(); //remove all active class
            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            clickBtn.classList.add('active'); // click btn add active class
           
            displayLevelWord(data.data);
        })
}

  // loadWordDetaile / Asynchronous Function (async function)

 const loadWordDetaile = async (id) => {
        const url = `https://openapi.programming-hero.com/api/word/${id}`;
        // console.log(url);
        const res = await fetch(url);
        const detailes = await res.json();
       displayWordDetailes(detailes.data);

    };

    const displayWordDetailes =(word)=>{
        const detailesContainer = document.getElementById('detailes-container');
        detailesContainer.innerHTML= 'Hi I am form js';

        document.getElementById('modal_dtailes').showModal();

    }

const displayLevelWord = (words) => {
    const wordContainer = document.getElementById('word-container');
    wordContainer.innerHTML = "";


    if (words.length == 0) {
        wordContainer.innerHTML = `
          <div id="word-innner-text" class="text-center rounded-lg col-span-full py-8 space-y-10">
                  <img class="mx-auto" src="./assets/alert-error.png" alt="">
                <p class=" text-2xl text-gray-500 font-bold">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h1 class="text-4xl font-bold">নেক্সট Lesson এ যান।</h1>
            </div>
         `;
        return;
    };

    // {
    //     "id": 3,
    //     "level": 2,
    //     "word": "Cautious",
    //     "meaning": "সতর্ক",
    //     "pronunciation": "কশাস"
    // }
  

   
    words.forEach((word) => {
        // console.log(word);
        const card = document.createElement('div');
        card.innerHTML = `
   <div class="bg-white rounded-xl py-8 px-10 text-center space-y-5 ">
                 <h1 class="text-2xl font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h1>
                <p class="font-dedium text-semibold">Meaning /Pronounciation</p>
                <div class="text-2xl font-bangla">
                "${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "pronunciation নেই"}"</div>
                <div class="flex justify-between items-center">

                    <button onclick="loadWordDetaile(${word.id})" class="btn bg-[#1A91FF20] hover:bg-[#1A91FF90]">
                    <i class="fa-solid fa-circle-info"></i></button>

                    <button class="btn bg-[#1A91FF20] hover:bg-[#1A91FF90]">
                    <i class="fa-solid fa-volume-high"></i></button>
                </div>
            </div>
    
    `;
        wordContainer.append(card);
    })


}

const displayData = (lessons) => {

    const lessonContainer = document.getElementById('lesson-container');
    lessonContainer.innerHTML = '';

    for (let lesson of lessons) {
        const btnDiv = document.createElement('div');
        btnDiv.innerHTML = `
<button id="lesson-btn-${lesson.level_no}" onclick= "loadLevelword(${lesson.level_no})"
 class="btn btn-outline btn-primary lesson-btn ">
 <i class="fa-solid fa-circle-question">
 </i>lesson - ${lesson.level_no}</button>
    
    `;
        lessonContainer.append(btnDiv);
    }

}