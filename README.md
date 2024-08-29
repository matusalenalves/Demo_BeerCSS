# Demonstração do BeerCSS para o ERCEMAPI 2024

Este é um projeto de uma página feito nos moldes de um portfólio de desenvolvedor. Seu propósito é demonstrar como construir páginas bonitas, responsivas e interativas com o BeerCSS de maneira ágil. Será apresentado no ERCEMAPI 2024 no dia 12 de setembro durante o minicurso "Design Web Intuitivo: Potencializando Projetos com Material Design e BeerCSS".

Este é o código-fonte do meu portfólio de desenvolvedor, construído com BeerCSS e seguindo as métricas do Material Design. Este projeto é ideal para desenvolvedores que desejam criar um portfólio moderno e responsivo.
## Pré-requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- [Visual Studio Code (VS Code)](https://code.visualstudio.com/) - Um editor de código leve, mas poderoso.
- [Git](https://git-scm.com/) - Para clonar o repositório do GitHub.
## Como utilizar este projeto

Siga os passos abaixo para configurar o projeto na sua máquina:
### 1. Clonar o repositório

Abra o terminal e execute o seguinte comando para clonar este repositório:

```bash
git clone https://github.com/matusalenalves/Demo_BeerCSS.git
```
### 2. Navegar até o diretório do projeto

Após clonar o repositório, os arquivos do projeto estarão dentro de uma nova pasta no seu sistema. Para trabalhar com esses arquivos, você precisa "entrar" nessa pasta no terminal. Aqui está um guia passo a passo:
#### 2.1. Identificar o nome do diretório (pasta): 

   Quando você clona um repositório, ele é baixado para uma pasta cujo nome é, por padrão, o mesmo nome do repositório no GitHub. Nesse caso, o nome do depositório no Github é **Demo_BeerCSS**, ou seja, uma nova pasta com o nome **Demo_BeerCSS** será criada na sua máquina.
#### 2.2. Usar o comando 'cd': 

   No terminal, você pode usar o comando cd (que significa "change directory" ou "mudar de diretório") para acessar essa nova pasta. O formato básico do comando é:

   ```bash
   cd nome-da-pasta
   ```

   Neste caso, a pasta se chama **Demo_BeerCSS**, então: 

   ```bash
   cd Demo_BeerCSS
   ```

   Depois de executar esse comando, o terminal estará "dentro" da pasta do projeto, e você poderá executar comandos específicos para esse projeto, como abrir o código no VS Code, instalar dependências, etc.

   **Observação:** Se você clonou o repositório em uma localização diferente da sua pasta de usuário padrão, você precisará especificar o caminho completo para a pasta. Por exemplo:

   ```bash
   cd /caminho/para/sua/pasta/Demo_BeerCSS
   ```
### 3. Abrir o projeto no VS Code

No terminal, dentro do diretório do projeto, execute o seguinte comando:

```bash
code .
```
**Explicação:**
'code': Este comando abre o VS Code a partir do terminal.    
'.': O ponto '.' representa o diretório atual. Assim, este comando abrirá o diretório atual (que deve ser o diretório do seu projeto) diretamente no VS Code.
Se o comando code não funcionar, pode ser que ele não esteja configurado no seu PATH. Você pode configurá-lo facilmente:
1. Abra o VS Code.
2. Pressione **Ctrl + Shift + P** (ou **Cmd + Shift + P** no macOS) para abrir a paleta de comandos.
3. Digite e selecione "Shell Command: Install 'code' command in PATH".    
4. Pressione **Enter** para instalar o comando.

Após executar o comando, o VS Code abrirá com o seu projeto carregado. No painel à esquerda, você verá a estrutura de pastas e arquivos do projeto.
### 4. Instalar dependências

Você pode utilizar o BeerCSS tanto via CDN quanto via NPM, neste caso utilizamos o NPM.
#### 4.2. Instalação via NPM:

  Estamos usando o NPM para gerenciar as dependências do projeto. Para instalar as dependências, execute os seguintes comandos para instalar o BeerCSS e o Material Dynamic Colors:

   ```bash
   npm i
   ```
### 5. Executar o projeto
Após instalar as dependências, você pode rodar o projeto localmente pelo Parcel.
Para isso, siga os passos abaixo:

1. **Inicie o servidor local:**
   - Com o projeto aberto no VS Code, abra o terminal e digite o seguinte comando:

   ```bash
   npm start
   ```

   Depois, para compilar:

   ```bash
   npm run build
   ```

Agora, você pode visualizar as alterações feitas no código em tempo real no navegador, sem a necessidade de recarregar manualmente a página.
### 6. Personalizar o projeto

Sinta-se à vontade para editar os arquivos dentro do diretório `src` para personalizar o portfólio de acordo com suas necessidades. As principais seções do site podem ser encontradas e modificadas dentro deste diretório.
## Tecnologias Utilizadas

- **HTML/CSS** - Estrutura e estilos básicos do portfólio.
- **BeerCSS** - Framework CSS leve e intuitivo.
- **Material Design** - Padrões de design para uma experiência visual consistente.
- **Parcel** - Bundler de aplicações web que facilita o processo de desenvolvimento, empacotamento e otimização de arquivos de código.
## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para enviar um pull request ou abrir uma issue para sugerir melhorias.