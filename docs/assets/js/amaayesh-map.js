(function(){
  const map = L.map('map', { preferCanvas:true, zoomControl:true });
  const base = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution:'© OpenStreetMap'
  }).addTo(map);

  // fallback view (Mashhad region)
  map.setView([36.3, 59.6], 7);

  // اگر بعداً config اضافه شد، همین فایل بعداً ارتقاء می‌یابد.
})();
