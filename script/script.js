
const dataFetch =()=>{
    const fetchLink = 'https://openapi.programming-hero.com/api/levels/all';
    fetch(fetchLink)
    .then((res)=> res.json())
    .then((json)=> displayData(json.data))
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

const displayData =(lessons)=>{

const lessonContainer = document.getElementById('lesson-container');
lessonContainer.innerHTML= '';

for(let lesson of lessons ){
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
<button class="btn btn-outline btn-primary "><i class="fa-solid fa-circle-question"></i>lesson - ${lesson.level_no}</button>
    
    `;
    lessonContainer.append(btnDiv);
}




}