
const OPTIONS = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "30b7a1683fmshd0480010c1d833cp145fe5jsn004165188598",
    "X-RapidAPI-Host": "ip-geolocation-and-threat-detection.p.rapidapi.com",
  },
};

const fetchIpInfo = ip => {
  return fetch(`https://ip-geolocation-and-threat-detection.p.rapidapi.com/${ip}`, OPTIONS)
    .then(res => res.json())
  .catch(err => console.error(err))
}

const $ = selector => document.querySelector(selector)

const $form = $('#form');
const $input = $('#input');
const $submit = $('#submit');
const $results = $('#results');

 
$form.addEventListener('submit', async (event) => {
  event.preventDefault()
  const { value } = $input
  if (!value) return

  $submit.setAttribute('disable', '');
  $submit.setAttribute('aria-busy', 'true');

  const ipInfo = await fetchIpInfo(value)
  
  if (ipInfo){
    $results.innerHTML = JSON.stringify(ipInfo, null, 2)
  }

  $submit.removeAttribute('disable');
  $submit.removeAttribute('aria-busy');

})