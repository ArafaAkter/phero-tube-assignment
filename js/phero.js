const handelCategory = async() =>{
    const response = await  fetch('https://openapi.programming-hero.com/api/videos/categories');

    const data = await response.json();
    // console.log(data.data);
    const tabContainer = document.getElementById('tab-container');
    data.data.forEach((element) =>{
        const div = document.createElement("div");
        div.innerHTML = `
        <button class="btn btn-active">${element.category}</button>
        `;
        tabContainer.appendChild(div);
    });


    console.log(data.data);
     
};

handelCategory()