import { google } from 'googleapis';

const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS);
credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/spreadsheets']
});

try {
  await auth.getClient();
  console.log('✅ Autenticación exitosa! - El problema NO es de Google');
} catch (err) {
  console.error('❌ Error:', err.message);
  console.error('Código:', err.code);
}
