import {environment} from '../../environments/environment';

export class Utils {
  public static baseUrl = environment.production ?
    'http://localhost:3000' : 'http://localhost:3000';
}
