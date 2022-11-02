const { Connection,LAMPORTS_PER_SOL } = require('@solana/web3.js');

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");


(async () => {
    const airdropSignature = await connection.requestAirdrop(
       
        '84TS2fuEwHzMz3djZ5LTFkWs2gvMDDGEkgawF23mLmZT',
        LAMPORTS_PER_SOL
      );
      
      const latestBlockHash = await connection.getLatestBlockhash();
    
        await connection.confirmTransaction({
            blockhash: latestBlockHash.blockhash,
            lastValidBlockHeight: latestBlockHash.lastValidBlockHeight,
            signature: airdropSignature,
        });
})();
