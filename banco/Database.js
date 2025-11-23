import * as SQLite from "expo-sqlite";

let db = null;

// Inicializa o banco — obrigatório antes de usar qualquer função
export const initDatabase = async () => {
  // Abre ou cria o banco
  db = await SQLite.openDatabaseAsync("user_db.db");

  // Cria tabela se não existir
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE,
      password TEXT
    );
  `);

  console.log("Banco SQLite inicializado com sucesso!");
  return db;
};

// Registrar usuário
export const registerUser = async (email, password) => {
  if (!db) return null;
  try {
    await db.runAsync(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, password]
    );
    return true;
  } catch (error) {
    throw error;
  }
};

// Login
export const loginUser = async (email, password) => {
  if (!db) {
    await initDatabase();
  }

  const result = await db.getFirstAsync(
    "SELECT * FROM users WHERE email = ? AND password = ?",
    [email, password]
  );

  return result ?? null;
};