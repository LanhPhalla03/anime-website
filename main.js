fetch('https://lanhphalla03.github.io/api-anime/card.json')
  .then(res => res.json())
  .then(data => {
    let show = '';
    data.forEach(item => {
      show += `
        <div class="position-relative flex-shrink-0 scale" style="width:220px;">
          <h1 class="position-absolute fw-bold m-0"
              style="top:70%; left:-18px; transform:translateY(-50%); font-size:100px; color:black; -webkit-text-stroke:3px white; z-index:2;">
            ${item.number}
          </h1>
          <img src="${item.pic}"
               class="w-100 rounded-3" style="height:250px;" alt="">
        </div>
      `;
    });
    document.getElementById('data').innerHTML = show;
  })
  .catch(err => console.error('Error fetching API:', err));

const Fapitems =document.querySelectorAll('.faq-item');
Fapitems.forEach((item) =>{
item.addEventListener('click', () =>{
    const answer = item.nextElementSibling;
    const icon = item.querySelector('.toggle-icon');
    if(answer.style.display=='block'){
        answer.style.display='none';
        icon.classList.remove('bi-dash-lg');
        icon.classList.add('bi-plus-lg');
    }else{
        document.querySelectorAll('fap-answer').forEach(a => a.style.display= 'none');
        document.querySelectorAll('toggle-icon').forEach(i => {
            i.classList.remove('bi-dash-lg');
            icon.classList.add('bi-plus-lg');
        });
        answer.style.display = 'block';
      icon.classList.remove('bi-plus-lg');
      icon.classList.add('bi-dash-lg');
    }
});
});

