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