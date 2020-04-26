import sha256 from 'sha256';

export default class Utils {

  public static crypt(str: string): string {
    return sha256.x2(str);
  }

}
