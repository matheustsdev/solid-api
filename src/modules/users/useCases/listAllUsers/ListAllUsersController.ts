import { Request, Response } from 'express';

import { ListAllUsersUseCase } from './ListAllUsersUseCase';

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const id = request.headers.user_id;

    const all = this.listAllUsersUseCase.execute({ user_id: String(id) });

    return response.json(all);
  }
}

export { ListAllUsersController };
