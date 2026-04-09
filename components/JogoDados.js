"use client";

import { useState } from "react";
import Dado from "./Dado";

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [dadosA, setDadosA] = useState([1, 1]);
  const [dadosB, setDadosB] = useState([1, 1]);
  const [vez, setVez] = useState("A");
  const [resultado, setResultado] = useState("");
  const [pontosA, setPontosA] = useState(0);
  const [pontosB, setPontosB] = useState(0);

  function rolar() {
    return Math.floor(Math.random() * 6) + 1;
  }

  function jogarA() {
    const d1 = rolar();
    const d2 = rolar();
    setDadosA([d1, d2]);
    setVez("B");
  }

  function jogarB() {
    const d1 = rolar();
    const d2 = rolar();
    setDadosB([d1, d2]);

    const somaA = dadosA[0] + dadosA[1];
    const somaB = d1 + d2;

    if (somaA > somaB) {
      setResultado("Jogador A venceu a rodada");
      setPontosA(pontosA + 1);
    } else if (somaB > somaA) {
      setResultado("Jogador B venceu a rodada");
      setPontosB(pontosB + 1);
    } else {
      setResultado("Empate");
    }

    setRodada(rodada + 1);
    setVez("A");
  }

  function reiniciar() {
    setRodada(1);
    setPontosA(0);
    setPontosB(0);
    setResultado("");
  }

  const fim = rodada > 5;

  return (
    <div>
      <h2>Rodada {rodada}</h2>

      <h3>Jogador A</h3>
      <Dado valor={dadosA[0]} />
      <Dado valor={dadosA[1]} />

      <h3>Jogador B</h3>
      <Dado valor={dadosB[0]} />
      <Dado valor={dadosB[1]} />

      <p>{resultado}</p>

      {!fim && (
        <>
          <button onClick={jogarA} disabled={vez !== "A"}>
            Jogar Dado A
          </button>

          <button onClick={jogarB} disabled={vez !== "B"}>
            Jogar Dado B
          </button>
        </>
      )}

      {fim && (
        <div>
          <h2>
            {pontosA > pontosB
              ? "Jogador A venceu o jogo!"
              : pontosB > pontosA
              ? "Jogador B venceu o jogo!"
              : "Empate geral!"}
          </h2>

          <button onClick={reiniciar}>Jogar novamente</button>
        </div>
      )}
    </div>
  );
}