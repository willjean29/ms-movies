export interface IRemoveFavoriteUseCase {
  execute(id: string): Promise<string>;
}
