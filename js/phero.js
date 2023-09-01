const handelCategory = async() =>{
    const response = await  fetch('https://openapi.programming-hero.com/api/videos/categories');

    const data = await response.json();
    // console.log(data.data);
    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((element) =>{
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick ="handleLoadPage('${element.category_id}')" class="btn btn-active">${element.category}</button>
        `;
        tabContainer.appendChild(div);
    });
    // console.log(data.data);
  
};

const handleLoadPage = async(elementId) =>{
   const response =await fetch(` https://openapi.programming-hero.com/api/videos/category/${elementId}`) 
   const data = await response.json();
  //  console.log(data.data);
   const cardContainer = document.getElementById('card-container');
   cardContainer.innerHTML ='';

   data.data.forEach((content) =>{
    const div = document.createElement('div');
   div.innerHTML =`
   <div class="card h-96 bg-base-100 shadow-xl">
   <figure >
     <img src=${content?.thumbnail}
       alt=""
     />
     <p class="absolute right-5 bg-white mt-40 ">${content?.others.posted_date}</p>
   </figure>
   <div class="card-body ">
     <div class="card-footer flex justify-between ">
       <div class="flex gap-5">
         <div>
               <img class="w-14 h-14 rounded-full" src=${content?.authors[0]?.profile_picture}
               />
             </div>
         <div>
           <h6>${content?.title}</h6>
         </div>
       </div>
     </div>
     <div class="flex gap-7">
       <div>
         <p>${content?.authors[0]?.profile_name}</p>
         <p>${content?.others?.views}</p>
       </div>
       <div>
       <h3>${content?.authors[0]?.verified}</h3>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
</svg>

       
       </div>
     </div>
   </div>
 </div>
   `;
   cardContainer.appendChild(div);

   });

};

// sort by view

 const sortFunction =async ()=>{
  // console.log('clicked');
  const response = await  fetch('https://openapi.programming-hero.com/api/videos/category/1000');
  const data = await response.json();
  // console.log(data.data);
  data.data.forEach((views) =>{
    const viewsAmount = views.others.posted_date;
    console.log(viewsAmount);

  })
  
 }

// blog button
function myBlog() {
  console.log('clicked');
  window.location.href='../blog.html';
}
//go home button
function home(){
  console.log('gg');
  window.location.href='index.html';
}




// function hoursAndMinutes (TotalSecond){
//   const totalMinutes = Math.floor(TotalSecond/60);
//   const seconds = TotalSecond%60;
//   const hours =Math.floor(totalMinutes/60);
//   const minutes = totalMinutes%60;
//   return{h:hours,m:minutes,s:seconds};

// }


handelCategory()
handleLoadPage ('1000')


























/* <i class="fa-solid fa-badge-check"></i> */