import { gitHubUrl } from "../variables.js";

const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){
        this.userProfile.innerHTML = `<div class="info">
                                            <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                            <div class="data">
                                                <h1>${user.name ?? 'Não possui nome cadastrado 😓'}</h1>
                                                <h2><a href="${user.gitHubProfileUrl}" target="_blank">(${user.userName})</a></h2>
                                                <p>${user.bio ?? 'Não possui bio cadastrada 😓'}</p>
                                                <p><i class="fa-solid fa-user-group"></i> Seguidores: ${user.followers}</p>
                                                <p><i class="fa-solid fa-user-check"></i> Seguindo: ${user.following}</p>
                                            </div>
                                        </div>`
        
        let repositoriesItens = '';
        user.repositories.forEach(repo => {
            const isRepositoryLanguageNull = repo.language === null;

            if(isRepositoryLanguageNull){
                repo.language = 'Nenhuma';
            }

            repositoriesItens += `<li>
                                        <a href="${repo.html_url}" target="_blank">
                                            ${repo.name}
                                            <div class="repository-info">
                                                <ul>
                                                    <li><i class="fa-solid fa-code-fork"></i> ${repo.forks_count}</li>
                                                    <li><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</li>
                                                    <li><i class="fa-solid fa-eye"></i> ${repo.watchers_count}</li>
                                                    <li><i class="fa-solid fa-code"></i> ${repo.language}</li>
                                                </ul>
                                            </div>
                                        </a>
                                  </li>`;
        });

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventsItens = '';
        user.events.forEach(event => {
            const isPushEvent = event.type === 'PushEvent';
            const isCreateEvent = event.type === 'CreateEvent';

            if(isPushEvent){
                eventsItens += `<li><a href="${gitHubUrl}/${event.repo.name}" target="_blank">${event.repo.name}</a> - ${event.payload.commits[0].message}</li>`
            }else if(isCreateEvent){
                eventsItens += `<li><a href="${event.repo.url}" target="_blank">${event.repo.name}</a> - sem mensagem de commit</li>`
            }
        });

        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
                                                <h2>Eventos</h2>
                                                <ul>${eventsItens}</ul>
                                           </div>`
        }
    },
    renderNotFound(){
        this.userProfile.innerHTML = `<h3>Usuário não encontrado</h3>`
    }
}

export { screen }