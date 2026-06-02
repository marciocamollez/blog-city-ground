export class PostEntity {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly slug: string,
    public readonly excerpt: string,
  ) {}
}