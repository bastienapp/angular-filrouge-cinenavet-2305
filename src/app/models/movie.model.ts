export class Movie {
  constructor(
    private _title: string,
    private _director: string,
    private _poster: string,
    private _rate: number
  ) { }

  get title(): string {
    return this._title
  }

  get director(): string {
    return this._director
  }

  get poster(): string {
    return this._poster
  }

  get rate(): number {
    return this._rate
  }
}
