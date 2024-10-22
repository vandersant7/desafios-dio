let balanceVictory = rankedMatchCalculator(83, 10)
let heroRank = rankHeroRanking()

console.log(`O Herói tem saldo de ${balanceVictory} vitórias, está no nível de ${heroRank}`)

function rankHeroRanking(
    resultRank = balanceVictory
) {
    
    if (resultRank <= 10 && resultRank > 0) {
        return 'Ferro'
      } else if (resultRank <= 20) {
        return 'Bronze'
      } else if (resultRank <= 50) {
        return 'Prata'
      } else if (resultRank <= 80) {
        return 'Ouro'
      } else if (resultRank <= 90) {
        return 'Diamante'
      } else if (resultRank <= 100) {
        return 'Lendário'
      } else {
        return 'Imortal'
      }
}

function rankedMatchCalculator(victoryQuantity, defeatQuantity) {
  let resultRank = victoryQuantity - defeatQuantity
  return resultRank 

}







