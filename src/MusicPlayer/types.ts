declare global {
    interface Window {
        MIDIjs: Record<string, unknown>;
    }
}

export type SongData = {
  id: number;
  artist: string;
  songTitle: string;
  filePath: string;
};

export type Tracks = SongData[];