fetch('https://deploy-vercel-git-main-ypolites-projects.vercel.app/year')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.year;
 });