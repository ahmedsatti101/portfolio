//run file when running on new machine

import { db } from "./database";

export const migrate = () => {
  db.serialize(() => {
    db.run(
      `CREATE TABLE IF NOT EXISTS experiences (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        company TEXT NOT NULL,
        role TEXT NOT NULL,
        logo TEXT NOT NULL,
        date TEXT NOT NULL
    );
  `,
      (err: Error) => {
        if (err) {
          console.error(err.message);
        }
        console.log("Experience table created!");
      },
    );
  });
};
