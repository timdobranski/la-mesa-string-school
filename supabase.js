// import 'react-native-url-polyfill/auto';
// import Constants from 'expo-constants';
// const { SUPABASE_URL, SUPABASE_PUBLIC_API_KEY } = Constants.manifest.extra;
import * as SecureStore from 'expo-secure-store'
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_API_KEY, SUPABASE_URL } from "@env";

const ExpoSecureStoreAdapter = {
  getItem: (key) => {
    return SecureStore.getItemAsync(key)
  },
  setItem: (key, value) => {
    SecureStore.setItemAsync(key, value)
  },
  removeItem: (key) => {
    SecureStore.deleteItemAsync(key)
  },
}
  // Supabase handling

  console.log('supabase: ', SUPABASE_API_KEY, SUPABASE_URL)
  const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY, {
    auth: {
      storage: ExpoSecureStoreAdapter,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    }
  });

  export default supabase;


