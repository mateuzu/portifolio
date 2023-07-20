let about = document.querySelector("#about");

async function getApiGithub() {
    try {
        const dadosPerfil = await fetch("https://api.github.com/users/mateuzu"); 
        const perfil = await dadosPerfil.json(); 
        
        let conteudo = `
        <img  src="${ perfil.avatar_url }" alt="Foto do Perfil do Github">
        <article class="section_content">
            <h1>Quem sou eu?</h1>
            <p>
            Sou um estudante apaixonado por desenvolvimento em busca de oportunidades para aprender, crescer e contribuir para o mundo da tecnologia.
            Atualmente, estou aprimorando minhas habilidades em desenvolvimento de software e buscando uma carreira que me permita aplicar e expandir meus conhecimentos nessa área dinâmica.
            </p>

            <div class="section_github flex">
                <a class="btn" href="${ perfil.html_url }" target="_blank">Github</a>
                <p class="btn btn_info">Seguidores: ${ perfil.followers }</p> 
                <p class="btn btn_info">Repositórios: ${ perfil.public_repos }</p>
            </div>
            <div class = "profile">
                <img src="https://github-readme-stats.vercel.app/api?username=mateuzu&show_icons=true&theme=holi" alt="">
            </div>
        </article>
        `
        about.innerHTML += conteudo; 
    } catch (error) {
        console.log(error);
    }
}

function changeTheme() {
    document.body.classList.toggle("dark-theme");
}

getApiGithub()

