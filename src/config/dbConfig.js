// ⚠️ DEMO FILE — exists only to demonstrate the CI/CD pipeline's
// AI + regex secret-scanning step (see .github/workflows/cicd.yml,
// job "ai-code-review"). These are fake/dummy values, not real
// credentials — do not treat this as a real database config.
//
// To see the "Regex Secret Scan" section in the generated report go
// from N finding(s) back to 0 finding(s), delete this file (or remove
// the hardcoded values below) and push again. The scan reads whatever
// is in the repo at the time the pipeline runs, so the report always
// reflects the current state of the code.

const DB_HOST = "";
const DB_PORT = "";
const DB_USER = "";
const DB_PASSWORD = "";
const DB_NAME = "";
const DB_API_KEY = "";

const DB_CONNECTION_STRING =
  "";

export {
  DB_HOST,
  DB_PORT,
  DB_USER,
  DB_PASSWORD,
  DB_NAME,
  DB_API_KEY,
  DB_CONNECTION_STRING,
};
