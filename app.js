// GRID BR — dados demonstrativos. Não representam resultados oficiais ou ao vivo.
const news = [
  {id:1,category:"F1",date:"DESTAQUE EDITORIAL",title:"O que faz uma estratégia de corrida dar certo?",summary:"Pneus, janelas de pit stop, tráfego e safety car: entenda os fatores que podem mudar uma corrida.",image:"https://images.unsplash.com/photo-1532906619279-a4b7267faa66?auto=format&fit=crop&w=900&q=80",body:"Uma estratégia competitiva começa antes da largada. As equipes analisam a degradação dos pneus, o ritmo de corrida, o tráfego e as possibilidades de safety car. Mesmo um plano bem preparado precisa mudar quando as condições de pista evoluem. Esta matéria é um exemplo editorial para demonstrar o portal; substitua por conteúdo apurado e fontes identificadas."},
  {id:2,category:"F2",date:"GUIA DE CATEGORIA",title:"Fórmula 2: o caminho de quem sonha com a elite",summary:"Conheça o papel da categoria de acesso e por que ela é importante para revelar novos talentos.",image:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",body:"A Fórmula 2 reúne pilotos em uma categoria de alta competitividade, com carros padronizados e fins de semana que exigem velocidade, consistência e gestão de pneus. O desempenho na F2 pode ajudar a abrir portas, mas a trajetória de cada piloto depende de vários fatores. Este texto é demonstrativo."},
  {id:3,category:"Análise",date:"TÉCNICA",title:"Aerodinâmica: por que o ar vale tanto tempo",summary:"Asas, assoalho e equilíbrio aerodinâmico ajudam a explicar o comportamento de um carro de corrida.",image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=80",body:"A aerodinâmica determina boa parte da carga que mantém o carro próximo ao asfalto, mas também gera arrasto. Engenheiros procuram equilibrar velocidade em reta e desempenho nas curvas. O ar sujo de outro carro pode reduzir a eficiência aerodinâmica e dificultar a aproximação. Conteúdo ilustrativo."},
  {id:4,category:"História",date:"MEMÓRIA DO ESPORTE",title:"Como a tecnologia transformou a Fórmula 1",summary:"Da evolução dos motores aos sistemas híbridos, a categoria sempre foi um laboratório de engenharia.",image:"https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=900&q=80",body:"A Fórmula 1 mudou muito ao longo das décadas. Segurança, materiais, telemetria, aerodinâmica e unidades de potência evoluíram junto com as regras. Cada era trouxe desafios diferentes para pilotos e equipes. Este artigo é uma introdução demonstrativa, não uma reportagem histórica completa."},
  {id:5,category:"F1",date:"GUIA PARA FÃS",title:"Entenda o fim de semana de um Grande Prêmio",summary:"Treinos, classificação e corrida: veja como normalmente se organiza uma etapa de F1.",image:"https://images.unsplash.com/photo-1504215680853-026ed2a45def?auto=format&fit=crop&w=900&q=80",body:"O formato de um Grande Prêmio depende do regulamento e do calendário da temporada. Em um fim de semana tradicional, há sessões de treino, classificação e corrida. Algumas etapas usam formato sprint, com programação diferente. Confira sempre a programação oficial da etapa antes de divulgar horários."},
  {id:6,category:"Análise",date:"NO DETALHE",title:"Pit stop: segundos que podem decidir tudo",summary:"Coordenação, treino e comunicação fazem de uma parada um dos momentos mais intensos da corrida.",image:"https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=900&q=80",body:"Um pit stop envolve uma equipe treinada, ferramentas específicas e comunicação precisa. A parada precisa ser rápida, mas a segurança é essencial. O tempo total perdido também depende da entrada e saída dos boxes e das regras do circuito. Exemplo de matéria para o projeto."}
];
const drivers = [{name:"Piloto A",team:"Equipe Vermelha",pts:101},{name:"Piloto B",team:"Equipe Prateada",pts:88},{name:"Piloto C",team:"Equipe Papaya",pts:76},{name:"Piloto D",team:"Equipe Azul",pts:64},{name:"Piloto E",team:"Equipe Verde",pts:51}];
const teams = [{name:"Equipe Vermelha",team:"",pts:168},{name:"Equipe Prateada",team:"",pts:139},{name:"Equipe Papaya",team:"",pts:112},{name:"Equipe Azul",team:"",pts:83},{name:"Equipe Verde",team:"",pts:61}];
const races = [
 {round:"01",name:"GP de Exemplo",country:"Circuito demonstrativo",date:"DATA A CONFIRMAR"},
 {round:"02",name:"GP da Costa",country:"Circuito demonstrativo",date:"DATA A CONFIRMAR"},
 {round:"03",name:"GP da Montanha",country:"Circuito demonstrativo",date:"DATA A CONFIRMAR"},
 {round:"04",name:"GP Noturno",country:"Circuito demonstrativo",date:"DATA A CONFIRMAR"},
 {round:"05",name:"GP da Cidade",country:"Circuito demonstrativo",date:"DATA A CONFIRMAR"},
 {round:"06",name:"GP do Litoral",country:"Circuito demonstrativo",date:"DATA A CONFIRMAR"},
 {round:"07",name:"GP Clássico",country:"Circuito demonstrativo",date:"DATA A CONFIRMAR"},
 {round:"08",name:"GP Final",country:"Circuito demonstrativo",date:"DATA A CONFIRMAR"}
];
let activeFilter = "Todas";
let visibleCount = 6;
let activeTable = "drivers";
const newsGrid = document.querySelector("#newsGrid");
const searchInput = document.querySelector("#newsSearch");

function renderNews(){
  const q = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const filtered = news.filter(item => (activeFilter === "Todas" || item.category === activeFilter) &&
    `${item.title} ${item.summary} ${item.category}`.toLocaleLowerCase("pt-BR").includes(q));
  newsGrid.innerHTML = "";
  filtered.slice(0, visibleCount).forEach(item => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.tabIndex = 0;
    card.setAttribute("role","button");
    card.setAttribute("aria-label",`Ler ${item.title}`);
    card.innerHTML = `<div class="news-image" style="background-image:url('${item.image}')"><span class="news-category">${item.category}</span></div>
      <div class="news-body"><div class="news-meta"><span>${item.date}</span><span>LEITURA • 3 MIN</span></div><h3>${item.title}</h3><p>${item.summary}</p><span class="read-more">Ler matéria <span>↗</span></span></div>`;
    card.addEventListener("click", () => openArticle(item));
    card.addEventListener("keydown", e => { if(e.key === "Enter" || e.key === " "){e.preventDefault();openArticle(item);} });
    newsGrid.appendChild(card);
  });
  document.querySelector("#emptyState").hidden = filtered.length !== 0;
  document.querySelector("#showMore").hidden = filtered.length <= visibleCount;
}
function openArticle(item){
  const dialog = document.querySelector("#articleDialog");
  document.querySelector("#dialogContent").innerHTML = `<div class="dialog-image" style="background-image:url('${item.image}')"></div><span class="dialog-category">${item.category} / ${item.date}</span><h2 class="dialog-title">${item.title}</h2><p class="dialog-copy">${item.body}</p><p class="disclaimer">Conteúdo demonstrativo do GRID BR.</p>`;
  if(typeof dialog.showModal === "function") dialog.showModal(); else alert(item.title + "\n\n" + item.body);
}
document.querySelectorAll("[data-filter]").forEach(button => button.addEventListener("click", () => {
  activeFilter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach(b => b.classList.toggle("selected", b === button));
  visibleCount = 6; renderNews();
}));
searchInput.addEventListener("input", () => { visibleCount = 6; renderNews(); });
document.querySelector("#showMore").addEventListener("click", () => { visibleCount += 3; renderNews(); });
document.querySelector("#dialogClose").addEventListener("click", () => document.querySelector("#articleDialog").close());
document.querySelector("#articleDialog").addEventListener("click", e => { if(e.target.id === "articleDialog") e.target.close(); });

function renderStandings(){
  const data = activeTable === "drivers" ? drivers : teams;
  document.querySelector("#nameHeading").textContent = activeTable === "drivers" ? "PILOTO" : "EQUIPE";
  document.querySelector("#standingsBody").innerHTML = data.map((d,i)=>`<tr><td>${String(i+1).padStart(2,"0")}</td><td><div class="driver-cell"><span class="driver-bar"></span><span>${d.name}</span></div></td><td>${d.pts}</td></tr>`).join("");
}
document.querySelectorAll("[data-table]").forEach(button => button.addEventListener("click",()=>{
  activeTable = button.dataset.table;
  document.querySelectorAll("[data-table]").forEach(b=>b.classList.toggle("selected",b===button));
  renderStandings();
}));
document.querySelector("#calendarGrid").innerHTML = races.map(r=>`<article class="race-card" data-round="${r.round}"><span class="race-round">ETAPA ${r.round}</span><h3>${r.name}</h3><p>${r.country}</p><span class="race-date">${r.date}</span></article>`).join("");
document.querySelector("#menuToggle").addEventListener("click",()=>{
  const nav = document.querySelector("#mainNav");
  const open = nav.classList.toggle("open");
  document.querySelector("#menuToggle").setAttribute("aria-expanded",String(open));
});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>{
  document.querySelector("#mainNav").classList.remove("open");
  document.querySelector("#menuToggle").setAttribute("aria-expanded","false");
}));
document.querySelector("#newsletterForm").addEventListener("submit",e=>{
  e.preventDefault();
  document.querySelector("#newsletterMessage").textContent = "Obrigado! Demonstração apenas: conecte um serviço de e-mail para ativar inscrições.";
});
document.querySelector("#year").textContent = new Date().getFullYear();
renderNews();
renderStandings();
