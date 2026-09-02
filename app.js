const products=[
["Rockrider XC 100 Kadro",4250,"Kadro","Tepebaşı","Emir Bike","Yeni","https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1000&q=85"],
["Shimano Deore 10'lu Aktarıcı",1850,"Vites","Odunpazarı","Bike Garage","Mağaza","https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1000&q=85"],
["27.5 Jant Seti — Novatec",3600,"Jant","Tepebaşı","Mert MTB","","https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85"],
["Havalı Maşa 120 mm",5900,"Maşa","Odunpazarı","ESK Bike Shop","Mağaza","https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=85"],
["Shimano MT200 Hidrolik Fren Seti",1650,"Fren","Tepebaşı","Can Bisiklet","","https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1000&q=85"],
["SRAM 7'li Vites Kolu",650,"Vites","Odunpazarı","Ali","Uygun","https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85"]
];
const categories=["Tümü","Kadro","Maşa","Vites","Jant","Fren"];
let active="Tümü",favorites=JSON.parse(localStorage.getItem("bm-favs")||"[]");
function setCat(c){active=c;renderCats();render()}
function renderCats(){document.getElementById("cats").innerHTML=categories.map(c=>`<button class="cat ${c===active?"active":""}" onclick="setCat('${c}')">◉　${c}</button>`).join("")}
function toggle(i){favorites=favorites.includes(i)?favorites.filter(x=>x!==i):[...favorites,i];localStorage.setItem("bm-favs",JSON.stringify(favorites));render()}
function render(){let q=document.getElementById("search").value.toLowerCase();let list=products.filter(p=>(active==="Tümü"||p[2]===active)&&p.join(" ").toLowerCase().includes(q));document.getElementById("grid").innerHTML=list.map((p)=>{let i=products.indexOf(p);return `<article class="card"><div class="photo"><img src="${p[6]}" alt="${p[0]}">${p[5]?`<label class="badge">${p[5]}</label>`:""}<button class="fav ${favorites.includes(i)?"liked":""}" onclick="toggle(${i})">${favorites.includes(i)?"♥":"♡"}</button></div><div class="body"><div class="tiny"><span>${p[2]}</span><span>📍 ${p[3]}</span></div><h3>${p[0]}</h3><div class="bottom"><strong>${p[1].toLocaleString("tr-TR")} TL</strong><span>${p[4]} ✓</span></div></div></article>`}).join("")||'<div style="grid-column:1/-1;text-align:center;padding:60px;color:#777">Aramana uygun ilan bulunamadı.</div>';document.getElementById("favCount").textContent=favorites.length||""}
function showFavs(){if(!favorites.length)return alert("Henüz favorin yok kanka 😄");document.getElementById("ilanlar").scrollIntoView();alert(favorites.length+" favori ilanının var.")}
renderCats();render();