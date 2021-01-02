export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "https://react-cqzw1x.stackblitz.io";
const clientId = "e19c6f444be348c487ce18b021598168";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
