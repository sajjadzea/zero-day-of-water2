// Chart.js global defaults
Chart.defaults.font.family = "'Vazirmatn', sans-serif";
Chart.defaults.plugins.tooltip.rtl = true;
Chart.defaults.plugins.legend.rtl = true;
Chart.defaults.plugins.legend.labels.usePointStyle = true;

// Chart 1: Demand vs Consumption
const demandCtx = document.getElementById('demandConsumptionChart').getContext('2d');
new Chart(demandCtx, {
  type: 'line',
  data: {
    labels: ['۰۰:۰۰','۰۴:۰۰','۰۸:۰۰','۱۲:۰۰','۱۶:۰۰','۲۰:۰۰','۲۳:۵۹'],
    datasets: [
      {label:'تقاضا',data:[2800,2650,3100,4200,4512,4100,3500],borderColor:'rgb(59,130,246)',backgroundColor:'rgba(59,130,246,.1)',fill:true,tension:.4,pointRadius:4,pointBackgroundColor:'rgb(59,130,246)'},
      {label:'مصرف',data:[2750,2600,3050,4150,4480,4050,3450],borderColor:'rgb(16,185,129)',backgroundColor:'rgba(16,185,129,.1)',fill:true,tension:.4,pointRadius:4,pointBackgroundColor:'rgb(16,185,129)'}
    ]
  },
  options:{
    responsive:true,maintainAspectRatio:false,
    scales:{y:{beginAtZero:false,title:{display:true,text:'مگاوات (MW)'},
    ticks:{callback:v=>new Intl.NumberFormat('fa-IR').format(v)}}},
    plugins:{legend:{position:'top',align:'end'},tooltip:{callbacks:{label:c=>`${c.dataset.label||''}: ${new Intl.NumberFormat('fa-IR').format(c.parsed.y)} مگاوات`}}},
    interaction:{intersect:false,mode:'index'}
  }
});

// Chart 2: City Household Consumption (bar, horizontal)
const cityCtx = document.getElementById('cityConsumptionChart').getContext('2d');
new Chart(cityCtx, {
  type:'bar',
  data:{
    labels:['مشهد','نیشابور','سبزوار','تربت حیدریه','قوچان','کاشمر','گناباد'],
    datasets:[{label:'مصرف خانگی (مگاوات‌ساعت)',data:[1850,480,410,280,210,190,150],backgroundColor:'rgba(34,211,238,.6)',borderColor:'rgb(8,145,178)',borderWidth:1,borderRadius:8}]
  },
  options:{
    responsive:true,maintainAspectRatio:false,indexAxis:'y',
    scales:{x:{title:{display:true,text:'مصرف (MWh)'},ticks:{callback:v=>new Intl.NumberFormat('fa-IR').format(v)}}},
    plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>`${c.dataset.label||''}: ${new Intl.NumberFormat('fa-IR').format(c.parsed.x)} مگاوات‌ساعت`}}}
  }
});

// Chart 3: Household Breakdown (doughnut)
const breakdownCtx = document.getElementById('householdBreakdownChart').getContext('2d');
new Chart(breakdownCtx,{
  type:'doughnut',
  data:{labels:['سرمایش و گرمایش','روشنایی','لوازم خانگی','سایر موارد'],
  datasets:[{label:'تفکیک مصرف',data:[45,25,20,10],backgroundColor:['rgb(251,146,60)','rgb(250,204,21)','rgb(132,204,22)','rgb(163,163,163)'],hoverOffset:4}]},
  options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',align:'center',labels:{padding:15}}}}
});

// Dynamic consumption guide (no inline script needed)
function updateConsumptionGuide(){
  const h = new Date().getHours();
  const box=document.getElementById('currentStatusContainer');
  const txt=document.getElementById('currentStatusText');
  const tip=document.getElementById('dynamicTip');
  let status='',msg='',bg='',fg='';
  if((h>=13&&h<17)||(h>=19&&h<23)){status='اکنون در ساعات اوج بار هستیم';msg='از استفاده همزمان وسایل پرمصرف خودداری کنید.';bg='bg-red-100';fg='text-red-800';}
  else if(h>=17&&h<19){status='اکنون در ساعات بار عادی هستیم';msg='مصرف را مدیریت کنید؛ به‌زودی اوج بار.';bg='bg-yellow-100';fg='text-yellow-800';}
  else {status='اکنون در ساعات کم‌باری هستیم';msg='بهترین زمان برای استفاده از وسایل پرمصرف است.';bg='bg-green-100';fg='text-green-800';}
  box.className=`mb-5 p-3 rounded-lg text-center transition-colors duration-500 ${bg}`;
  txt.className=`font-bold ${fg}`; txt.textContent=status; tip.textContent=msg;
}
document.addEventListener('DOMContentLoaded', ()=>{ updateConsumptionGuide(); setInterval(updateConsumptionGuide, 60000); });
