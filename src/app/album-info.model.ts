export class AlbumInfo {
  id: number;
  artist: string;
  album: {
    name: string;
    releaseDate: string;
    coverImage: string;
    tracks: Track[];
  };
}

class Track {
  trackNumber: number;
  trackName: string;
  trackLength: string;
  trackPrice: number;
}
