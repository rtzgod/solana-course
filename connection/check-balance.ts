import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";




const suppliedPublicKey = process.argv[2];
if (!suppliedPublicKey) {
    throw new Error("Provide a public key to check the balance of!")
}

const connection = new Connection("https://api.devnet.solana.com", "confirmed");

const publicKey = new PublicKey(suppliedPublicKey);

const balanceInLamports = await connection.getBalance(publicKey);

const balanceInSol = balanceInLamports / LAMPORTS_PER_SOL;

console.log(`Finished! The balance of the account at ${publicKey}, is ${balanceInSol} SOL`);
