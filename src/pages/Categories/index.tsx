import ProductsList from '../../components/ProductsList'

import {
  useGetAcgtionGamesQuery,
  useGetFightGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportsGamesQuery,
  useGetRpgGamesQuery,
  useGetOnSaleQuery,
  useGetSoonQuery
} from '../../services/api'

const Categories = () => {
  const { data: promoGames, isLoading: isLoadingPromo } = useGetOnSaleQuery()
  const { data: comingSoonGames, isLoading: isLoadingComing } = useGetSoonQuery()
  const { data: actionGames, isLoading: isLoadingAction } = useGetAcgtionGamesQuery()
  const { data: sportsGames, isLoading: isLoadingSports } = useGetSportsGamesQuery()
  const { data: fightGames, isLoading: isLoadingFight } = useGetFightGamesQuery()
  const { data: rpgGames, isLoading: isLoadingRpg } = useGetRpgGamesQuery()
  const { data: simulationGames, isLoading: isLoadingSimulation } = useGetSimulationGamesQuery()

    return (
      <>
        <ProductsList 
        games={promoGames} 
        title="Promoções" 
        background="black" 
        id="on-sale" 
        isLoading={isLoadingPromo}
        />
        <ProductsList 
        games={comingSoonGames} 
        title="Em breve" 
        background="gray" 
        id="coming-soon" 
        isLoading={isLoadingComing}
        />
        <ProductsList 
        games={actionGames} 
        title="Ação" 
        background="black" 
        id="action" 
        isLoading={isLoadingAction}
        />
        <ProductsList 
        games={sportsGames} 
        title="Esportes" 
        background="gray" 
        id="sports" 
        isLoading={isLoadingSports}
        />
        <ProductsList 
        games={fightGames} 
        title="Luta" 
        background="black" 
        id="fight" 
        isLoading={isLoadingFight}
        />
        <ProductsList 
        games={rpgGames} 
        title="RPG" 
        background="gray" 
        id="rpg" 
        isLoading={isLoadingRpg}
        />
        <ProductsList 
        games={simulationGames} 
        title="Simulação" 
        background="black" 
        id="simulation" 
        isLoading={isLoadingSimulation}
        />
      </>
    )
}

export default Categories
