
export interface Artist {
  id: string;
  name: string;
  genre: string;
  imageUrl: string;
  latestRelease: string;
}

export interface Model {
  id: string;
  name: string;
  height: string;
  measurements: string;
  imageUrl: string;
  location: string;
}

export interface FashionEvent {
  id: string;
  title: string;
  season: string;
  location: string;
  videoThumbnail: string;
  date: string;
}

export interface RadioShow {
  id: string;
  title: string;
  host: string;
  time: string;
  day: string;
}
