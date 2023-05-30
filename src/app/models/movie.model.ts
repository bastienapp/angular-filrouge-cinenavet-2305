export class Movie {
  constructor(
    public id: string,
    public title: string,
    public director: string,
    public poster: string,
    public rate: number,
    public favourite: boolean = false
  ) { }
}
