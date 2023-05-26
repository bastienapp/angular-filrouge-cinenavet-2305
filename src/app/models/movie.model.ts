export class Movie {
  constructor(
    private _id: string,
    private _title: string,
    private _director: string,
    private _poster: string,
    private _rate: number,
    private _favourite: boolean = false
  ) { }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get director(): string {
    return this._director;
  }

  get poster(): string {
    return this._poster;
  }

  get rate(): number {
    return this._rate;
  }

  get favourite(): boolean {
    return this._favourite;
  }
}
