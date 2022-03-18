import { Injectable } from '@angular/core';
import { Jogo } from '../models/jogo';


@Injectable({
    providedIn: 'root'
})

export class JogosService {
    private jogos: Jogo[] = [];
    public titulo: string | undefined;
    public preco: number | undefined;
    public devs: string | undefined;
    public genero: string | undefined;
    public modoJogo: string | undefined;
    public plataforma: string | undefined;
    public lancamento: number | undefined;
    public edicao: boolean = false;
    public indice: number = -1;

    displayedColumns: string[] = ['Titulo', 'Preço', 'Desenvolvedora', 'Gênero'];

    
    constructor() {
        this.jogos.push(new Jogo("Grand Theft Auto V", 123.98, "Rockstar Games", "Ação, aventura", "Single-Player e Multiplayer Online", "Multiplataforma", 2020));
        this.jogos.push(new Jogo("Counter Strike - Global Offensive", 102.99, "Valve", "FPS, Ação", "Single-Player e Multiplayer Online", "PC", 2012));
        this.jogos.push(new Jogo("Top Gear 2", 49.91, "Nintendo", "Corrida", "Single-Player e Multiplayer Local", "Console", 1993));
        this.jogos.push(new Jogo("Dragon Ball Z - Budokai Tenkaichi 3", 39.99, "Bandai Namco", "Aventura, Luta", "Single-Player e Multiplayer Local", "Console", 2006));
        this.jogos.push(new Jogo("Midnight Club 3 - Dub Edition", 29.99, "Rockstar North", "Corrida", "Single-Player e Multiplayer Local", "Console", 2005));
        this.jogos.push(new Jogo("Need For Speed Underground 2", 69.99, " Electronic Arts", "Corrida", "Single-Player e Multiplayer Local", "Console", 2003));
        this.jogos.push(new Jogo("Bully", 45.99, "Rockstar Vancouver", "Aventura, Luta", "Single-Player e Multiplayer Local", "Console", 2005));
        this.jogos.push(new Jogo("Silent Hill", 39.99, "Konami", "Terror", "Single-Player", "Console", 1999));
        this.jogos.push(new Jogo("God of War II", 53.99, "Sony", "Aventura, Luta", "Single-Player", "Console", 2007));
        this.jogos.push(new Jogo("Resident Evil 4", 39.99, "Capcom", "Aventura, Terror", "Single-Player", "Console", 2005));
        this.jogos.push(new Jogo("Shadow of the Colossus", 99.99, "Team Ico, Sony Interactive Entertainment", "Aventura, Luta", "Single-Player", "Console", 2005));
        this.jogos.push(new Jogo("Mortal Kombat: Shaolin Monks", 29.99, "Midway Games", "Aventura, Luta", "Single-Player e Multiplayer Local", "Console", 2006));
    }

    public inserirJogo(jogo: Jogo): boolean {
        this.jogos.push(jogo);
        return true;
    }

    public getJogos(): Jogo[] {
        return this.jogos;
    }

    public getJogo(indice: number): Jogo {
        return this.jogos[indice];
    }

    public editarJogo(indice: number, jogo: Jogo): boolean {
        this.jogos[indice] = jogo;
        return true;
    }

    public excluirJogo(indice: number): boolean {
        this.jogos.splice(indice, 1);
        return true;
    }
}