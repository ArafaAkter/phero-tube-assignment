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
   console.log(data.data);
   const cardContainer = document.getElementById('card-container');
   cardContainer.innerHTML ='';
   data.data.forEach((content) =>{
    const div = document.createElement('div');
   div.innerHTML =`
   <div class="card  bg-base-100 shadow-xl">
   <figure >
     <img class="w-50" src=${content?.thumbnail}
       alt=""
     />
   </figure>
   <div class="card-body ">
     <div class="card-footer flex justify-between ">
       <div class="flex">
         <div>
             <div class="w-14 rounded-full">
               <img 
                 src=${content.authors[0]?.profile_picture}
               />
             </div>
         </div>
         <div>
           <h6>${content.title}</h6>
         </div>
       </div>
     </div>
     <div class="flex gap-7">
       <div>
         <p>${content.authors[0].profile_name}</p>
         <p>${content.others.views}</p>
       </div>
       <div>
       <i class="fa-solid fa-circle-check"></i>
       </div>
     </div>
   </div>
 </div>
   `;
   cardContainer.appendChild(div);

   });

};

handelCategory()
handleLoadPage ('1000')