const handelCategory = async() =>{
    const response = await  fetch('https://openapi.programming-hero.com/api/videos/categories');

    const data = await response.json();
    // console.log(data.data);
    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((element) =>{
        const div = document.createElement("div");
        div.innerHTML = `
        <button onclick ="handleLoadPage('${element.category_id?element.category_id : 'No data' }')" class="btn btn-active">${element.category}</button>
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

    //Time conversion
    const totalSecond = content?.others.posted_date;
    const totalMinutes = Math.floor(totalSecond/60);
    const hours =Math.floor(totalMinutes/60);
    const minutes = totalMinutes%60;



   div.innerHTML =`
   <div class="card h-96 bg-base-100 shadow-xl">
   <figure >
     <img src=${content?.thumbnail}
       alt=""
     />
     <p class="absolute right-5 bg-white mt-40 ">${content?.others.posted_date?`${hours} hrs ${minutes} min ago`:''}</p>
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
       <h3>${ content.authors[0].verified?'<i class="fa-solid fa-circle-check "></i>':" "}</h3>
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
  window.location.href='../blog.html';
}

handelCategory()
handleLoadPage ('1000')



