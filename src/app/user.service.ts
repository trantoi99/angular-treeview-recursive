import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  private flags = ['a', 'b', 'g']

  constructor() { }

  public hasFlags(flags: string | string[]): boolean {
    const coerced = Array.isArray(flags) ? flags : [flags];

    return coerced.every(flag => this.flags.indexOf(flag) > -1)
  }

}