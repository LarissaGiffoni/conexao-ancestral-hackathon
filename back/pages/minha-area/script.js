// ===== NOTIFICAÇÃO ELEGANTE =====
function mostrarNotificacao(titulo, mensagem, tipo = "info") {
  const antiga = document.querySelector(".notificacao");
  if (antiga) antiga.remove();

  const notif = document.createElement("div");
  notif.className = `notificacao ${tipo}`;

  const icones = { info: "📊", sucesso: "✅", alerta: "⚠️" };

  notif.innerHTML = `
    <div class="notif-icone">${icones[tipo] || "📊"}</div>
    <div class="notif-conteudo">
      <strong>${titulo}</strong>
      <p>${mensagem}</p>
    </div>
    <button class="notif-fechar" onclick="this.parentElement.remove()">×</button>
  `;

  document.body.appendChild(notif);
  setTimeout(() => notif.classList.add("visivel"), 10);
  setTimeout(() => {
    notif.classList.remove("visivel");
    setTimeout(() => notif.remove(), 300);
  }, 4000);
}

// ===== REGISTRAR CLIQUE (tracking simulado) =====
function registrarClique(oportunidade) {
  console.log("📊 Comportamento registrado:");
  console.log("   → Oportunidade clicada:", oportunidade);
  console.log("   → Data/hora:", new Date().toLocaleString("pt-BR"));
  console.log("   → Usuário: Empresa Beta");

  mostrarNotificacao(
    "Comportamento registrado",
    `Você clicou em: <strong>${oportunidade}</strong><br><small>O sistema registrou esse clique no Dashboard da Petronect.</small>`,
    "info"
  );
}

// ===== RETOMAR PROPOSTA =====
function retomarProposta() {
  console.log("📊 Comportamento registrado:");
  console.log("   → Ação: Retomar proposta abandonada");
  console.log("   → Proposta: Manutenção Industrial");
  console.log("   → Data/hora:", new Date().toLocaleString("pt-BR"));

  mostrarNotificacao(
    "Retomando proposta",
    "Você voltou para concluir a proposta de <strong>Manutenção Industrial</strong>.<br><small>O sistema registrou a retomada.</small>",
    "sucesso"
  );
}