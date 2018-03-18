export class PlatformService {
  private _iOS: boolean;
  private _isAndroid: boolean;
  private _isElectron: boolean;

  public get isMobileDevice(): boolean {
    return this._iOS || this._isAndroid;
  }

  public get isMobileWeb(): boolean {
    return window.innerWidth <= 768;
  }

  public get isWeb(): boolean {
    return !this.isMobileDevice;
  }

  public get isIOS(): boolean {
    return this._iOS;
  }

  public get isAndroid(): boolean {
    return this._isAndroid;
  }

  public get isElectron(): boolean {
    return this._isElectron;
  }
}
