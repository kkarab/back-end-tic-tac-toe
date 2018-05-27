import { JsonController, Get, Post, Put, Body, Param, NotFoundError} from 'routing-controllers';
import Game from './entity';

@JsonController()
export default class UserController { 

@Get('/games/:id')
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

@Put('/games/:id')
async updateGame(
  @Param('id') id: number,
  @Body() update: Partial<Game>
) {
  const game = await Game.findOne(id)
  if (!game) throw new NotFoundError('Cannot find game')

  return Game.merge(game, update).save()
    }