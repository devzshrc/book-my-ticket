import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../../public");

export function getHomePage(req, res) {
  res.sendFile(join(publicDir, "index.html"));
}
