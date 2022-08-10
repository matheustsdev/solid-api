import { Response, Request } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    const createdUser = this.createUserUseCase.execute({ email, name });

    return response.json(createdUser);
  }
}

export { CreateUserController };
