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

const headerSection = document.querySelector('.header-section');
const heroSection = document.querySelector('.hero');
const footerSection = document.querySelector('.footer');
const signOutBtn = document.querySelector('.btn-1');
const finishBtn = document.querySelector('.btn-danger.btn-primary'); 

function showLogin() {
  headerSection.classList.add('d-none');
  heroSection.classList.add('d-none');
  footerSection.classList.add('d-none');
  loginPage.classList.remove('d-none');
}

function login() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  if (username && password) {
    window.location.href = "index2.html"; 
  } else {
    alert('Please enter username and password');
  }
}

signOutBtn.addEventListener('click', showLogin);
finishBtn.addEventListener('click', showLogin);


