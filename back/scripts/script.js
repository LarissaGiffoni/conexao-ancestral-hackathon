const tabLogin = document.getElementById('tabLogin');
const tabSignup = document.getElementById('tabSignup');
const viewLogin = document.getElementById('viewLogin');
const viewSignup = document.getElementById('viewSignup');

function showLogin(){
  tabLogin.classList.add('active'); tabSignup.classList.remove('active');
  viewLogin.style.display = 'block'; viewSignup.style.display = 'none';
}
function showSignup(){
  tabSignup.classList.add('active'); tabLogin.classList.remove('active');
  viewSignup.style.display = 'block'; viewLogin.style.display = 'none';
}
tabLogin.addEventListener('click', showLogin);
tabSignup.addEventListener('click', showSignup);
document.getElementById('goSignup').addEventListener('click', (e)=>{e.preventDefault(); showSignup();});
document.getElementById('goLogin').addEventListener('click', (e)=>{e.preventDefault(); showLogin();});

// BOTÃO "ENTRAR NO PORTAL" → redireciona para a Home
document.getElementById('loginSubmit').addEventListener('click', ()=>{
  window.location.href = '../pages/home/index.html';
});


function wirePillGroup(rowId, addBtnId, inputWrapId, inputId, confirmBtnId){
  const row = document.getElementById(rowId);
  row.querySelectorAll('.pill').forEach(p=>{
    p.addEventListener('click', ()=> p.classList.toggle('active'));
  });
  const addBtn = document.getElementById(addBtnId);
  const wrap = document.getElementById(inputWrapId);
  const input = document.getElementById(inputId);
  addBtn.addEventListener('click', ()=>{
    wrap.classList.toggle('show');
    if(wrap.classList.contains('show')) input.focus();
  });
  function commit(){
    const val = input.value.trim();
    if(!val) return;
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = 'pill active';
    pill.textContent = val;
    pill.addEventListener('click', ()=> pill.classList.toggle('active'));
    row.insertBefore(pill, addBtn);
    input.value = '';
    wrap.classList.remove('show');
  }
  document.getElementById(confirmBtnId).addEventListener('click', commit);
  input.addEventListener('keydown', (e)=>{ if(e.key === 'Enter'){ e.preventDefault(); commit(); } });
}
wirePillGroup('fornecimentoPills','addFornecimento','fornecimentoInputWrap','fornecimentoInput','fornecimentoAddBtn');
wirePillGroup('oportunidadePills','addOportunidade','oportunidadeInputWrap','oportunidadeInput','oportunidadeAddBtn');


document.querySelectorAll('.check-item').forEach(item=>{
  const input = item.querySelector('input');
  item.addEventListener('click', (e)=>{
    e.preventDefault();
    input.checked = !input.checked;
    item.classList.toggle('checked', input.checked);
  });
});


const totalSteps = 4;
let current = 1;
const btnNext = document.getElementById('btnNext');
const btnBack = document.getElementById('btnBack');

function renderStep(){
  document.querySelectorAll('.step-panel').forEach(p=>{
    p.classList.toggle('active', Number(p.dataset.panel) === current);
  });
  document.querySelectorAll('.tracker .step').forEach(s=>{
    const n = Number(s.dataset.step);
    s.classList.remove('current','done');
    if(n < current){ s.classList.add('done'); s.querySelector('.bead').textContent = '✓'; }
    else if(n === current){ s.classList.add('current'); s.querySelector('.bead').textContent = n; }
    else { s.querySelector('.bead').textContent = n; }
  });
  document.querySelectorAll('.tracker .connector').forEach((c, i)=>{
    c.classList.toggle('done', (i+1) < current);
  });
  btnBack.disabled = current === 1;
  btnNext.textContent = current === totalSteps ? 'Concluir cadastro' : 'Salvar e continuar';
}

// BOTÃO "CONCLUIR CADASTRO" (última etapa) → redireciona para a Home
btnNext.addEventListener('click', ()=>{
  if(current < totalSteps){
    current++; renderStep();
  } else {
    window.location.href = '../pages/home/index.html';
  }
});
btnBack.addEventListener('click', ()=>{
  if(current > 1){ current--; renderStep(); }
});
renderStep();