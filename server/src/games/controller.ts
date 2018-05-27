import { JsonController, Get, Post, Body, Param} from 'routing-controllers';
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

@Post('/games')
async createGame(
      @Body() game: Game
) {
      const {Name, ...rest} = game
      const entity = Game.create(rest)
      await entity.initColor()
      await entity.initBoard()
      return entity.save()
    }
}
