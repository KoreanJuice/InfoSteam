export interface GetOwnedGames {
  response: SimpleGetOwnedGames;
}

export interface SimpleGetOwnedGames {
  game_count: number;
  games: MultipleGames[];
}

export interface MultipleGames {
  appid: number;
  name: string;
  playtime_forever: number;
  img_icon_url: string;
  img_logo_url: string;
  has_community_visible_stats: boolean;
  playtime_windows_forever: number;
  playtime_mac_forever: number;
  playtime_linux_forever: number;
}
