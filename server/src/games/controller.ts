import { JsonController, Get, Param} from 'routing-controllers';
import Game from './entity';

@JsonController()
export default class UserController { 

@Get('/game/:id')
getGame(
  @Param('id') id: number
) {
  return Game.findOne(id)
}

@Get('/games')
async allGames() {
  const games = await Game.find()
  return { games }
}

}
