import ProductsList from "../../components/ProductsList"
import Game from "../../models/Game"

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starwars from '../../assets/images/star_wars.png'
import final from '../../assets/images/final.png'
import hollow1 from '../../assets/images/hollow1.png'
import stalker from '../../assets/images/stalker.png'
import alan2 from '../../assets/images/alan2.png'



const promocoes: Game[] = [
  {
    id: 1,
    category: 'Ação',
    description: 'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    title: 'Resident Evil 4',
    system: 'Windows',
    infos: ['10%', 'R$ 250,00'],
    image: resident
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Diablo IV é um RPG de ação da Blizzard com ambientação sombria e muita matança de demônios.',
    title: 'Diablo IV',
    system: 'PS5',
    infos: ['5%', 'R$ 290,00'],
    image: diablo
  },
  {
    id: 3,
    category: 'Aventura',
    description: 'The Legend of Zelda: Tears of the Kingdom é a sequência de Breath of the Wild.',
    title: 'Zelda: Tears of the Kingdom',
    system: 'Switch',
    infos: ['20%', 'R$ 350,00'],
    image: zelda
  },
  {
    id: 4,
    category: 'Sci-fi',
    description: 'Star Wars Jedi: Survivor é um jogo de ação-aventura em terceira pessoa da Respawn.',
    title: 'Star Wars Jedi: Survivor',
    system: 'PC',
    infos: ['15%', 'R$ 320,00'],
    image: starwars
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    category: 'RPG',
    description: 'Final Fantasy VII Rebirth traz de volta Cloud e companhia em um mundo expandido e reimaginado.',
    title: 'Final Fantasy VII Rebirth',
    system: 'PS5',
    infos: ['Pré-venda', 'R$ 350,00'],
    image: final
  },
  {
    id: 6,
    category: 'Aventura',
    description: 'Hollow Knight: Silksong continua a jornada em um novo reino com Hornet como protagonista.',
    title: 'Hollow Knight: Silksong',
    system: 'PC / Switch',
    infos: ['Lançamento em breve', 'R$ 99,00'],
    image: hollow1
  },
  {
    id: 7,
    category: 'FPS',
    description: 'STALKER 2: Heart of Chornobyl é um jogo de tiro e sobrevivência em mundo aberto pós-apocalíptico.',
    title: 'STALKER 2',
    system: 'Xbox Series / PC',
    infos: ['Pré-venda', 'R$ 299,00'],
    image: stalker
  },
  {
    id: 8,
    category: 'Terror',
    description: 'Alan Wake 2 mergulha em um suspense psicológico sombrio com narrativa cinematográfica.',
    title: 'Alan Wake 2',
    system: 'PS5 / PC / Xbox',
    infos: ['Pré-venda', 'R$ 279,00'],
    image: alan2
  }
]


const Categories = () => (
  <>
    <ProductsList games={promocoes} title='RGP' background='gray' />
    <ProductsList games={emBreve} title='Ação' background='black' />
    <ProductsList games={promocoes} title='Aventura' background='gray' />
    <ProductsList games={emBreve} title='FPS' background='black' />
  </>
)

export default Categories
