import * as SecureStore from 'expo-secure-store';

export async function getNotionToken() {
  const token = await SecureStore.getItemAsync('notion_token');
  return token;
}
