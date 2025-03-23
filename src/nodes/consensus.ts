
import { BASE_NODE_PORT } from "../config";

export async function startConsensus(N: number) {
  // Lance l'algorithme de consensus sur tous les nœuds
  for (let index = 0; index < N; index++) {
    await fetch('http://localhost:${BASE_NODE_PORT + index}/start');
  }
}

export async function stopConsensus(N: number) {
  // Arrête l'algorithme de consensus sur tous les nœuds
  for (let index = 0; index < N; index++) {
    await fetch('http://localhost:${BASE_NODE_PORT + index}/stop');
  }
}
