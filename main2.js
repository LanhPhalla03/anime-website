fetch('https://lanhphalla03.github.io/api-anime/card.json')
  .then(res => res.json())
  .then(data => {
    let show = '';
    data.forEach(item => {
      show += `
         <div class="poster">
          <img src="${item.pic}" width="160" height="240" />
          <p class="mt-2 ms-2">HUNTER X HUNTER</p>
        </div>
      `;
    });
    document.getElementById('popular-movie').innerHTML = show;
  })
  .catch(err => console.error('Error fetching API:', err));


fetch('https://lanhphalla03.github.io/big-anime-api/card.json')
  .then(res => res.json())
  .then(data => {
    let show = '';
    data.forEach(item => {
      show += `
         <div class="col-12 col-md-6 col-lg-4">
            <div class="d-flex bg-black p-2 rounded-3 align-items-center">
              <img
                src="${item.image}"
                class="img-fluid rounded-3"
                style="width: 100px; height: 140px; object-fit: cover"
              />
              <div class="ms-3 flex-grow-1">
                <h6 class="fw-bold mb-1">${item.title}</h6>
                <p class="text-light small mb-2">
                  ${item.text}
                </p>
                <a
                  href="#"
                  class="text-warning  fw-semibold small"
                  >Watch →</a
                >
              </div>
            </div>
          </div>
      `;
    });
    document.getElementById('animeList').innerHTML = show;
  })
  .catch(err => console.error('Error fetching API:', err));

