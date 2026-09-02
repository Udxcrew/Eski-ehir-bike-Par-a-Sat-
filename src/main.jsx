import React,{useMemo,useState} from "react";
import{createRoot}from"react-dom/client";
import{Search,MapPin,Plus,Heart,ChevronRight,Bike,Wrench,CircleDot,Disc3,Package,Menu,X,SlidersHorizontal,BadgeCheck}from"lucide-react";
import"./styles.css";

const products=[
{id:1,title:"Rockrider XC 100 Kadro",price:4250,cat:"Kadro",loc:"Tepebaşı",seller:"Emir Bike",badge:"Yeni",img:"https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&fit=crop&w=1000&q=85"},
{id:2,title:"Shimano Deore 10'lu Aktarıcı",price:1850,cat:"Vites",loc:"Odunpazarı",seller:"Bike Garage",badge:"Mağaza",img:"https://images.unsplash.com/photo-1502744688674-c619d1586c9e?auto=format&fit=crop&w=1000&q=85"},
{id:3,title:"27.5 Jant Seti — Novatec",price:3600,cat:"Jant",loc:"Tepebaşı",seller:"Mert MTB",img:"https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=85"},
{id:4,title:"Havalı Maşa 120 mm",price:5900,cat:"Maşa",loc:"Odunpazarı",seller:"ESK Bike Shop",badge:"Mağaza",img:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=85"},
{id:5,title:"Shimano MT200 Hidrolik Fren Seti",price:1650,cat:"Fren",loc:"Tepebaşı",seller:"Can Bisiklet",img:"https://images.unsplash.com/photo-1541625602330-2277a4c46182?auto=format&fit=crop&w=1000&q=85"},
{id:6,title:"SRAM 7'li Vites Kolu",price:650,cat:"Vites",loc:"Odunpazarı",seller:"Ali",badge:"Uygun",img:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=1000&q=85"}
];
const cats=[["Tüm İlanlar",Bike],["Kadro",Package],["Maşa",Wrench],["Vites",SlidersHorizontal],["Jant",CircleDot],["Fren",Disc3]];

function App(){
 const[cat,setCat]=useState("Tüm İlanlar"),[q,setQ]=useState(""),[favs,setFavs]=useState([]),[mobile,setMobile]=useState(false);
 const filtered=useMemo(()=>products.filter(p=>(cat==="Tüm İlanlar"||p.cat===cat)&&`${p.title} ${p.seller}`.toLowerCase().includes(q.toLowerCase())),[cat,q]);
 const fav=id=>setFavs(v=>v.includes(id)?v.filter(x=>x!==id):[...v,id]);
 return <div className="app">
  <header className="nav"><div className="nav-in">
   <a className="brand" href="#"><span className="mark"><Bike size={20}/></span><span>BIKEMARKET<small>ESKİŞEHİR</small></span></a>
   <nav><a className="active" href="#ilanlar">İlanlar</a><a href="#magazalar">Mağazalar</a><a href="#nasil">Nasıl Çalışır?</a></nav>
   <div className="actions"><button className="ghost"><Heart size={17}/> Favoriler {favs.length>0&&<b>{favs.length}</b>}</button><button className="sell"><Plus size={17}/> İlan Ver</button><button className="hamb" onClick={()=>setMobile(!mobile)}>{mobile?<X/>:<Menu/>}</button></div>
  </div>{mobile&&<div className="mobile-nav"><a href="#ilanlar">İlanlar</a><a href="#magazalar">Mağazalar</a><a href="#nasil">Nasıl Çalışır?</a><button className="sell"><Plus size={17}/> İlan Ver</button></div>}</header>

  <main>
   <section className="hero"><div className="glow"/><div className="hero-copy">
    <div className="eyebrow"><i/> ESKİŞEHİR'İN BİSİKLET PAZARI</div>
    <h1>Bisikletini bul.<br/><em>Pedala bas.</em></h1>
    <p>Eskişehir'deki bisiklet, parça ve ekipmanları tek yerde keşfet.</p>
    <div className="search"><Search size={20}/><input value={q} onChange={e=>setQ(e.target.value)} placeholder="Maşa, kadro, Deore, jant..."/><button>ARA</button></div>
    <div className="meta"><span><MapPin size={14}/> Eskişehir</span><span>•</span><span>Güvenli alışveriş</span><span>•</span><span>Yerel satıcılar</span></div>
   </div><div className="hero-art"><div className="ring r1"/><div className="ring r2"/><Bike size={330} strokeWidth={.7}/><div className="stat"><strong>1.240+</strong><span>aktif ilan</span></div></div></section>

   <section className="categories">{cats.map(([name,Icon])=><button key={name} className={cat===name?"cat active":"cat"} onClick={()=>setCat(name)}><Icon size={18}/>{name}</button>)}</section>

   <section className="listings" id="ilanlar"><div className="head"><div><span>BUGÜN ESKİŞEHİR'DE</span><h2>Öne çıkan ilanlar</h2></div><button className="all">Tüm ilanları gör <ChevronRight size={16}/></button></div>
    <div className="grid">{filtered.map(p=><article className="card" key={p.id}><div className="photo"><img src={p.img} alt={p.title}/>{p.badge&&<label>{p.badge}</label>}<button className={favs.includes(p.id)?"fav liked":"fav"} onClick={()=>fav(p.id)}><Heart size={18} fill={favs.includes(p.id)?"currentColor":"none"}/></button></div><div className="body"><div className="tiny"><span>{p.cat}</span><span><MapPin size={12}/>{p.loc}</span></div><h3>{p.title}</h3><div className="bottom"><strong>{p.price.toLocaleString("tr-TR")} TL</strong><span>{p.seller}<BadgeCheck size={14}/></span></div></div></article>)}</div>
    {!filtered.length&&<div className="empty">Aramana uygun ilan bulunamadı.</div>}
   </section>

   <section className="cta"><div><span>SATIŞA BAŞLA</span><h2>Kullanmadığın parçayı<br/><em>nakde çevir.</em></h2><p>İlanını birkaç dakikada oluştur ve Eskişehir'deki bisikletçilere ulaş.</p></div><button className="sell big"><Plus size={19}/> Ücretsiz ilan ver <ChevronRight size={17}/></button></section>
  </main>
  <footer><span>© 2026 BikeMarket Eskişehir</span><a href="#top">by-r4liqnt</a><span>Eskişehir • Bisiklet • Topluluk</span></footer>
 </div>
}
createRoot(document.getElementById("root")).render(<App/>);