import 'beercss';
import "material-dynamic-colors";
import '../styles/style.css';

// Função para alternar o modo entre claro e escuro usando a API `ui`
 const toggleTheme = async () => {
    // Obtém o modo atual
    const currentMode = ui("mode");
  
    // Alterna o modo
    if (currentMode === "light") {
        ui("mode", "dark");
    } else {
        ui("mode", "light");
    }
  };
  
  // Adiciona um evento de clique no botão de alternância de tema
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  document.getElementById("theme-toggle").addEventListener("click", function() {
    const icon = this.querySelector("i");
    
    // Verifica o ícone atual e alterna para o outro
    if (icon.textContent === "light_mode") {
      icon.textContent = "dark_mode";
    } else {
      icon.textContent = "light_mode";
    }
  });