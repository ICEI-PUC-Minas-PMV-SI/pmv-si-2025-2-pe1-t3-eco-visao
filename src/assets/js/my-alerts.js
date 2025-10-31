let map;
let markers = [];

function initMap() {
  map = L.map("map").setView([-19.9679, -43.9211], 13);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors",
  }).addTo(map);
}

function novoAlerta() {
  const modal = document.getElementById("caixaModal");
  const entradaTitulo = document.getElementById("entradaTitulo");
  const entradaDescricao = document.getElementById("entradaDescricao");
  const cancelarModal = document.getElementById("cancelarModal");
  const confirmarModal = document.getElementById("confirmarModal");

  entradaTitulo.value = "";
  entradaDescricao.value = "";
  modal.classList.remove("hidden");

  cancelarModal.onclick = () => modal.classList.add("hidden");

  confirmarModal.onclick = () => {
    const titulo = entradaTitulo.value.trim();
    const descricao = entradaDescricao.value.trim();

    if (!titulo) return alert("Digite um título para o alerta!");
    if (!descricao) return alert("Digite uma breve descrição para o alerta!");

    modal.classList.add("hidden");
    alert("Agora clique no mapa para escolher a localização do alerta!");

    map.once("click", (e) => {
      const marker = L.marker(e.latlng)
        .addTo(map)
        .bindPopup(`<b>${titulo}</b><br>${descricao}<br>${new Date().toLocaleDateString("pt-BR")}`)
        .openPopup();
      markers.push(marker);

      const lista = document.getElementById("listaAlertas");
      if (lista.textContent.includes("Nenhum alerta criado ainda")) {
        lista.textContent = "";
      }

      const alertaDiv = document.createElement("div");
      alertaDiv.className = "bg-gray-50 p-4 border rounded-lg flex justify-between items-start gap-4";
      alertaDiv.innerHTML = `
        <div>
          <p class="text-gray-700 font-medium">${titulo}</p>
          <p class="text-gray-600 text-sm mb-1">${descricao}</p>
          <p class="text-gray-500 text-xs">Criado em ${new Date().toLocaleDateString("pt-BR")}</p>
        </div>
        <div class="flex gap-2">
          <button class="bg-red-100 hover:bg-red-200 text-red-600 text-sm px-3 py-1 rounded">
            <i class="fas fa-trash"></i> Excluir
          </button>
        </div>
      `;

      alertaDiv.querySelector("button").onclick = () => {
        lista.removeChild(alertaDiv);
        map.removeLayer(marker);
        if (lista.children.length === 0) {
          lista.textContent = "Nenhum alerta criado ainda.";
          lista.classList.add("italic", "text-gray-500");
        }
      };

      lista.appendChild(alertaDiv);
    });
  };
}

window.addEventListener("load", initMap);
document.getElementById("novoAlerta").addEventListener("click", novoAlerta);
