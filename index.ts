import { Header } from "./src/components/header";
import { PendingSeries } from "./src/components/movieCard";
import { Main } from "./src/components/main";
import "./styles.css";
import { getSeries } from "./src/data/series";

new Header(".container", "Lanza's Movie List");
new Main(".container", "List");
new PendingSeries(".info", "Oh yeah");
