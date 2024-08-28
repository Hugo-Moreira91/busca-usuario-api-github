const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😓'}</h1>
                                                <h2>(${user.userName})</h2>
                                                <p>${user.bio ?? 'Não possui bio cadastrada 😓'}</p>
                                                <p><i class="fa-solid fa-user-group" style="color: #24292e;"></i> Seguidores: ${user.followers}</p>
                                                <p><i class="fa-solid fa-user-check" style="color: #24292e;"></i> Seguindo: ${user.following}</p>
                                            </div>
                                        </div>`
        
        let repositoriesItens = '';
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`;
        });

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }