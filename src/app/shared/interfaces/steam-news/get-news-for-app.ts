export interface GetNewsForApp {
  appnews: {
    appid: number;
    newsitems: [
      {
        gid: string;
        title: string;
        url: string;
        is_external_url: boolean;
        author: string;
        contents: string;
        feedlabel: string;
        date: number;
        feedname: string;
        feed_type: number;
        appid: number;
        tags: string[];
      }
    ];
    count: number;
  };
}
