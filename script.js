const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('nav');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();


// Recherche instantanée du catalogue
const searchInput=document.getElementById('productSearch');
const productCards=[...document.querySelectorAll('.product-card')];
const productCount=document.getElementById('productCount');
const noResults=document.getElementById('noResults');
searchInput?.addEventListener('input',()=>{
  const q=searchInput.value.trim().toLowerCase(); let visible=0;
  productCards.forEach(card=>{const show=card.dataset.name.includes(q); card.hidden=!show; if(show) visible++;});
  if(productCount) productCount.textContent=`${visible} article${visible>1?'s':''}`;
  if(noResults) noResults.hidden=visible!==0;
});

// Aperçu grand format
const lightbox=document.getElementById('lightbox');
const lightboxImage=document.getElementById('lightboxImage');
const lightboxTitle=document.getElementById('lightboxTitle');
const closeLightbox=()=>{if(lightbox) lightbox.hidden=true;document.body.style.overflow='';};
document.querySelectorAll('.product-image').forEach(button=>button.addEventListener('click',()=>{
  if(!lightbox) return; lightboxImage.src=button.dataset.image; lightboxImage.alt=button.dataset.title; lightboxTitle.textContent=button.dataset.title; lightbox.hidden=false; document.body.style.overflow='hidden';
}));
document.getElementById('lightboxClose')?.addEventListener('click',closeLightbox);
lightbox?.addEventListener('click',e=>{if(e.target===lightbox) closeLightbox();});
document.addEventListener('keydown',e=>{if(e.key==='Escape') closeLightbox();});
